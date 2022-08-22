let promise = new MyPromise((resolve, reject) => {
  throw  new Error('Exception:Error');
  // resolve('成功')
})


promise.then((value) => {
  console.log(value);
}, (reason) => {
  console.log(reason);
});

