// 字面量
let str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
//
// let reg = 'n';
//
// console.log(eval(`/${reg}/.test(str)`));
// 对象
// 查找u，全局模式
// let a = 'Lorem'
// let reg = new RegExp(a, 'g')
//
// console.log(reg.test(str))

// console.log('Lorem'.replace(/\w/g, search => {
//   return '?'
// }));

// 与或非

console.log(/aa|b/g.test(str));
console.log(/aa&b/g.test(str));

