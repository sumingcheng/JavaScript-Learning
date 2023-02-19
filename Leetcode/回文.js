let x = 114411
let isPalindrome = function (num) {
  let arr = num.toString().split('').reverse().join('')
  return arr === num.toString()
}
console.log(isPalindrome(x));
