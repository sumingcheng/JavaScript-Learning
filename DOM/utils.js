// 兼容性封装
// 封装childNodes，获取元素的子元素节点方法
function elemChildren(node) {
    var temp = {
        length: 0,
        push: Array.prototype.push,
        splice: Array.prototype.splice
    }
    var len = node.childNodes.length;
    for (var i = 0; i < len; i++) {
        var childItem = node.childNodes[i];
        if (childItem.nodeType === 1) {
            temp.push(childItem);
        }
    }
    return temp;
}
//获取元素的父元素节点方法-封装
function elemParent(node, n) {
    var type = typeof(n);

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
// 封装滚动条方法
function getScrollOffset() {
    // IE9以上
    if (window.pageXOffset) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else {
        // IE9及以下
        return {
            left: document.body.scrollLeft + document.documentElement.scrollLeft,
            top: document.body.scrollTop + document.documentElement.scrollTop,
        }
    }
}

// 封装浏览器可视区域的尺寸(窗口的宽高)
function getViewPortSize() {
    // 常用的模式
    if (window.innerHeight) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        // 怪异模式
        if (document.compatMode === 'BackComapt') {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight,
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    }
}

// 封装整个页面的尺寸
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

// 封装元素距离浏览器的距离
function getEleDocPostion(el) {
    var parent = el.offsetParent,
        offsetLeft = el.offsetLeft,
        offsetTop = el.offsetTop;

    while (parent) {
        offsetLeft += parent.offsetLeft;
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent
    }
    return {
        left: offsetLeft,
        top: offsetTop
    }
}

// 封装获取元素
function getStyles(elem, prop) {
    if (window.getComputedStyle) {
        if (prop) {
            window.getComputedStyle(elem, null)[prop];
        } else {
            return window.getComputedStyle(elem, null);
        }
    } else {
        if (prop) {
            elem.currentStyle[prop];
        } else {
            return elem.currentStyle;
        }
    }
}

// 封装事件处理
function addEvent(el, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + type, fn);
    } else {
        el['on' + type] = fn;
    }
}
// 使用方法
// addEvent(elem, 'click', function() {
//     console.log(1);
// })

// 删除事件
function removeEvent(elem, type, fn) {
    if (elem.addEventListener) {
        elem.removeEventListener(type, fn, false);
    } else if (elem.attachEvent) {
        elem.detachEvent('on' + type, fn);
    } else {
        elem['on' + 'type'] = null;
    }
}

// 封装清除冒泡
function cancelBubble(e) {
    var e = e || window.event;
    if (e.stopPropagation()) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

// 封装阻止默认事件
function preventDefaultEvent(e) {
    var e = e || window.event;
    if (e.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}


// 封装pageX/Y
function pagePos(e) {
    var sLeft = getScrollOffset().left,
        sTop = getScrollOffset().top,
        cLeft = document.documentElement.clientLeft || 0,
        cTop = document.documentElement.clientTop || 0;
    return {
        X: e.clientX + sLeft - cLeft,
        Y: e.clientY + sTop - cTop
    }
}

// 元素拖拽函数封装（无边界）
function elemDrag(elem) {
    var x, y;
    addEvent(elem, 'mousedown', function(e) {
        var e = e || window.event;
        x = pagePos(e).X - parseInt(getStyles(elem, 'left'));
        y = pagePos(e).Y - parseInt(getStyles(elem, 'top'));
        addEvent(document, 'mousemove', mouseMove);
        addEvent(document, 'mouseup', mouseUp);
        cancelBubble(e);
        preventDefaultEvent(e);

        function mouseMove(e) {
            var e = e || window.event;
            var page = pagePos(e);
            elem.style.left = page.X - x + 'px';
            elem.style.top = page.Y - y + 'px';
        }

        function mouseUp(e) {
            var e = e || window.event;
            removeEvent(document, 'mousemove', mouseMove);
            removeEvent(document, 'mouseup', mouseUp);
        }
    })
}

// 向量计算

function vec(a, b) {
    return {
        x: b.x - a.x,
        y: b.y - a.y
    }
}

function vecProduct(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
}

function sameSymbols(a, b) {
    return (a ^ b) >= 0;
}

function pointInTriangle(p, a, b, c) {
    var PA = vec(p, a),
        PB = vec(p, b),
        PC = vec(p, c),
        R1 = vecProduct(PA, PB),
        R2 = vecProduct(PB, PC),
        R3 = vecProduct(PC, PA);

    return sameSymbols(R1, R2) && sameSymbols(R2, R3);
}