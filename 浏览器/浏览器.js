function IEversion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            console.log('IE7');
            return 7;
        } else if (fIEVersion == 8) {
            console.log('IE8');
            return 8;
        } else if (fIEVersion == 9) {
            console.log('IE9');
            return 9;
        } else if (fIEVersion == 10) {
            console.log('IE10');
            return 10;
        } else {
            console.log('IE版本小于等于7');
            return 6; //IE版本<=7
        }
    } else if (isEdge) {
        console.log('edge');
        return 'edge'; //edge
    } else if (isIE11) {
        console.log('IE11');
        return 11; //IE11
    } else {
        console.log('不是IE浏览器');
        return -1; //不是ie浏览器
    }
}