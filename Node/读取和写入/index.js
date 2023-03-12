const fs = require('fs');

const readStream1 = fs.createReadStream('./1.txt');
const readStream2 = fs.createReadStream('./2.txt');
const writeStream = fs.createWriteStream('./output.txt');

let isFile1Done = false;
let isFile2Done = false;

// 监听第一个文件的读取事件
readStream1.on('data', (data) => {
  writeStream.write(data); // 将数据写入output.txt文件
});

// 监听第二个文件的读取事件
readStream2.on('data', (data) => {
  writeStream.write(data); // 将数据写入output.txt文件
});


// 监听第一个文件读取完成事件
readStream1.on('end', () => {
  isFile1Done = true;
  if (isFile2Done) {
    writeStream.end(); // 两个文件都读取完毕，结束写入操作
  }
});


// 监听第二个文件读取完成事件
readStream2.on('end', () => {
  isFile2Done = true;
  if (isFile1Done) {
    writeStream.end(); // 两个文件都读取完毕，结束写入操作
  }
});