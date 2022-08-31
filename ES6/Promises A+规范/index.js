let promise1 = new MyPromise((resolve, reject) => {
  resolve('promise1')
})

let promise2 = promise1.then(() => {
  return new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(new MyPromise((resolve) => {
        resolve('彳亍')
      }))
    }, 2000)
  })
}, (reason) => {
  return reason;
});

promise2.then().then().then().then().then().then().then().then().then(value => {
  throw Error('Error')
}, reason => {
  console.log(reason);
}).catch(e => {
  console.log(e)
})
