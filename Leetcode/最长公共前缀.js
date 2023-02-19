// let strs = ["flower", "flow", "flight"];
let strs = ["flower", "flower", "flower", "flower"];
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0] === '' ? '' : strs[0];
  }

  let arr = [];

  for (let i = 0; i < strs.length; i++) {
    arr = [];
    for (let j = 0; j < strs.length; j++) {
      arr.push(strs[j].substr(0, i));
    };

    if (!arr.every((item) => item === arr[0])) {
      arr = [];
      break;
    }
  }

  return arr.length === 0 ? '' : arr[0];
};

console.log(longestCommonPrefix(strs));