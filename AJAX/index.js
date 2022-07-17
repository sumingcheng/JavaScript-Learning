// var xhr

// if (window.XMLHttpRequest) {
//   xhr = new XMLHttpRequest();
// } else {
//   xhr = new ActiveXObject("Micorsoft.XMLHTTP");
// }
// console.log('xhr', xhr)

// // 创建
// xhr.open('GET', 'http://www.baidu.com', true)
// // 发送
// xhr.send();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.states === 200) {
//     console.log(1);
//     xhr.requestText
//   }
// }

// 封装AJAX

var $ = (function () {
  var o = window.XMLHttpRequest ?
    new XMLHttpRequest :
    new ActiveXObject('Microsoft.XMLHTTP');

  if (!o) {
    throw new Error('您的浏览器不支持异步请求');
  }

  function _doAjax(opt) {
    var opt = opt || {},
      type = (opt.type || 'GET').toUpperCase(),
      async = opt.async || true,
      url = opt.url,
      data = opt.data || null,
      error = opt.error || function () { },
      success = opt.success || function () { },
      complete = opt.complete || function () { };

    if (!url) {
      throw new Error('您没有填写URL');
    }

    o.open(type, url, async);
    type === 'POST' && o.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    o.send(type === 'GET' ? null : formatDatas(data));

    o.onreadystatechange = function () {
      if (o.readyState === 4 && o.states === 200) {
        success(JSON.parse(o.requestText));
      }
      if (o.readyState === 4 && o.states === 304) {
        success(JSON.parse(o.requestText));
      }
      if (o.states === 404) {
        error();
      }
      complete();
    }

    function formatDatas(obj) {
      var str = '';
      for (var key in obj) {
        str += key + '=' + obj[key] + '&';
      }
      return str.replace(/&$/, '');
    }

  }

  return {
    ajax: function (opt) {
      _doAjax(opt);
    },
    post: function () {

    },
    get: function () {

    }
  }
})();

$.ajax({
  type: 'get',
  url: "https://jsonplaceholder.typicode.com/posts/1",
  data: {
    // body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    // id: 1,
    // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    // userId: 1,
  },
  success: function (data) {
    console.log(data);
  }
})