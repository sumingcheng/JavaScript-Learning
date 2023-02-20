let strs = ['flower', 'flower', 'flower', 'flower'];
let longestCommonPrefix = function (strs) {
  let re = '';
  // 空数组直接返回 ''
  if (!strs.length) return re;
  // 取 数组的第一个字符串判断长度
  for (let j = 0; j < strs[0].length; j++) {//第j位
    // 所有元素跟该元素进行对比
    for (let i = 1; i < strs.length; i++) {//第i个
      // 第二项的第一位，是否等于第一项的第一位，以此类推
      if (strs[i][j] !== strs[0][j]) return re;
    }
    re += strs[0][j];
  }
  return re;
};
console.log(longestCommonPrefix(strs));
/**
 *  @总结
 *  1.只需判断数组第一位的字母，是否其他位也出现过即可。因为是找出相同。
 *  2.字符串也有下标，可以通过[num]访问指定的字符串位
 *  3.定义字符串的初始值为''，一是为了方便空数组的时候返回，二是如果相同则拼接字符串
 */