$(function(){
	var i=0;
	var Otime=null;
	$('.dianji ul li').hover(function(){
		 i=$(this).index();
		 $(".img ul li").eq(i).fadeIn(800).siblings().fadeOut(200);
	     $(this).addClass("bj").siblings().removeClass("bj");})	

	 $(".dianji ul li,.click img").hover(function(){
		clearInterval(Otime);
         //alert('1')
     },function()			
	    {Otime=setInterval(img,3000);
        })
							
	  function img(){								   
	   i++;
	   if(i>2)  //轮播切换
	   i=0;
       $(".img ul li").eq(i).fadeIn(800).siblings().fadeOut(200);//自动切换
	   $(".dianji ul li").eq(i).addClass("bj").siblings().removeClass("bj");} //设置导航文字跟着图片走
	  Otime=setInterval(img,3000);
    $('.click .left').click(function(){
        //alert('d');
        i--;
	    if(i<0)  //轮播切换
	   i=2;
       $(".img ul li").eq(i).fadeIn(800).siblings().fadeOut(200);//自动切换
	   $(".dianji ul li").eq(i).addClass("bj").siblings().removeClass("bj");
    })
      $('.click .right').click(function(){
        //alert('d');
        img();
    })
	})  