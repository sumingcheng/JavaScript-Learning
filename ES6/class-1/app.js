// var arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = (() => {
//     console.log(i);
//   })(i)
// }

// function test(a) {
//   {
//     let a = 10;
//   }
//   console.log(a);
// }
// test(); //undefined
// console.log(a);
// let a = 11;

// var a = a;
// console.log(a); //undefined

// let b = b;
// console.log(b); //ReferenceErro

// function test(x = 2, y = x) {
//   console.log(x, y); //ReferenceError: Cannot access 'y' before initialization
// }
// test();
// // 类似于下面这个例子
// let x = 2;
// let y = x;
// console.log(x, y);

// console.log(typeof a); //ReferenceError: Cannot access 'a' before initialization
// let a ;

// for (;1;) {
//   let a = 2;
// }
// console.log(a);

// for (let i = 0; i < 10; i++) {

// }
// console.log(i); // i is not defined

// for (var i = 0; i < 10; i++) {

// }
// console.log(i); // 10

// var arr = [];

// for (var i = 0; i < 10; i++) {
//   arr[i] = function () {
//     console.log(i);
//   }
// }

// for (var i = 0; i < 10; i++) {
//   arr[i](); // 0~9
// }


// for (let i = 0; i < 10; i++) {
//   // let 和 var 在同一作用域下 , 因为var可以提升到全局
//   let i = 'a';
//   console.log(i); // SyntaxError: Identifier 'i' has already been declared
// }

// if (1) {
//   let a = 1; {
//     a = 10;
//     console.log(a); //10
//   }
// }

// if (1) {
//   let abc = function a() {
//     // 不建议在块级作用域中声明函数
//   }
// }

// var arr = [];

// for (let i = 0; i < 10; i++) {
//   arr[i] = function () {
//     console.log(i);
//   }
// }
// for (var k = 0; k < 10; k++) {
//   arr[k]();
// }


// {
//   let a = 1;
//   function a (){

//   }
//   console.log(a);
//   // SyntaxError: Identifier 'a' has already been declared
// }

// {
//   let a = 1;
//   {
//     function a(){

//     }
//   }
//   console.log(a); //1 
// }

// const a = 1;
// a = 10;
// console.log(a);
// // TypeError: Assignment to constant variable.

// {
//   const a = 10;
//   let a = 12;
//   // SyntaxError: Identifier 'a' has already been declared
// }

// const obj = []
// Object.freeze(obj)
// obj[0] = "zhangsan"
// console.log(obj); // []

// const ibje = {}
// Object.freeze(ibje)
// ibje.name = "zhangsan"
// console.log(ibje); // {}

// const obj = []
// Object.myFreeze(obj)
// obj[0] = "zhangsan"

// function myFreeze(obj) {
//   Object.freeze(obj)
//   for (var key in obj) {
//     if (typeof (obj[key] === 'object') && obj[key] !== null) {
//       Object.freeze(obj[key]);
//     }
//   }
// }
// const person = {
//   son: {
//     lisi: 18,
//     zhangshan: 19
//   },
//   car: ['benze', 'BMW', 'mazda']
// }
// myFreeze(person)
// person.son.wangwu = 20;
// person.car[3] ='toyout'

// console.log(person);
// { son: { lisi: 18, zhangshan: 19 }, 
// car: [ 'benze', 'BMW', 'mazda' ] }
// a = 1
// console.log(a);

// console.log(window.a);



