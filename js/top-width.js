/* Ч��������
$('li.step ').on("mouseenter",function(){

  $("div.head-sidebar").css("width",140+this.offsetLeft);
});

$('.step ').on("mouseleave",function() {
    $("div.head-sidebar").css("width", 338);
});
 **/
//����������Ч��
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
//¥��ͼƬ�ֲ�
var curIndex = 0,  //��ǰindex
    imgLen = $(".main-detail .pic-holder a img").length;  //ͼƬ����
    //console.log(imgLen);
var autoChange = setInterval(function(){
    if(curIndex <  imgLen-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //���ñ任������
    changeTo(curIndex);
},3500);
//���뻬���¼�����
$(".pic-holder").hover(function(){
    //���������ʱ��
    clearInterval(autoChange);
},function(){
    //���������ö�ʱ��
    autoChangeAgain();
});
//���ͷ�������
$(".move-left").click(function(){
    //����curIndex������һ��ͼƬ����
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
});
/*��ͷ���뻬���¼�����
$(".move-right").hover(function(){
    //���������ʱ��
    clearInterval(autoChange);
},function(){
    //���������ö�ʱ��
    autoChangeAgain();
});
 $(".move-left").hover(function(){
 //���������ʱ��
 clearInterval(autoChange);
 },function(){
 //���������ö�ʱ��
 autoChangeAgain();
 });
 */
//�Ҽ�ͷ�������
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
        //���ñ任������
        changeTo(curIndex);
    },5500);
}
function changeTo(num){
    var goLeft = num *  461;
    $(".pic-holder").stop(true).animate({left: "-" + goLeft + "px"},1000);
}
//¥�����Ч��



$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
       // var currentItem = ""
        scrollTop >= 500 ? $('#side-content').removeClass('s2 ').addClass('s1') : $('#side-content').removeClass('s1 ').addClass('s2');
       //�ػ�
        if (scrollTop >=200 && scrollTop <700) {
            $('.li-sale a ').addClass('hover1');
        }else{ $('.li-sale a ').removeClass('hover1');}
        //��·
        if (scrollTop >=800 && scrollTop <1200) {
            $('.li-way a ').addClass('hover1');
        }else{ $('.li-way a ').removeClass('hover1');}
        //�Ƶ�
        if (scrollTop >=1250 && scrollTop < 1650) {
            $('.li-hotel a ').addClass('hover1');
        }else{$('.li-hotel a ').removeClass('hover1');}
        //Ŀ�ĵ�
        if (scrollTop >=1670 && scrollTop <1870) {
            $('.li-goal a ').addClass('hover1');
        }else{$('.li-goal a ').removeClass('hover1');}
        //��Ʊ
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
 //�˴���200�Ӿ�����������趨����Ϊ�������ȥһ����ֵ��
 //�ڸպù�����һ��div�ı�Եʱ���˵���ѡ��״̬�����
 //���磬ҳ��պù�������һ��div�ĵײ���ʱ��ҳ���Ѿ���ʾ���ڶ���div�����˵��л��ǵ�һ��ѡ���ѡ��״̬

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
