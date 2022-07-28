xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    clearTimeout(t);
    t = null;
  }
}

t = setTimeout(function () {
  // 终止xhr
  xhr.abort();
  clearTimeout(t);
  t = null;
  xhr = null;
}, 3000)