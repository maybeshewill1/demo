/* 效果不理想
$('li.step ').on("mouseenter",function(){

  $("div.head-sidebar").css("width",140+this.offsetLeft);
});

$('.step ').on("mouseleave",function() {
    $("div.head-sidebar").css("width", 338);
});
 **/
//顶部导航条效果
var a=$('.head-content ul');
console.log(a[0].offsetLeft);

 $("li.step").mouseenter(function(){
 $("div.head-sidebar").stop(true).animate({
 width:32+ this.offsetLeft
   }, 250 );
 });
$(".step").mouseleave(function(){
    $("div.head-sidebar").stop(true).animate({
        width: 230
    }, 500 );
});
//楼层图片轮播
var curIndex = 0,  //当前index
    imgLen = $(".main-detail .pic-holder a img").length;  //图片总数
    //console.log(imgLen);
var autoChange = setInterval(function(){
    if(curIndex <  imgLen-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
},3500);
//滑入滑出事件处理
$(".pic-holder").hover(function(){
    //滑入清除定时器
    clearInterval(autoChange);
},function(){
    //滑出则重置定时器
    autoChangeAgain();
});
//左箭头点击处理
$(".move-left").click(function(){
    //根据curIndex进行上一个图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
});
/*箭头滑入滑出事件处理
$(".move-right").hover(function(){
    //滑入清除定时器
    clearInterval(autoChange);
},function(){
    //滑出则重置定时器
    autoChangeAgain();
});
 $(".move-left").hover(function(){
 //滑入清除定时器
 clearInterval(autoChange);
 },function(){
 //滑出则重置定时器
 autoChangeAgain();
 });
 */
//右箭头点击处理
$(".move-right").click(function(){
    //console.log($(this).index());
    curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
});
function autoChangeAgain(){
    autoChange = setInterval(function(){
        if(curIndex < imgLen-1){
            curIndex ++;
        }else{
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);
    },5500);
}
function changeTo(num){
    var goLeft = num *  461;
    $(".pic-holder").stop(true).animate({left: "-" + goLeft + "px"},1000);
}
//楼层点亮效果



$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
       // var currentItem = ""
        scrollTop >= 500 ? $('#side-content').removeClass('s2 ').addClass('s1') : $('#side-content').removeClass('s1 ').addClass('s2');
       //特惠
        if (scrollTop >=200 && scrollTop <700) {
            $('.li-sale a ').addClass('hover1');
        }else{ $('.li-sale a ').removeClass('hover1');}
        //线路
        if (scrollTop >=800 && scrollTop <1200) {
            $('.li-way a ').addClass('hover1');
        }else{ $('.li-way a ').removeClass('hover1');}
        //酒店
        if (scrollTop >=1250 && scrollTop < 1650) {
            $('.li-hotel a ').addClass('hover1');
        }else{$('.li-hotel a ').removeClass('hover1');}
        //目的地
        if (scrollTop >=1670 && scrollTop <1870) {
            $('.li-goal a ').addClass('hover1');
        }else{$('.li-goal a ').removeClass('hover1');}
        //机票
        if (scrollTop+windowHeight==documentHeight ) {
            $('.li-tickets a ').addClass('hover1');
        }else{$('.li-tickets a ').removeClass('hover1');}





/*
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var currentItem = "";
        console.log(scrollTop);


 if (scrollTop+windowHeight==documentHeight) {
 currentItem= "#" + contentItems.last().attr("id");
 }else{
 contentItems.each(function () {
 var contentItem = $(this);
 var offsetTop = contentItem.offset().top;
 if (scrollTop > offsetTop - 100) {
 //此处的200视具体情况自行设定，因为如果不减去一个数值，
 //在刚好滚动到一个div的边缘时，菜单的选中状态会出错，
 //比如，页面刚好滚动到第一个div的底部的时候，页面已经显示出第二个div，而菜单中还是第一个选项处于选中状态

 currentItem = "#" + contentItem.attr("id");
 }
 });
 }
 if (currentItem != $("#menu").find(".current").attr("href")) {
            $("#menu").find(".current").removeClass("current");
            $("#menu").find("[href=" + currentItem + "]").addClass("current");
        }

*/




    });
});
