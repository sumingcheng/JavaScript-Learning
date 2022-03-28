// 事件处理函数-封装
function addEvent(el, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + type, fn);
    } else {
        el['on' + type] = fn;
    }
}

//获取元素的子元素节点方法-封装
function elemChildren(node) {
    var temp = {
            'length': 0,
            'push': Array.prototype.push,
            'splice': Array.prototype.splice
        },
        children = node.childNodes,
        len = children.length,
        childItem;

    for (var i = 0; i < len; i++) {
        childItem = children[i];
        if (childItem.nodeType === 1) {
            temp.push(childItem);
        }
    }

    return temp;
}

//获取元素的父元素节点方法-封装
function elemParent(node, n) {
    var type = typeof (n);

    if (type === 'undefined') {
        return node.parentNode;
    } else if (n <= 0 || type !== 'number') {
        return;
    }

    while (n) {
        node = node.parentNode;
        n--;
    }

    return node;
}


//查看滚动条的距离-兼容模式封装
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else {
        return {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

//浏览器可视区域的尺寸(窗口的宽高)-兼容模式封装
function getViewPortSize() {
    if (window.innerHeight) {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    } else {
        if (document.compatMode === 'BlackCompat') {
            return {
                height: document.body.clientHeight,
                width: document.body.clientWidth
            }
        } else {
            return {
                height: document.documentElement.clientHeight,
                width: document.documentElement.clientWidth
            }
        }
    }
}
//文档（html页面）尺寸（宽度、高度）- 兼容模式封装
function getScrollSize() {
    if (document.body.scrollHeight) {
        return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }
    } else {
        return {
            width: document.documentElement.scrollWidth,
            height: document.documentElement.scrollHeight
        }
    }
}