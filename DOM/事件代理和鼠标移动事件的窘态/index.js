;
(function(doc) {
    var oList = doc.getElementsByClassName('list')[0],
        oItems = oList.getElementsByClassName('list-item'),
        curIdx = 0;
        
    var init = function() {
        bindEvent();
    }

    function bindEvent() {
        // 短触发
        addEvent(oList, 'mouseover', function() {
            // 先进入，再绑定，节省资源
            addEvent(document, 'mousemove', slide);
        });

        addEvent(oList, 'mouseout', function() {
            removeEvent(document, 'mousemove', slide);
        })
    }

    function slide(ev) {
        var e = ev || window.event,
            tar = e.target || e.srcElement,
            oParent = getParent(tar, 'li'),
            thisIdx = Array.prototype.indexOf.call(oItems, oParent);

        if (curIdx !== thisIdx) {
            oItems[curIdx].className = 'list-item';
            curIdx = thisIdx;
            oItems[curIdx].className += ' active';
        }
    }

    function getParent(target, element) {
        while (target.tagName.toLowerCase() !== element) {
            target = target.parentNode;
        }
        return target;
    }
    init();
})(document);