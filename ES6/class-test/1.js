class User {
  // age 属于共有属性，只要new这个对象就会有这个属性
  age = 18
  
  constructor(name, age) {
    this.name = name
  }
  
  changeAge(age) {
    this.age = age
  }
  
  showAge() {
    console.log(`${this.name}: ${this.age}`)
  }
}

const user = new User('素明诚')
console.log(user)
user.changeAge(20)
user.showAge()


const user1 = new User('sumingcheng')
console.log(user1)

// 对象之间的属性是不共享的
