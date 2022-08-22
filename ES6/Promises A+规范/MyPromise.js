const PENDING = 'PENDING';
const FULFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  // constructor在实例化的时候自动执行
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    }

    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason
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
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}

