init()

function init() {
    initTodoList;
}

var initTodoList = (function() {
    var showInput = document.getElementsByClassName('j-show-input')[0],
        inputWrap = document.getElementsByClassName('input-wrap')[0],
        inputShow = false,
        textInput = document.getElementById('input'),
        oList = document.getElementsByClassName('j-list')[0],
        addItem = document.getElementsByClassName('j-add-item')[0];

    addEvent(showInput, 'click', function() {
        if (inputShow) {
            inputWrap.style.display = 'none';
            inputShow = false;
        } else {
            inputWrap.style.display = 'block';
            inputShow = true;
            console.log(1);
        }
    });

    addEvent(addItem, 'click', function() {
        var val = textInput.value,
            oItems = document.getElementsByClassName('item'),
            itemLength = oItems.length,
            item,
            len = val.length;

        if (len === 0) {
            return;
        }

        for (var i = 0; i < itemLength; i++) {
            item = elemChildren(oItems[i])[0];
            var text = item.innerText;

            if (val === text) {
                alert('已存在')
                return;
            }
        }

        var oLi = document.createElement('li');
        oLi.className = 'item';
        oLi.innerHTML = itemTpl(val);
        oList.appendChild(oLi);
        textInput.value = "";

        inputWrap.style.display = 'block';
        inputShow = true;
    });

    addEvent(oList, "click", function(e) {
        var e = e || window.event;
        tar = e.target || e.srcElement;
        className = tar.className;

        if (className === "fa fa-edit edit-btn") {
            inputShow.style.display = 'block';
            inputShow = true;
        } else if (className === "fa fa-times  remove-btn") {
            elemParent(tar, 2).remove();
        }
    })

    function itemTpl(text) {
        // 效率最高的方法
        return (
            `<p class="item-content">${text}</p>
            <div class="btn-group">
              <a href="javascript:;" class="fa fa-edit edit-btn"></a>
              <a href="javascript:;" class="fa fa-times  remove-btn"></a>
            </div>
            `
        )
    }

})();

;
(function() {
    var Test = function(b) {
        //  传入的属性
        this.b = b;
    };
    Text.prototype = {
        a: 1,
        // 原型上的方法
        text1: function() {

        }
    }
    window.Test = Test;
})();

var test = new Text(1);