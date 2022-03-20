let fs = require('fs');
let readFile = promisify(fs.readFile)

async function* readSync() {
  let value1 = await readFile('./name.txt', 'utf-8');
  let value2 = await readFile(value1, 'utf-8');
  let value3 = await readFile(value2, 'utf-8');
  return value3
}

let promise1 = readSync();

promise1.then(function (res) {
  console.log(res);
})