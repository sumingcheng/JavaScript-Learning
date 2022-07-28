// 需要配合JQ使用
$(function () {
  function screen() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 1920 || h < 1080) {
      var scale = "scale(" + (w / 1920) + "," + (h / 1080) + ")";
      $("body").css({
        "transform": scale,
        width: '1920px',
        height: '1080px',
        'transform-origin': '0 0'
      });
    } else {
      $("body").css({
        transform: 'scale(1)',
        width: '100%',
        height: '100%'
      });
    }
  }
  screen();
  $(window).resize(function () {
    screen();
    location.reload(['bForceGet']);
  });
})