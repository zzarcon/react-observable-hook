import {useEffect, useState} from 'react';
import { Observable } from 'rxjs';

// TODO: make getInitialState?: T | () => T
export function useObservable<T>(observable: Observable<T>, getInitialState?: () => T): T | undefined {
  const [value, setValue] = useState(getInitialState && getInitialState());

  useEffect(() => {
    const subscription = observable.subscribe({
      next(value) {
        setValue(value);
      }
    });

    return () => subscription.unsubscribe();
  }, [observable])
  
  return value;
}