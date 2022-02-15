// 相当于前端引入一个插件
const {
  log
} = require('console');
let fs = require('fs');

// fs.readFile('./name.txt', 'utf-8', function (err, data) {
//   fs.readFile(data, 'utf-8', function (err, data) {
//     fs.readFile(data, 'utf-8', function (err, data) {
//       console.log(data);
//     });
//   });
// })

function readFile(pathname) {
  // Promises是构造函数，他会包装一个异步函数
  // execute 执行器函数
  return new Promise(function (resolve, reject) {
    console.log(1);
    fs.readFile(pathname, 'utf-8', function (err, data) {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}
let promis = readFile('./name.txt');
console.log(promis);