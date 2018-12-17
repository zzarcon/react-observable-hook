import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

// TODO: make getInitialState?: T | () => T
export function useObservable<T>(observable: Observable<T>, getInitialState?: () => T): [T, Function] | undefined {
  const [value, setValue] = useState(getInitialState && getInitialState());

  let cancel
  useEffect(() => {
    const subscription = observable.subscribe({
      next(value) {
        setValue(value);
      }
    });

    cancel = () => subscription.unsubscribe();
    return cancel;
  }, [observable])

  return [value, cancel];
}
