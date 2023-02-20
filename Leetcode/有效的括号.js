let s = "{{(())}}";
var isValid = function (s) {
  // 字符串为空
  if (!s.length) return false;
  // 字符串出现单独的情况
  if (s.length % 2 !== 0) return false;

  const pairs = new Map();
  pairs.set('{', '}');
  pairs.set('[', ']');
  pairs.set('(', ')');

  let stack = [];

  for (let c of s) {
    // 判断key是否存在
    if (pairs.has(c)) {
      // 存在就push到栈内
      stack.push(c);
      // 若当前项的key对应val，则符合括号的要求，并且继续进行出栈操作。如果不符合，直接false
    } else if (pairs.get(stack.pop()) !== c) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(s));


/**
 * @总结
 * 1.核心其实就是利用了栈空间，进入的 先进入的{{((，出栈的顺序一定是))}}
 * 2.使用map存放key和value，方便之后对比值
 */