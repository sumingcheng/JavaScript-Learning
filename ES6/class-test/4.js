/**
 * todo 静态属性
 *  1.静态属性只能通过类名访问，不能通过实例访问
 */

class Person {
  static name = 'Person'
  static age = 18
  
  sayHello() {
    console.log(Person.name, Person.age)
  }
}

const p = new Person()
p.sayHello()
