// node事件驱动原理

// function test(a, b, cb) {
//   let res = a + b;
//   cb && cb(res);
// }
//
// test(1, 2, (res) => {
//   console.log(res);
// });

// console.log(foo);
// var foo = "A";
// console.log(foo);
// var foo = function () {
//   console.log("B");
// };
// console.log(foo);
// foo();
//
// function foo() {
//   console.log("C");
// }
//
// console.log(foo);
// foo();


// function fn(a, c) {
//   console.log(a);
//   var a = 123;
//   console.log(a);
//   console.log(c);
//
//   function a() {
//   }
//
//   if (false) {
//     var d = 678;
//   }
//   console.log(d);
//   console.log(b);
//   var b = function () {
//   };
//   console.log(b);
//
//   function c() {
//   }
//
//   console.log(c);
// }
//
// fn(1, 2);

// function b() {
//   console.log(2);
// }
//
//
// function F() {
// }
//
//
// F.prototype.b = b;
//
// let aa = new F();
// console.log(aa);

// function myTypeof(params) {
//   const type = Object.prototype.toString.call(params).slice(8, - 1).toLowerCase();
//   const map = {
//     'number': true,
//     'string': true,
//     'boolean': true,
//     'undefined': true,
//     'bigint': true,
//     'symbol': true,
//     'function': true
//   };
//   return map[type] ? type : 'object';
// }
//
// console.log(myTypeof(null));
// // 测试用例
// // myTypeof(1)
// // myTypeof('')
// // myTypeof(false)
// // myTypeof(null)
// // myTypeof(undefined)
// // myTypeof(10n) // bigint
// // myTypeof(Symbol())
// // myTypeof(() => {})





