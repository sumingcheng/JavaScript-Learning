// 计算
// 加载其他的worker
importScripts('...')
this.onmessage = function (e) {
  if (e.data.addThis !== undefined) {
    var sumMessage = {
      result: e.data.addThis.num1 + e.data.addThis.num2
    }
    // 返回结果
    this.postMessage(sumMessage);
  }
  document
}