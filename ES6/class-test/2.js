function User1() {
}

User1.prototype.sayHi = function () {
  console.log('Hi')
}

class User2 {
  sayHi() {
    console.log('Hi')
  }
}

console.dir(User1)
// 使用函数定义的sayHi方法是可枚举的
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptor(User1.prototype, 'sayHi'), null, 2)
)

console.dir(User2)
// 使用class定义的sayHi方法是不可枚举的
console.log(
    JSON.stringify(Object.getOwnPropertyDescriptor(User2.prototype, 'sayHi'), null, 2)
)
