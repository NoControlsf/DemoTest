/**
 * Created by Administrator on 2018/6/3.
 */
var canvas = document.getElementById('canvas'); //绘图容器
var context  = canvas.getContext('2d'); //具体绘图操作由context处理 这里是2d绘制 3d用webgl

var image = new Image();
image.src='img/back.jpg';

image.onload=function (e) {
    context.drawImage(image,0,0);
    //context.drawImage(image,0,0, canvas.width,canvas.height);
};

context.font='20pt Araial';

canvas.onmousemove=function (e) {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillText('(' + canvas.getLocation(e.x,e.y).x + ', ' + canvas.getLocation(e.x,e.y).y + ')',0,100);
};
//禁止选择文本
window.onselectstart=function(e){
    e.preventDefault();
};
//禁止右键弹出菜单
window.oncontextmenu=function(e){
    e.preventDefault();
};
//在用户关闭网页之前给予提醒
window.onbeforeunload=function(e){
    e.preventDefault();
}

HTMLCanvasElement.prototype.getLocation=function (x,y) {
    var bbox = this.getBoundingClientRect();
    return {
        x:(x-bbox.left)*(canvas.width/bbox.width),
        y:(y-bbox.top)*(canvas.width/bbox.width)
    }
};