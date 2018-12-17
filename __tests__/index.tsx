import { useObservable } from "../src/";
import React from "react";

import { timer } from "rxjs";
import {  } from "rxjs/operators";
import { render } from 'react-testing-library'

const seconds5 = () => timer(5000);

const Hello = () => <b>Hello</b>
const Timer = () => {
  const [result, cancel] = useObservable<Object>(seconds5());
  const { total, elapsed, remaining } = result;
  return (
    <div>
      Total: {total}
    </div>
  );
};

describe("Smoke Test", () => {
  expect(render(<Hello/>)).not.toThrow();
})
describe("useObservable()", () => {
  it("Timer example", () => {
    expect(render(<Timer/>)).not.toThrow();
    // TODO elaborate once testing is working
  });
});
