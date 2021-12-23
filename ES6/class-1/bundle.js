"use strict";

var arr = [];

var _loop = function _loop(i) {
  arr[i] = function () {
    console.log(i);
  }(i);
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
