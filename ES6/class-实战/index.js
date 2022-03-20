class Person {
  constructor(name = "zhangsan", age = "10") {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log('say');
  }
  drink() {
    console.log('drin');
  }
  static eat() {
    console.log('eat');
  }
}
