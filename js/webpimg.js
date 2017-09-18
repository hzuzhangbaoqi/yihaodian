//设置默认值
window.isSupportWebp = false;
void function(){
    var webpTestsUri = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    var image = new Image();
    function addResult(event) {
        // if the event is from 'onload', check the see if the image's width is
        // 1 pixel (which indiciates support). otherwise, it fails
        window.isSupportWebp = event && event.type === 'load' ? image.width == 1 : false;
    }
    image.onerror = addResult;
    image.onload = addResult;
    image.src = webpTestsUri;
}();
// 图片替换为 webp 和 请求协议HTTPS
String.prototype.protocol = function(){
    var str = this;
    str = window.isSupportWebp ? (str.replace(/(\.jpg|\.png)/g, ".webp")) : str;
    return str.replace(/http:\/\/p\d\.qh[imgs]{3}/,"https://p.ssl.qhmsg");
};
//自动适配协议
String.prototype.authorProtocol = function(){
    var str = this.replace("quc.qhimg", "p8.qhimg");
    str = window.isSupportWebp ? (str.replace(/(\.jpg|\.png)/g, ".webp")) : str;
    return str.replace(/http:\/\/p\d\.qh[imgs]{3}/,"https://p.ssl.qhmsg");
};