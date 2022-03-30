var express = require('express');

// 创建一个App
var app = express();
// 创建一个服务
var server = app.listen(7000, function () {
  console.log('运行成功');
});

// 静态文件
app.use(express.static('public'));