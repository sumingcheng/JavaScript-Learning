var express = require('express');
var socket = require('socket.io');

// 创建一个App
var app = express();
// 创建一个服务
var server = app.listen(7000, function () {
  console.log('服务运行成功');
});
// 创建 socket 传入服务
var io = socket(server);

// 静态文件
app.use(express.static('public'));


// 监听连接是否建立，建立会触发回调函数
io.on('connection', function (socket) {
  // socket.id 是唯一的ID，代表不同的socket连接
  // 我们通过不同的ID区分不同的人
  console.log('客户端连接已建立', socket.id);
  // 监听 chat 事件
  socket.on('chat', function (data) {
    // 传递给建立连接的所有客户端
    io.sockets.emit('chat', data);
  })

  // 监听 typing 事件 , 正在输入
  socket.on('typing', function (data) {
    // 广播给所有人
    socket.broadcast.emit('typing', data);
  })
});