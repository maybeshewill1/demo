/*
var n=document.getElementsByClassName('head-sidebar');
var lis=document.getElementsByClassName('step');//�ҵ�ÿ��li
var style = null;
if (window.getComputedStyle) {
    style = window.getComputedStyle(n[0], null);    // ��IE
} else {
    style = n[0].currentStyle;  // IE
}
var width=style.width;//���head-sidebar�õ�ԭʼ���
var a=[];
for(var i=0;i<lis.length;i++){//ÿ��li�Ŀ��
 if (window.getComputedStyle) {
 style = window.getComputedStyle(lis[i], null);    // ��IE
 } else {
 style = lis[i].currentStyle;  // IE
 }
 a[a.length]=style.width;//����õ���li��ȱ���������a��
 }


console.log("width=" + width);
console.log(a);
var b=lis[0].offsetLeft;//���ÿ��li���������
console.log(b);
//Ϊli����������Ƴ��¼�
//�������head-sidebar�Ŀ��ΪoffsetLeft
 */






//ͼƬ�ֲ�
var box=document.getElementById('pic-box');
var uls=document.querySelectorAll('[class*=list]');
var imgs=uls[0].getElementsByTagName('li');
var btn=uls[1].getElementsByTagName('li');
var i=index=0; //�м�����ͳһ������
var play=null;
//console.log(box,uls,imgs,btn);//��ȡ��ȷ

//ͼƬ�л�, ���뵭��Ч��
function show(a){        //����������ǵ�����һ���±�ʱ����ť��ͼƬ�����Եķ�Ӧ
    for(i=0;i<btn.length;i++ ){
        btn[i].className='';    //ÿ����ť�������óɿ�������Ȼ��ѵ�ǰ��ť���óɿɼ���
        btn[a].className='current';
    }
    for(i=0;i<imgs.length;i++){ //��ͼƬ��Ч�����úͰ�ť��ͬ
        imgs[i].style.opacity=0;
        imgs[a].style.opacity=1;
    }
}
//�л���ť���ܣ���Ӧ��ӦͼƬ
for(i=0;i<btn.length;i++){
    btn[i].index=i;  //��ѭ����ķ���ȥ����ѭ����ı�����i������ֵ����Ĳ���i�ı䶯ֵ�����⡣��������ѭ���Ᵽ��ס
    btn[i].onmouseover=function(){
        show(this.index);
        clearInterval(play);
    }
}

//�Զ��ֲ�����
function autoPlay(){
    play=setInterval(function(){ //���paly��Ϊ�˱��涨ʱ���ģ�����������ȫ������ ��Ȼ�������������� ���ߵ���auto.play Ҳ����Ե���ûʱ������
        index++;
        index>=imgs.length&&(index=0);//���������ȼ����⣬�����������š�
        show(index);
    },3000)
}
autoPlay();//���ϵ��ã���window.onload����������������ǵ���֮��Ӱ�쵽������������ʹ��autoPlay����ֻ������������

//div����������Ƴ��¼�
box.onmouseover=function(){
    clearInterval(play);
};

box.onmouseout=function(){
    autoPlay();
};
