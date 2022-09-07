module.exports = {
  promisify(fn) {
    return function (...args) {
      return new MyPromise((resolve, reject) => {
        fn(...args, (error, data) => {
          if (error) {
            return reject(error);
          }
          resolve(data);
        })
      })
    }
  },
  promiseifyAll(fns) {
    Object.keys(fns).map((fnName) => {
      if (typeof fns[fnName] === 'function') {
        fns[fnName + 'Async'] = this.promisify(fns[fnName]);
      }
    });
    return fns;
  }
}
