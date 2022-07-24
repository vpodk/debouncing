import * as assert from "assert";
import { debounce, throttle } from "./index.js";

const testDebounce = async () => {
  const cb = (num) => assert.strictEqual(num, 3);
  const fn = debounce(cb, 100);
  fn(1);
  fn(2);
  fn(3);
};

const testThrottle = async () => {
  const cb = (num) => assert.strictEqual(num, 1);
  const fn = throttle(cb, 100);
  fn(1);
  fn(2);
  fn(3);
};

const runTests = async () => {
  await testDebounce();
  await testThrottle();
};

runTests();
