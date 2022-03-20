let fs = require('fs');

// function readFile(pathname) {
//   // Promises是构造函数，他会包装一个异步函数
//   // execute 执行器函数是同步执行函数
//   return new Promise(function (resolve, reject) {
//     console.log(1);
//     fs.readFile(pathname, 'utf-8', function (err, data) {
//       // 成功
//       resolve(data);
//       // 失败
//       if (err) {
//         reject(err);
//         return;
//       }
//     })
//   })
// }
// // 异步任务的完成与否，取决于当前Promise的状态
// let promise = readFile('./name.txt');

// // 异步注册的函数是异步任务，微任务
// promise.then(function (data) {
//   console.log(data);
// }, function (err) {
//   console.log(err);
// })

function readFile(pathname) {
  return new Promise(function (resolve, reject) {
    fs.readFile(pathname, 'utf-8', function (err, data) {
      resolve(data);
      if (err) {
        reject(err);
        return;
      }
    })
  })
}


let promise = readFile('./name.txt');
promise.then(function (data) {
  console.log('第1次调用', data);
  promise.then(function (data) {
    console.log('第2次调用', data);
    promise.then(function (data) {
      console.log('第3次调用', data);
    })
  })
}, function (err) {
  console.log(err);
})