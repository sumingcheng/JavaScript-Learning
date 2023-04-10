class User {
  // 每次实例化对象的时候都会调用constructor方法
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  
  // 静态方法,也就是原型上的方法
  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

console.dir(User)

// 类的数据类型就是函数
console.log(typeof User) // function

let user = new User('Jack', 20)
console.log(user)
console.log(Object.getOwnPropertyNames(user)) // [ 'name', 'age' ]
console.log(Object.getPrototypeOf(user)) // {constructor: ƒ, sayHi: ƒ}
