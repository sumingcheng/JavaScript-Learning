let promise1 = new MyPromise((resolve, reject) => {
  resolve('promise1')
})

let promise2 = promise1.then((value) => {
  return value + '->then->promise2';
}).then(value => {
  console.log(value);
})
