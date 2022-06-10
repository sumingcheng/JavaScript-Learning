;(function(){
  oBtnGroup = document.getElementsByClassName('btn-group')[0],
  oBtnItems = document.getElementsByClassName('btn-item'),
  oList = document.getElementsByClassName('js-list')[0],
  tpl = document.getElementById('J_itemTpl').innerHTML,
  loading = document.getElementsByClassName('loading')[0],
  cache = {},
  page = 0;
  
  var init = function(){
    getAjaxCourses(page);
    bindEvent();
  }

  function bindEvent(){
    oBtnGroup.addEventListener('click', btnClick, false);
  }

  function render(data){
    var list = '';
    data.myForEach(function(elem, idx, arr){
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

  function btnClick(e){
    var e = e || window.event,
        tar = e.target || e.srcElement,
        oParent = tar.parentNode,
        className = oParent.className;

    if(className === 'btn-item'){
      var thisIdx = Array.prototype.indexOf.call(oBtnItems, oParent);
      page = thisIdx;
      
      oBtnItems.myForEach(function(elem, idx, arr){
        elem.className = 'btn-item';
      });

      oParent.className += ' cur';
      
      if(cache[page]){
        getCacheCourses();
      }else{
        getAjaxCourses();
      }
    }
        
  }

  function getAjaxCourses(){
    $.ajax({
      url: 'http://study.jsplusplus.com/Lfcourses/getCourses',
      type: 'POST',
      dataType: 'JSON',
      data: {
        page: page
      },
      success: function(data){
        cache[page] = data;
        loading.style.display = 'block';
        setTimeout(function(){
          render(data);
          loading.style.display = 'none';
        }, 500);
      },
      error: function(){
        console.log('获取错误');
      }
    });
  }

  function getCacheCourses(){
    var data = cache[page];
    render(data);
  }

  init();
})();