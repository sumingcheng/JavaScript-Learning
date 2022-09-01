let a3 = 3;


let a2 = MyPromise.resolve(new MyPromise((resolve, reject) => {
  resolve('222');
}))

let a1 = MyPromise.resolve(new MyPromise((resolve, reject) => {
  reject('333');
}))


MyPromise.allSettled([a1, a2, a3]).then((res) => {
  console.dir(res)
}, reason => {
  console.dir(reason)
})
