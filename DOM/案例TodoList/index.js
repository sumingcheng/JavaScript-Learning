window.onload = function() {
    init();
}

function init() {
    initTodoList;
}

var initTodoList = (function() {
    var showInput = document.getElementsByClassName('j-show-input')[0],
        inputWrap = document.getElementsByClassName('input-wrap')[0],
        inputShow = false;

    addEvent(showInput, 'click', function() {
        if (inputShow) {
            inputWrap.style.dispaly = 'none';
            inputShow = falsel;
        } else {
            inputWrap.style.dispaly = "block";
            inputShow = true;
        }
    });

})();