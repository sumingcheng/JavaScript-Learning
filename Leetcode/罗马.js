const lm = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let s = "IX";
var romanToInt = function (s) {
  let num = 0;
  let arr = s.split('');
  arr.forEach((ele, index) => {
    if (lm[ele] < lm[s[index + 1]]) {
      num -= lm[ele];
    } else {
      num += lm[ele];
    }

  });
  return num;
};
console.log(romanToInt(s));