let promise = new Promise((resolve, reject) => {
  // throw  new Error('Exception:Error');
  resolve('成功')
})


// promise.then(res => {
//   return res // 普通值
// }).then(res => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(res);
//     }, 2000)
//   })
// }).then(res => {
//   console.log(res)
// })

// promise.then(value => {
//   return value // 普通值
// }).then(value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Error');
//     }, 2000)
//   })
// }).then(value => {
//   console.log(value)
// }, (reason => {
//   console.log(reason)
// }))

// then走了失败的回调后，再走then
// promise.then(value => {
//   return value // 普通值
// }).then(value => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Error');
//     }, 2000)
//   })
// }).then(value => {
//   console.log(value)
// }, (reason => {
//   console.log(reason)
//   //  默认return undefined
// })).then(value => {
//   // 失败的结果走到下一个成功
//   console.log(value, 'value');
// }, reason => {
//   console.log(reason, 'reason')
// })


//then中 抛出异常
// promise.then(value => {
//   return value // 普通值
// }).then(value => {
//   throw new Error('Error');
// }).then(value => {
//   console.log(value, 'value')
// }, reason => {
//   console.log(reason, 'reason')
// })

//捕获异常
promise.then(value => {
  return value // 普通值
}).then(value => {
  throw new Error('Error');
}).then(value => {
  console.log(value, 'value')
}, reason => {
  console.log(reason, 'reason')
}).catch(error => {
  console.log(error, 'error')
})


