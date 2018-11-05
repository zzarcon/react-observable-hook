# react-observable-hook
> Syntax sugar for rxjs observables and React hooks

## Install

```
$ yarn add react-observable-hook
```

## Usage

**full example**

```typescript
import useObservable from 'react-observable-hook'
import {ReplaySubject} from 'rxjs';

export interface Clock {
  seconds: number;
}

const subject = new ReplaySubject<Clock>(1);
setInterval(() => {
  subject.next({seconds: new Date().getSeconds()});
}, 1000);

export default () => {
  const clock = useObservable<Clock>(subject);

  return (
    <div>
      <div>
        Seconds: {clock ? clock.seconds : 'loading...'}
      </div>
    </div>
  )
}
```

**initial state**

```typescript
const clock = useObservable<Clock>(subject, () => {seconds: new Date().getSeconds()});
```

## Author 

[@zzarcon](https://twitter.com/zzarcon) 😜