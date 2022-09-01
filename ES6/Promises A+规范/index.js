let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 2000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 1000);
})
// 赛跑，数组里，谁先出结果，就拿谁的结果
Promise.race([p1, p2]).then(res => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})
