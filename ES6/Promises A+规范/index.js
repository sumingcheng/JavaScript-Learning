MyPromise.resolve(new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('smc');
  }, 2000)
})).then((resolve) => {
  console.log(resolve);
});


