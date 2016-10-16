/*
var n=document.getElementsByClassName('head-sidebar');
var lis=document.getElementsByClassName('step');//找到每个li
var style = null;
if (window.getComputedStyle) {
    style = window.getComputedStyle(n[0], null);    // 非IE
} else {
    style = n[0].currentStyle;  // IE
}
var width=style.width;//左侧head-sidebar得到原始宽度
var a=[];
for(var i=0;i<lis.length;i++){//每个li的宽度
 if (window.getComputedStyle) {
 style = window.getComputedStyle(lis[i], null);    // 非IE
 } else {
 style = lis[i].currentStyle;  // IE
 }
 a[a.length]=style.width;//将获得到的li宽度保存在数组a中
 }


console.log("width=" + width);
console.log(a);
var b=lis[0].offsetLeft;//获得每个li的左侧坐标
console.log(b);
//为li绑定鼠标移入移出事件
//鼠标移入head-sidebar的宽度为offsetLeft
 */






//图片轮播
var box=document.getElementById('pic-box');
var uls=document.querySelectorAll('[class*=list]');
var imgs=uls[0].getElementsByTagName('li');
var btn=uls[1].getElementsByTagName('li');
var i=index=0; //中间量，统一声明；
var play=null;
//console.log(box,uls,imgs,btn);//获取正确

//图片切换, 淡入淡出效果
function show(a){        //方法定义的是当传入一个下标时，按钮和图片做出对的反应
    for(i=0;i<btn.length;i++ ){
        btn[i].className='';    //每个按钮都先设置成看不见，然后把当前按钮设置成可见。
        btn[a].className='current';
    }
    for(i=0;i<imgs.length;i++){ //把图片的效果设置和按钮相同
        imgs[i].style.opacity=0;
        imgs[a].style.opacity=1;
    }
}
//切换按钮功能，响应对应图片
for(i=0;i<btn.length;i++){
    btn[i].index=i;  //，循环里的方法去调用循环里的变量体i，会出现调到的不是i的变动值的问题。所以先在循环外保存住
    btn[i].onmouseover=function(){
        show(this.index);
        clearInterval(play);
    }
}

//自动轮播方法
function autoPlay(){
    play=setInterval(function(){ //这个paly是为了保存定时器的，变量必须在全局声明 不然其他方法调不到 或者调用auto.play 也许可以但是没时间试了
        index++;
        index>=imgs.length&&(index=0);//可能有优先级问题，所以用了括号。
        show(index);
    },3000)
}
autoPlay();//马上调用，用window.onload调用这个方法，但是调用之后影响到了其他方法，使用autoPlay所以只能这样调用了

//div的鼠标移入移出事件
box.onmouseover=function(){
    clearInterval(play);
};

box.onmouseout=function(){
    autoPlay();
};
