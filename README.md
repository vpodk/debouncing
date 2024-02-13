# Debouncing [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Debouncing%20and%20throttling%20library%20optimizes%20event%20handling%20by%20delaying%20or%20limiting%20function%20execution.&url=https://npmjs.com/debouncing&via=GitHub&hashtags=JavaScript,ECMAScript,ES6)

[![Build Status](https://github.com/vpodk/debouncing/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/vpodk/debouncing/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/debouncing.svg?style=flat)](https://npmjs.org/package/debouncing) [![NPM downloads](https://img.shields.io/npm/dm/debouncing.svg?style=flat)](https://npmjs.org/package/debouncing)

Debouncing and throttling library optimizes event handling by intelligently delaying or limiting function execution. This prevents overwhelming user interfaces and unnecessary server requests, especially for fast-paced events like scrolling, typing, or button clicks. Choose between debouncing for single, final execution after a pause, or throttling for consistent function calls within a set interval. Leverage this library to enhance performance and responsiveness in your web applications.

## Usage

```bash
npm install debouncing --save
```

```js
import { debounce, throttle } from "debouncing";

const onResize = (event) => {
  console.log("height", window.innerHeight);
  console.log("width", window.innerWidth);
};

/**
 * In the debouncing technique, no matter how many times the user fires the
 * event, the attached function will be executed only after the specified
 * time once the user stops firing the event.
 *
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 * @param {!Function} func The function to execute.
 * @param {number=} timeout The timeout in milliseconds.
 * @return {!Function} Returns a function, that, as long as it continues
 *     to be invoked, will not be triggered.
 */
window.addEventListener("resize", debounce(onResize, 250), false);

/**
 * Throttling is a technique in which, no matter how many times the user
 * fires the event, the attached function will be executed only once in a
 * given time interval.
 *
 * Returns a function, that, as long as it continues to be invoked, will only
 * trigger every N milliseconds.
 * @param {!Function} func The function to execute.
 * @param {number=} timeout The timeout in milliseconds.
 * @return {!Function} Returns a function, that, as long as it continues
 *     to be invoked, will only trigger every N milliseconds.
 */
window.addEventListener("resize", throttle(onResize, 250), false);
```
