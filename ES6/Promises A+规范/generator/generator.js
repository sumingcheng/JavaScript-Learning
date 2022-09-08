function generator(arr) {
  let nextIdx = 0;
  return {
    next: function () {
      return nextIdx < arr.length - 1
          ? {value: arr[nextIdx++], done: false}
          : {value: arr[nextIdx++] || undefined, done: true}
    }
  }
}

// // 迭代器递归函数 参数：传给next的数据
// function walk(data) {
// //  执行next->value done 对象
//   const {value, done} = iterator.next(data);
//
// //  如果done===false
//   if (!done) {
//     //  value -> then -> 拿到新的迭代时，程序执行的结果
//     Promise.resolve(value).then((res) => {
//       // 肯定要继续执行迭代器递归函数
//       walk(res);
//       //  promise 出错了 -> 本次返回Promise的reject
//     }, reject);
//   } else {
//     // done === true 迭代结束 成功抛出 value
//     resolve(value)
//   }
// }
//
// walk();
