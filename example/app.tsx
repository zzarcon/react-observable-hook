import * as React from 'react';
import {ReplaySubject} from 'rxjs';
import {GHCorner} from 'react-gh-corner';
import useObservable from '../src';
import {AppWrapper} from './styled';

export interface AppState {
  
}

export interface Clock {
  seconds: number;
}

export interface AppProps {

}

const repoUrl = 'https://github.com/zzarcon/';
const subject = new ReplaySubject<Clock>(1);
setInterval(() => {
  const seconds = new Date().getSeconds();
  subject.next({
    seconds
  });
}, 1000);

export default () => {
  const clock = useObservable<Clock>(subject);

  return (
    <AppWrapper>
      <GHCorner openInNewTab href={repoUrl} />
      <div>Seconds: {clock ? clock.seconds : 'loading...'}</div>
    </AppWrapper>
  )
}