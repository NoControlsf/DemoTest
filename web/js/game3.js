/**
 * Created by Administrator on 2018/6/2.
 */
var canvas = document.getElementById('canvas'); //绘图容器
var context  = canvas.getContext('2d'); //具体绘图操作由context处理 这里是2d绘制 3d用webgl
context.fillStyle = 'blue';
context.font = '40pt Arial'; //字体设置
context.save(); //保存
context.fillStyle = 'red';
context.font = '50pt 宋体'; //字体设置
//context.textAlign='center'; //对齐方式
context.restore(); //恢复
context.fillText('Hello World', 0,100); //绘制文本
var data = context.getImageData(0, 0, 300, 600); //图像保存
context.fillText('Hello World', 0,200);
context.fillText('Hello World', 0,300);
context.fillText('Hello World', 0,400);
context.putImageData(data, 0, 0); //图像恢复
