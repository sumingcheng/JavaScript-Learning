window.onload = function() {
    init();
}

function init() {
    initMenu();
}

var initMenu = (function() {
    var oMenu = document.getElementsByClassName('menu-wrap')[0],
        oMenuItems = oMenu.getElementsByClassName('main-item'),
        oSub = oMenu.getElementsByClassName("sub")[0],
        menuLen = oMenuItems.length,
        oSubItems = oSub.getElementsByClassName('sub-item'),
        subLen = oSubItems.length,
        subItem,
        t = null,
        isInSub = false,
        isFirst = true,
        mousePoses = [],
        menuItem;

    for (var i = 0; i < menuLen; i++) {
        menuItem = oMenuItems[i];
        addEvent(menuItem, 'mouseenter', menuItemMouseEnter);
    }
    addEvent(oMenu, 'mouseenter', function() {
        addEvent(document, 'mousemove', moveMove)
    })

    addEvent(oMenu, 'mouseleave', menuMouseOut)

    addEvent(oSub, 'mouseenter', function() {
        isInSub = true;
    });

    addEvent(oSub, 'mouseleave', function() {
        isInSub = false;
    });

    function menuMouseOut() {
        oSub.className += ' hide';
        removeAllActive();
        removeEvent(document, 'mousemove', moveMove)
    }

    function moveMove(e) {
        var e = e || window.event,
            count = 0;
        mousePoses.push({
            x: pagePos(e).X,
            y: pagePos(e).Y
        });

        if (mousePoses.length > 3) {
            mousePoses.shift();
        }
        count++;
    }

    function menuItemMouseEnter(e) {
        var e = e || window.event,
            tar = e.target || e.srcElement,
            lastPos = mousePoses[mousePoses.length - 2] || { x: 0, y: 0 },
            curPos = mousePoses[mousePoses.length - 1] || { x: 0, y: 0 },
            toDelay = doTimeout(lastPos, curPos),
            // 下标
            thisIdex = Array.prototype.indexOf.call(oMenuItems, tar);

        oSub.className = "sub";

        if (t) {
            clearTimeout(t);
        }

        if (!isFirst) {
            if (toDelay) {
                console.log(toDelay);
                t = setTimeout(function() {
                    // 鼠标进入子菜单
                    if (isInSub) {
                        return;
                    }
                    addActive(thisIdex);
                    t = null;
                }, 200)
            } else {
                addActive(thisIdex);
            }
        } else {
            addActive(thisIdex);
            isFirst = false
        }

    }

    function addActive(index) {
        removeAllActive();
        oMenuItems[index].className += ' active';
        oSubItems[index].className += ' active';
    }

    function removeAllActive() {
        for (var i = 0; i < menuLen; i++) {
            menuItem = oMenuItems[i];
            menuItem.className = 'main-item';
        }
        for (var i = 0; i < subLen; i++) {
            subItem = oSubItems[i];
            subItem.className = 'sub-item';
        }
    }

    function doTimeout(lastPos, curPos) {
        console.log(getStyles(oMenu, 'width'));
        var topleft = {
            x: getStyles(oMenu, 'width') + getStyles(oMenu, 'margin-left'),
            y: getStyles(oMenu, 'margin-top')
        }
        var bottomLeft = {
            x: getStyles(oMenu, 'width') + getStyles(oMenu, 'margin-left'),
            y: getStyles(oMenu, 'margin-top') + getStyles(oSub, 'height')
        }

        return pointInTriangle(curPos, lastPos, topleft, bottomLeft);
    }

})