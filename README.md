# Debouncing [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Debouncing%20and%20throttling%20events%20module%20from%20Glize%20library.&url=https://glize.js.org&via=GitHub&hashtags=Glize,JavaScript,ECMAScript,ES6)
[![Build Status](https://github.com/Datamart/debouncing/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Datamart/debouncing/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/debouncing.svg?style=flat)](https://npmjs.org/package/debouncing) [![Website](https://img.shields.io/website-up-down-green-red/https/glize.js.org.svg?style=flat)](https://glize.js.org)

Debouncing and throttling events module from Glize library.

## Usage

```bash
npm install debouncing --save
```

```js
import {debounce, throttle} from 'debouncing';

const onResize = (event) => {
  console.log('height', window.innerHeight);
  console.log('width', window.innerWidth);
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
window.addEventListener('resize', debounce(onResize, 250), false);

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
window.addEventListener('resize', throttle(onResize, 250), false);
```

For more information please visit [Glize project page](https://glize.js.org).
