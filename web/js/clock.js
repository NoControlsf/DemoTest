/**
 * Created by Administrator on 2018/6/2.
 */
var canvas = document.getElementById('canvas'); //绘图容器
var context  = canvas.getContext('2d'); //具体绘图操作由context处理 这里是2d绘制 3d用webgl
context.font = '40pt Arial'; //字体设置
var hands = [
    {'weight': 5, 'kind': 'hour', 'length': 180, 'color': 'red' },
    {'weight': 3, 'kind': 'minute', 'length': 230, 'color': 'green' },
    {'weight': 1, 'kind': 'second', 'length': 280, 'color': 'blue' }
]
drawClock();
setInterval(drawClock, 1000);
function drawClock() {
    context.clearRect(0,0,canvas.width,canvas.height);
    drawNumbers();
    drawCenter();
    drawCircle();
    drawNumbers();
    drawHands();
}
//画刻度
function drawNumbers() {
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    var numberwidth = 0; //文本宽度
    var x,angle,y,dist=canvas.width/2 - 30; //文本中心和中心黑点的距离
    numbers.forEach(function (number) {
        numberwidth=context.measureText(number).width;
        angle = (number - 3)/6*Math.PI;
        x = canvas.width/2 + dist*Math.cos(angle)-numberwidth/2;
        y = canvas.height/2 + dist*Math.sin(angle) + 20;
        context.fillText(number, x, y);
    })
}
//画中心
function drawCenter() {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 5, 0, 360);
    context.fill();
}
//画圆
function drawCircle() {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, canvas.width/2,0,360);
    context.stroke();
}

function drawHands() {
    context.save();
    var date = new Date(), x, y, angle;
    hands.forEach(function (hand) {
        switch (hand.kind){
            case 'hour':
                angle = Math.PI*((date.getHours()%12*3600+
                    date.getMinutes()*60+date.getMinutes()-10800)/21600);
                break;
            case 'minute':
                angle = Math.PI*((date.getMinutes()*60+date.getSeconds()-900)/1800);
                break;
            case 'second':
                angle = Math.PI*((date.getSeconds()-15)/30);
        }
        x = canvas.width/2+hand.length*Math.cos(angle);
        y = canvas.height/2+hand.length*Math.sin(angle);
        context.beginPath();
        context.moveTo(canvas.width/2, canvas.height/2);
        context.lineTo(x,y);
        context.lineWidth=hand.weight;
        context.strokeStyle=hand.color;
        context.stroke();
    });
    context.restore();
}