// document.body.style.backgroundColor = 'orange';
// console.log(1)
//
// setTimeout(() => {
//   document.body.style.backgroundColor = 'green';
//   console.log(2)
// }, 100);
//
// Promise.resolve(3).then(num => {
//   document.body.style.backgroundColor = 'purple';
//   console.log(num);
// })
//
// console.log(4);

// Promise.resolve().then(() => {
//   console.log('p1');
//   setTimeout(() => {
//     console.log('s2')
//   }, 0)
// })
//
// setTimeout(() => {
//   console.log('s1');
//   Promise.resolve().then(() => {
//     console.log('p2');
//   })
// })

// console.log(1);
//
// setTimeout(() => {
//   console.log(2)
// }, 10);
//
// new Promise(function (resolve, reject) {
//   // executor 执行器 同步代码
//   console.log(3);
//   // resolve('');
//   console.log(4);
// }).then(res => {
//   console.log(5);
// })
// console.log(6);
//
// //1 3 4 6 5 2


//  3 12 5 67 4
// let res = function () {
//   console.log(1)
//   return new Promise((resolve, reject) => {
//     console.log(2)
//     resolve(4);
//   })
// }
//
// new Promise(async (resolve, reject) => {
//   console.log(3);
//   let test = await res();
//   console.log(test);
// })
//
// console.log(5)
//
// new Promise((resolve, reject) => {
//   console.log(6)
// })
//
// console.log(7)


// 1 2 m1 m2
// const oBtn = document.getElementById('btn');
//
// oBtn.addEventListener('click', () => {
//   console.log(1);
//
//   Promise.resolve('m1').then((str) => {
//     console.log(str);
//   })
// }, false)
//
// oBtn.addEventListener('click', () => {
//   console.log(2);
//
//   Promise.resolve('m2').then((str) => {
//     console.log(str);
//   })
// }, false);
//
// oBtn.click();
//  2 then1 then4 then2 then5 then6 setTimeout1 then3 setTimeout2 setTimeout3

// setTimeout(() => {
//   console.log('setTimeout1');
//   setTimeout(() => {
//     console.log('setTimeout3')
//   }, 1000);
//   Promise.resolve().then(data => {
//     console.log('then3');
//   })
// })
//
// Promise.resolve().then(data => {
//   console.log('then1');
//   console.log('then4');
//   Promise.resolve().then(data => {
//     console.log('then6');
//   })
// })
//
//
// Promise.resolve().then(data => {
//   console.log('then2');
//   console.log('then5');
//   setTimeout(() => {
//     console.log('setTimeout2');
//   }, 1000);
// })
//
// console.log(2);


// script start、 a1.start 、 async2、 promise1、 script end、 a1 end、promise2、setTimeout

// async function async1() {
//   console.log('a1.start')
//   await async2();
//   // await 之后的相当于then的回调
//   // async2().then(res=>{
//   //   console.log('a1 end')
//   // })
//   console.log('a1 end')
// }
//
// async function async2() {
//   console.log('async2');
// }
//
// console.log('script start');
//
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
//
// async1();
//
// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// })
//
// console.log('script end');
















