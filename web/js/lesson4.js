/**
 * Created by Administrator on 2018/6/2.
 */
var canvas = document.getElementById('canvas'); //绘图容器
var context  = canvas.getContext('2d'); //具体绘图操作由context处理 这里是2d绘制 3d用webgl
context.fillStyle='blue';
context.font='30pt 宋体';
context.lineWidth=2;
context.arc(200, 200, 50, 0, Math.PI*90/180, true);// Math.PI*90/180角度转换弧度的公式 默认顺时针，设置true后为逆时针
context.stroke();//开始绘制图形
context.moveTo(0,0); //直线起点
context.lineTo(100,0); //可多次使用来绘制折线
context.lineTo(100,100);
context.lineTo(0,100);
context.lineTo(0,0);
//context.stroke();
context.fill();//填充方法
context.stroke(); //边框方法
//context.clearRect(0,0,canvas.width, canvas.height); //清屏 区域是矩形 坐标 宽 长
