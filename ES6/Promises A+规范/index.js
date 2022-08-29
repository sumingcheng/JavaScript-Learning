let promise = new MyPromise((resolve, reject) => {
  // throw  new Error('Exception:Error');
  setTimeout(() => {
    resolve('成功')
  }, 2000)
})


promise.then((value) => {
  console.log('value', value);
}, (reason) => {
  console.log('reason', reason);
});

