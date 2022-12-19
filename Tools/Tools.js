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
// 类数组转数组对象，用于获取select option
function ArrObj(ArrayLike) {
  if (typeof ArrayLike === "object" && ArrayLike.length) {
    var length = ArrayLike.length,
      arrAL = ArrayLike,
      arr = [];

    for (let i = 0; i <= length - 1; i++) {
      let value = arrAL[i].getAttribute("value");
      let label = arrAL[i].innerText;
      arr.push({ value, label });
    }

    return arr;
  } else {
    throw new TypeError('arguments not ArrayLike');
  }
}

/**选择开始时间触发事件*/
function selStartDateChange(v) {
  this.queryParams.startTime = this.formatDateTime(v);
  if (this.queryParams.endTime !== "") {
    if (this.formatDateTime(v) > this.queryParams.endTime) {
      this.$message({
        type: "warning",
        message: "开始日期不能大于结束日期",
      });
      this.queryParams.startTime = "";
    }
  }
}
/**选择结束时间触发事件*/
function selEndDateChange(k) {
  this.queryParams.endTime = this.formatDateTime(k);
  if (this.queryParams.startTime !== "") {
    if (this.queryParams.startTime > this.formatDateTime(k)) {
      this.$message({
        type: "warning",
        message: "结束日期不能小于开始日期",
      });
      this.queryParams.endTime = "";
    }
  }
}
/**转换时间格式*/
function formatDateTime(time) {
  const date = new Date(time); //转换yyyy-mm-dd HH:mm:ss格式
  var year = date.getFullYear();
  var month =
    date.getMonth() + 1 < 10 ?
      "0" + (date.getMonth() + 1) :
      date.getMonth();
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return year + "-" + month + "-" + day;
}

// Ver: 1.0
// Last Update: 2022/08/25
// 功能性修改请及时更新版本号并修改注释
// setTimout 在计时结束后将任务加入队列，等待空闲资源执行
// 计算上一次计时结束后的误差时间作为下一次的参数
// 每次执行触发回调方法，剩余次数作为参数

export function countdown(times, timeout, fun) {
  if (times === 0) {
    return
  }
  const startTime = new Date().getTime()
  setTimeout(() => {
    const endTime = new Date().getTime()
    const deviation = endTime - startTime - timeout
    times--
    fun(times)
    countdown(times, timeout - deviation, fun)
  }, timeout)
}