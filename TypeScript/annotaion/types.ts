// // 只能是number类型的值


// let score = 50;

// let balls: string[] = ['basketball', 'football', 'volleyball'];

// // class Car {}

// // let car: Car = new Car();

// let person: {
// name: string;
// age: number;
// } = {
// name: "张三",
// age: 20
// }

// // 参数、返回值
// const logNumber: (num: number) => void = (num: number) => {

// }

// let num: boolean | number = false;


// const addNums = (a: number, b: number): number => {
// return a + b;
// }

// function multiply(a: number, b: number): number {
// return a + b;
// }

// // 无返回值的类型注解
// const logger = (mas: string): void {
// console.log(mas);
// }

// const todayWeather = {
// date: new Date(),
// weather: '晴天'
// }

// const logWeather = (todayWeather: {
// date: Date,
// weather: string
// }): void => {
// console.log(todayWeather.date);
// console.log(todayWeather.weather);
// }

// logWeather(todayWeather);


// const todayWeather = {
// date: new Date(),
// weather: '晴天'
// }

// const ES6 = ({
// date,
// weather
// }: {
// date: Date,
// weather: string
// }) => {
// console.log(date);
// console.log(weather);
// }

// ES6(todayWeather);

// const profile = {
// nameL: "Mike",
// age: 20,
// coords: {
// lat: 30,
// lng: 50
// },
// setAge(age: number): void {
// this.age = age;
// }
// }

// const {
// age
// }: {
// age: number
// } = profile;

// const {
// coords: {
// lat,
// lng
// }
// }: {
// coords: {
// lat: number;lng: number
// }
// } = profile;


// const arr2: number = arr.push();
// console.log();


// const arr: string[] = ['Kobe', 'James', 'pierce'];


// const arr2 = [new Date(), '2022-2-2'];

// const drink = {
// color: "brown",
// carbonated: true,
// sugar: 35
// }

// const pepsi: [string, boolean, number] = ['brown', true, 35];

// const drink = {
// color: "brown",
// carbonated: true,
// sugar: 35
// }
// type drink = [string, boolean, number];

// const pepsi: drink = ['brown', true, 30];

// 函数接口
// interface Reportable {
// summary(): string;
// }

// const uncleMike = {
// name: 'Mike',
// age: 20,
// married: false,
// summary(): string {
// return `名字:${this.name}`
// }
// }

// const drink = {
// color: '棕色',
// carbonated: true,
// sugar: 35,
// summary(): string {
// return `这个饮料的颜色是:${this.color}`
// }
// }

// const printSummary = (itme: Reportable): void => {
// console.log(itme.summary());
// }

// // 对象不符合接口就不能使用这个函数
// printSummary(uncleMike);
// printSummary(drink);

// class Person {
// scream():void{
// console.log('hahha');
// }
// sing():void{
// console.log('lalala')
// }
// }

// const person = new Person();
// person.scream();
// person.sing();

// inheritance
// Men 继承 Person里的方法

// class Person {
//   name: string = 'Mike';
//   protected scream(): void {
//     console.log('hahha');
//   }
//   // public sing(): void {
//   //   console.log('lalala')
//   // }
// }

// class Men extends Person {
//   sing(): void {
//     console.log('Man-lalal')
//   }
// }

// const men = new Men();
// men.scream(); //hahha
// men.sing(); //Man-lalal

class Person {
  name: string;
  // 规定初始化值传入的类型
  constructor(name: string) {
    this.name = name;
  }
}

// 实例化后，传入初始化实参
const person = new Person('Tom');
console.log(person.name);