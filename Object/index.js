// Object
// 初始化对象
// const obj = Object.create(null)
// console.log(obj)

// // 对象包装类 null 和 undefined 没有对应的构造器，所以没办法包装
// const obj = new Object(undefined)
// const obj2 = new Object(null)
//
// // 基本类型 -> 数字 -> object -> Number -> construct -> Number object
// const obj3 = new Object(123) // Number {123}
// console.log(obj3)
//
// // new String('abc')
// const obj4 = new Object('abc') // String {123}
// console.log(obj4)
//
// const obj5 = new Object(Symbol('abc')) // Symbol {Symbol(abc), description: 'abc'}
// console.log(obj5)

// ——————————————

// const obj1 = { a: 1 }
// const obj2 = Object(obj1)
//
// const arr1 = [1, 2, 3]
// const arr2 = Object(arr1)
// console.log(arr2 === arr1) // true
//
// console.log(Object.prototype.constructor === Object) // true
// const obj = Object.create(null)
// console.log(obj.constructor) //undefined


// function Test() {
// }
//
// const test = new Test()
//
// console.log(test.constructor)
// console.log(test.constructor === Test) // true

// let str = 'abc'
// str.constructor = Number()
// console.log(str.constructor) // ƒ String() { [native code] }

// function deepClone(value) {
//   if (typeof value !== 'object' || value === null) return value
//
//   const wrapper = new value.constructor
//
//   for (let key in value) {
//     if (Object.hasOwn(value, key)) {
//       wrapper[key] = deepClone(value[key])
//     }
//   }
//
//   return wrapper
// }

// function Test() {
//   this.a = 1
// }
//
// Test.prototype.b = 2
//
// const test = new Test()
// // 访问 b
// test.b
// // 就等于访问
// test.[[Prototype]].b
// // 原型链继承说白了，就是系统帮你省略掉了所有通过 [[Prototype]] 访问的步骤

// // 赋值原始值，不属于扩展原型链
// Object.prototype.__proto__ = '1' // 不会报错
// // 赋值对象，属于扩展原型链，所以会报错
// Object.prototype.__proto__ = {} // Uncaught TypeError: Cannot set prototype of #<Object> to a non-object or null


// __proto__ 断链现象

// const obj1 = Object.create(null)
// obj1.a = 1
// const obj2 = Object.create(obj1)
// obj2.b = 2
// // 原型链节点断掉，不好使
// console.log(obj2.__proto__) // undefined
// // 可以
// console.log(Object.getPrototypeOf(obj2)) // 可以
