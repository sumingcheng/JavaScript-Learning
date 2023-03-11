// // 1.创建一个Buffer
// // 你可以通过以下方法中的任何一种来创建一个Buffer
// // 通过大小初始化Buffer
// const buffer1 = Buffer.alloc(10, 1)
// console.log(buffer1)
// // 通过文本初始化Buffer
// const buffer2 = Buffer.from('Hello, world!')
// console.log(buffer2)
// // 通过数组初始化Buffer
// const buffer3 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f])
// console.log(buffer3)
//
//
// // 2.读/写Buffer中的数据
//
// const buffer = Buffer.from('Hello, world!')
//
// // 读取缓冲区中的数据
// console.log(buffer.toString()) // 输出: Hello, world!
//
// // 写入数据
// buffer.write('Goodbye, world!')
//
// // 输出: Goodbye, world!
// console.log(buffer.toString())
//
//
// // 3.使用Buffer的其他方法
// // 除了读取和写入数据之外，Buffer还具有许多其他有用的方法，例如：
//
// const buffer = Buffer.from('Hello, world!')
//
// // 获取缓存区长度
// console.log(buffer.length) // 输出: 13
//
// // 比较缓冲区
// const buffer2 = Buffer.from('Hello, world!')
// console.log(buffer.equals(buffer2)) // 输出: true
//
// // 复制缓冲区
// const buffer3 = Buffer.alloc(11)
// buffer.copy(buffer3) // 复制buffer到buffer3
// console.log(buffer3.toString()) // 输出: Hello, world!

const buf = Buffer.from('http://nodejs.cn')
let str = ''

for (let i = 0; i < buf.length; i ++) {
  str += String.fromCodePoint(buf[i])
}
console.log(str)
