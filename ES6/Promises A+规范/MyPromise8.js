const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

function resolvePromise(promise2, x, resolve, reject) {
  // Promise的处理流程
  if (promise2 === x) {
    return reject(new TypeError('chaining cycle detected for promise #<MyPromise>'))
  }
  let called = false;

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then;

      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return;
          called = true;
          reject(r);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

function isPromise(x) {
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    let then = x.then;
    return typeof then === 'function'
  }
  return false;
}

function isIterable(value) {
  return value !== null && value !== undefined && typeof value[Symbol.iterator] === 'function';
}

class MyPromise {
  // constructor在实例化的时候自动执行
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
        return;
      }

      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason
        // 发布
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    // 防止then使用的时候不传值出现问题
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason;
    };

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0);
      }

      // 订阅
      if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2;
  }

  catch(errorCallback) {
    return this.then(null, errorCallback);
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    })
  }

  static all(promiseAll) {
    let resArr = [],
        idx = 0;
    return new MyPromise((resolve, reject) => {
      promiseAll.map((promise, index) => {
        if (isPromise(promise)) {
          promise.then((res) => {
            formatResArr(res, index, resolve);
          }, reject);
        } else {
          formatResArr(promise, index, resolve);
        }
      })
    })

    function formatResArr(value, index, resolve) {
      resArr[index] = value;

      if (++idx === promiseAll.length) {
        resolve(resArr);
      }
    }


  }

  static allSettled(promiseAll) {
    let resArr = [],
        idx = 0;
    if (!isIterable(promiseAll)) {
      throw new TypeError('不是可迭代对象')
    }

    return new MyPromise((resolve, reject) => {
      if (promiseAll.length === 0) {
        resolve([]);
      }

      promiseAll.map((promise, index) => {
        if (isPromise(promise)) {
          promise.then((value) => {
            formatResArr('fulfilled', value, index, resolve)
          }, (reason) => {
            formatResArr('rejected', reason, index, reject)
          })
        } else {
          reject(new TypeError(`Array:index[${index}] not Promise`));
        }
      });

      function formatResArr(status, value, index, resolve) {
        switch (status) {
          case 'fulfilled':
            resArr[index] = {
              status,
              value: value
            }
            break;
          case 'rejected':
            resArr[index] = {
              status,
              reason: value
            }
            break;
          default:
            break;
        }

        if (++idx === promiseAll.length) {
          resolve(resArr);
        }
      }

    })
  }

  static race(promiseAll) {
    return new MyPromise((resolve, reject) => {
      promiseAll.map((promise) => {
        if (isPromise(promise)) {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      })
    })
  }
}

