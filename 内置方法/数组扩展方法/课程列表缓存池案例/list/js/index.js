;(function(){
  var oBtnGroup = document.getElementsByClassName('J_btnGroup')[0],
      oBtnItems = document.getElementsByClassName('btn-item'),
      tpl = document.getElementById('J_itemTpl').innerHTML,
      oList = document.getElementsByClassName('J_list')[0],
      oLoading = document.getElementsByClassName('J_loading')[0],
      page = 0,
      cache = {};

  var init = function(){
    bindEvent();
    getAjaxCourses(page);
  }

  function bindEvent(){
    oBtnGroup.addEventListener('click', btnClick, false);
  }

  function render(data){
    var list = '';
    data.myForEach(function(elem){
      list += tpl.replace(/{{(.*?)}}/gim, function(node, key){
        return {
          folder: elem.folder,
          classname: elem.classname,
          name: elem.name,
          watched: elem.watched
        }[key];
      });
    });

    oList.innerHTML = list;
  }

  function getAjaxCourses(page){
    $.ajax({
      url: 'http://study.lfclass.com/Index/getCourses',
      type: 'POST',
      dataType: 'JSON',
      data: {
        page: page
      },
      success: function(data){
        console.log(data);
        cache[page] = data;
        oLoading.style.display = 'block';

        setTimeout(function(){
          render(data);
          oLoading.style.display = 'none';
        }, 500);
        
      },
      error: function(){
        console.log('获取失败');
      }
    })
  }

  function getCacheCourses(page){
    var data = cache[page];
    render(data);
  }

  function btnClick(e){ //事件对象
    var e = e || window.event,
        tar = e.target || e.srcElement,
        oParent = tar.parentNode,
        className = oParent.className;

    if(className === 'btn-item'){
      var thisIdx = Array.prototype.indexOf.call(oBtnItems, oParent);
      page = thisIdx;
      oBtnItems.myForEach(function(elem){
        elem.className = 'btn-item';
      });

      oParent.className += ' cur';
      
      if(cache[page]){
        getCacheCourses(page);
      }else{
        getAjaxCourses(page);
      }
    }
  }
  
  init();
})();





















