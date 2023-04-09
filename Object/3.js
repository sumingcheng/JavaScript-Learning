// // Object.freeze() 冻结对象
// let Obj = Object.freeze({
//   a: 1
// })
// // Object.isFrozen() 判断对象是否被冻结
// // 不可修改，不可增加，不可删除
// console.log(Object.isFrozen(Obj)) // true
//
// // Object.seal() 密封对象
// // 可修改，不可增加，不可删除
// Object.seal(Obj)
// // Object.isSealed() 判断对象是否被密封
// console.log(Object.isSealed(Obj)) // true
//
// // Object.preventExtensions() 阻止对象扩展
// // 可修改，可删除，不可增加
// Object.preventExtensions(Obj)
// // Object.isExtensible() 判断对象是否被阻止扩展
// console.log(Object.isExtensible(Obj)) // false

const o1 = {
  a: 1,
}

const o2 = Object.create({
  b: 2, c: 3
})

// 原型上的属性，不复制
console.log(Object.assign(o1, o2))

const o3 = {
  a: 1,
}

const o4 = {
  a: 3
}
// 后面的属性会覆盖前面的属性
console.log(Object.assign(o3, o4))


const obj = Object.assign({}, 123, 'abc', undefined, null, Symbol('123'), true)
console.log(obj) // {0: 'a', 1: 'b', 2: 'c'}
