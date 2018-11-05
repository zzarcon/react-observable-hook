import {useEffect, useState} from 'react';
import { Observable } from 'rxjs';

export function useObservable<T>(observable: Observable<T>, initialState?: T): T | undefined {
  const [value, setValue] = useState(initialState);

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