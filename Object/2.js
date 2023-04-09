/*
* 类数组
*
* */

// Object.defineProperty()
// Object.defineProperties()


// const obj = {}
// Object.defineProperty(obj, 'a', {
//   value: 1,
//   // getter 函数 === obj.value的时候触发
//   get() {
//
//   },
//   // setter 函数 === obj.value= v 的时候触发
//   set(v) {
//   }
// },)

const data = {
  a: 1,
  b: 2,
  [Symbol('c')]: 3,
  [Symbol('d')]: 4
}

// 获取单独的属性描述
console.log(Object.getOwnPropertyDescriptor(data, 'a'))
// {value: 1, writable: true, enumerable: true, configurable: true}

// 所有属性的描述
console.log(Object.getOwnPropertyDescriptors(data))
// {a: {…}, b: {…}, Symbol(c): {…}, Symbol(d): {…}}

// 获取不可枚举的属性
console.log(Object.getOwnPropertyNames(data))
// ['a', 'b']

// 获取的属性必须是可枚举的
console.log(Object.keys(data))
// ['a', 'b']

// 获取 Symbol
console.log(Object.getOwnPropertySymbols(data))
// [Symbol(c), Symbol(d)]

// 判断属性是否可枚举
console.log(data.propertyIsEnumerable('a'))
// true

// 对象转换成二维数组
console.log(Object.entries(data))
// [Array(2), Array(2)]

// 二维数组 和对象有对应关系
// 二维数组转换成对象
console.log(Object.fromEntries(Object.entries(data)))
// {a: 1, b: 2}
