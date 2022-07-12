function Father() {
  this.firstName = '张三';
}

Father.prototype = {
  lastName: '法外狂徒'
}

var father = new Father();

function Son() {
  this.firstName = '李四'
}
// 使用Buffer 来解决父级原型被改变的问题
function Buffer() { }

Buffer.prototype = Father.prototype;

Son.prototype = new Buffer();

//这里继承
Son.prototype = Father.prototype;

Son.prototype.lastName = '守法青年';

var son = new Son();



