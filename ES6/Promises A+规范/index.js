// let promise1 = new MyPromise((resolve, reject) => {

//   throw new Error('Exception: Error');
// });


// promise1.then((value) => {
//   console.log(value);
// }, (reason) => {
//   console.log(reason);
// })


// class MyPromise {
//   constructor(excutor) {
//     this.status = PEDING;
//     this.value = undefined;
//     this.reason = undefined;

//     const resolve = (value) => {
//       if (this.status === PEDING) {
//         this.status = FULFILLED;
//         this.value = value;
//       }
//     }

//     const reject = (reason) => {
//       if (this.status === PENDING) {
//         this.status = REJECT;
//         this.reason = reason
//       }
//     }
//   }

// }




// function demo() {
//   let a = "1";
//   return new Array(a);
// }

// console.log(demo());

// 原型
