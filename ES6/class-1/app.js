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


{
  let a = function test(){
    console.log("123");
  }
  a()
}