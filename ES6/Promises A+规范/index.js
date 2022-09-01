let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
})

let p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 2000);
})
// 赛跑，数组里，谁先出结果，就拿谁的结果
MyPromise.race([p1, p2, '1']).then(res => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
