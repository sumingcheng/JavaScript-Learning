// 建立连接
var socket = io.connect('http://localhost:7000');

var message = document.getElementById('message'),
  username = document.getElementById('username'),
  sendBtn = document.getElementById('sendBtn'),
  outputArea = document.getElementById('outputArea'),
  feedbackArea = document.getElementById('feedbackArea');

sendBtn.addEventListener('click', function () {
  // 发出消息
  socket.emit('chat', {
    message: message.value,
    username: username.value
  });
}, false)

message.addEventListener('compositionstart', function () {
  socket.emit('typing', username.value);
})

// 监听服务端 chat
socket.on('chat', function (data) {
  outputArea.innerHTML += "<p><strong>" + data.username + " : </strong>" + data.message + "</p>"
  feedbackArea.innerHTML = "";
  message.value = "";
})

// 监听服务端 typing
socket.on('typing', function (data) {
  feedbackArea.innerHTML = `<p><em>${data}</em>  正在输入...</p>`
})