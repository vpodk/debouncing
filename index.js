/**
 * @fileoverview Debouncing and throttling library optimizes event handling by
 *   delaying or limiting function execution.
 *
 * @see https://google.github.io/styleguide/jsguide.html
 * @see https://google.github.io/styleguide/tsguide.html
 * @module debouncing
 */

/**
 * In the debouncing technique, no matter how many times the user fires the
 * event, the attached function will be executed only after the specified
 * time once the user stops firing the event.
 *
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 * @param {!Function} func The function to execute.
 * @param {number=} timeout The timeout in milliseconds. Default 250 ms.
 * @return {!Function} Returns a function, that, as long as it continues
 *     to be invoked, will not be triggered.
 * @see https://davidwalsh.name/javascript-debounce-function
 * @method
 */
export const debounce = (func, timeout = 250) => {
  let /** ?number */ timer;

  return (...args) => {
    const deferred = () => {
      timer = null;
      func(...args);
    };

    timer && clearTimeout(timer);
    timer = setTimeout(deferred, timeout);
  };
};

/**
 * Throttling is a technique in which, no matter how many times the user
 * fires the event, the attached function will be executed only once in a
 * given time interval.
 *
 * Returns a function, that, as long as it continues to be invoked, will only
 * trigger every N milliseconds.
 * @param {!Function} func The function to execute.
 * @param {number=} timeout The timeout in milliseconds. Default 250 ms.
 * @return {!Function} Returns a function, that, as long as it continues
 *     to be invoked, will only trigger every N milliseconds.
 * @method
 */
export const throttle = (func, timeout = 250) => {
  let /** ?number */ timer;

  return (...args) => {
    const deferred = () => {
      timer = null;
      func(...args);
    };

    if (!timer) timer = setTimeout(deferred, timeout);
  };
};
