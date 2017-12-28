/**
 * Created by Administrator on 17-7-1.
 */
$(function(){
	
	$('.CorporateInfoListMm li').each(function() {
        $(this).hover(
			function(){
				$(this).children('p').stop().animate({top:0},459);
			},
			function(){
				$(this).children('p').stop().animate({top:459},0);
		});
	});
	/*艺术家介绍*/
});
window.onload = function()
{
	
	var aLi = document.getElementById('list').getElementsByTagName('li');
	
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover = function()
		{
			
			var oH3 = this.getElementsByTagName('h3')[-1];
			var oUl = this.getElementsByTagName('ul')[0];
			
			if(oH3)
			{
				oH3.style.background = '#1b1b1b';
			};
			
			if(oUl)
			{
				oUl.style.display = 'block';
			};
			
			
		};
		aLi[i].onmouseout = function()
		{
			
			var oH3 = this.getElementsByTagName('h3')[0];
			var oUl = this.getElementsByTagName('ul')[0];
			
			if(oH3)
			{
				oH3.style.background = '';
			};
			
			if(oUl)
			{
				oUl.style.display = 'none';
			};
			
			
		};
	};
	/*导航二级列表*/
	var oBox = document.getElementById('box1');
	var aSpan = oBox.getElementsByTagName('h2')[0].getElementsByTagName('span');
	var aUl = oBox.getElementsByTagName('ul');
	
	var len = aSpan.length;
	for( var i=0;i<len;i++ )
	{
		aSpan[i].index = i;
		aSpan[i].onmouseover = function()
		{
			for( var i=0;i<len;i++ )
			{
				aSpan[i].className = '';
				aUl[i].style.display = 'none';
			};
			this.className = 'active';
			aUl[this.index].style.display = 'block';
		};
	};
	/*新闻选项卡*/
	
};
$(function(){  
    var wrap=document.getElementById('wrap'),  
        pic=document.getElementById('pic'),  
        list=document.getElementById('lista').getElementsByTagName('li'),  
        index=0,  
        timer=null;  
  
      // 定义并调用自动播放函数  
      if(timer){  
            
          clearInterval(timer);  
          timer=null;  
      }  
		timer=setInterval(autoplay,2000);  
      // 定义图片切换函数  
      function autoplay(){  
          index++;  
          if(index>=list.length){  
              index=0;  
          }  
         changeoptions(index);          
      }  
       
     // 鼠标划过整个容器时停止自动播放  
	wrap.onmouseover=function(){  
      
  	  	clearInterval(timer);  
      
	}  
     // 鼠标离开整个容器时继续播放至下一张  
    wrap.onmouseout=function(){  
      
    	timer=setInterval(autoplay,2000);  
	}  
     // 遍历所有数字导航实现划过切换至对应的图片  
     for(var i=0;i<list.length;i++){  
         list[i].id=i;  
         list[i].onmouseover=function(){  
             clearInterval(timer);  
             changeoptions(this.id);  
               
             }  
     }  
     function changeoptions(curindex){  
            for(var j=0;j<list.length;j++){  
              list[j].className='';  
              pic.style.top=0;      
          }  
          list[curindex].className='active';  
          pic.style.top=-curindex*832+'px';  
          index=curindex;  
     }       
}); 
/*banner轮播图*/
