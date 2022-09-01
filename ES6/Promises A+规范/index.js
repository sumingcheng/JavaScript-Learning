let a3 = 3;


let a2 = MyPromise.resolve(new MyPromise((resolve, reject) => {
  resolve('smc');
}))

let a1 = MyPromise.resolve(new MyPromise((resolve, reject) => {
  resolve('smc');
}))


let all = MyPromise.all([a1, a2, a3]);

all.then((res) => {
  console.log(res)
})
