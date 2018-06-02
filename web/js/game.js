/**
 * Created by Administrator on 2018/6/2.
 */
var canvas = document.getElementById('canvas'); //绘图容器
var context  = canvas.getContext('2d'); //具体绘图操作由context处理 这里是2d绘制 3d用webgl
context.font = '40pt Arial'; //字体设置
context.fillText('Hello World', 0,100); //绘制文本
alert(canvas.toDataURL("image/png", 1)); //生成临时图像文件