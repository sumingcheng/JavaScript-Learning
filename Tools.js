function deepClone(origin, target) {
    var tar = target || {};
    // 判断是对象还是数组
    var toStr = Object.prototype.toString;
    var arrType = '[object Array]';
    // 遍历这个对象，判断每个K
    for (var k in origin) {
        // 如果是自己的属性，才继续进行，原型上的排除掉
        if (origin.hasOwnProperty(k)) {
            // 判断是否是对象
            if (typeof origin[k] === 'object' && origin[k] !== null) {
                // 判断迭代到的值的类型，对象就赋值对象，数组就赋值数组
                tar[k] = toStr.call(origin[k]) === arrType ? [] : {};
                // 继续递归，直到不是引用值
                deepClone(origin[k], tar[k]);
            } else {
                // 不是对象就直接赋值
                tar[k] = origin[k];
            }
        }
    }
    return tar;
}