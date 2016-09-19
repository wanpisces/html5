$(function(){
	//页面布局
	function pageLayout(){
		var mianNodes=$('#contentWrap').children();
		var index=0;
		$(window).scroll(function(){
			var winH=$(window).height();
			var scrollTop=$(document).scrollTop();
			var top=winH+scrollTop;
			if(top>=mianNodes.eq(index).offset().top+mianNodes.eq(index).height()){
				index++;
				mianNodes.eq(index).fadeIn();
			}
		})
	}
//	pageLayout();
	function windowSize(){
		var w=$(document).width();
		var ww=$(window).width();
		if(w>ww){
			$('#contentWrap').width('1285px');
		}else{
			$('#contentWrap').width('100%');
		}
	}
	windowSize();
	$(window).resize(function(){
		windowSize();
	});
		
	//我的信息
	function profile(obj,num){
		$(obj).hover(function(){
			$(num).fadeIn();
		},function(){
			$(num).hide();
		});
	}
	profile('.li1','#myProfile');
	profile('.li2','#myContact');
	
	//图片拖拽
	function dragImg(){
		var oImg=$('.dragImg img');
		var mImg=Math.floor(oImg.length/2);
		var mLeft=($('.dragImg').width()-oImg.width())/2;
		var zIndex=10;
		function dragClick(m){
			for(var i=0;i<oImg.length;i++){
				if(i<m){
					oImg.eq(i).css({
						'transform':'rotateY(45deg)',
						'left':(mLeft-(m-i)*100)+'px'
					});
				}else if(i==m){
					oImg.eq(i).css({
						'transform':'translateZ(100px)',
						'left':mLeft+'px',
						'z-index':zIndex+''
					});
				}else{
					oImg.eq(i).css({
						'transform':'rotateY(-45deg)',
						'left':(mLeft-(m-i)*100)+'px',
						'z-index':zIndex+''
					});
					zIndex--;
				}
			}
		}
		dragClick(5);//加载页面时的效果
		oImg.click(function(){
			var objIndex=$(this).index();
			dragClick(objIndex);
		});
	}
	dragImg();
	
	//手风琴效果
	function accordion(){
		$('.accordion ul li .fold').click(function(){
			$('.accordion ul li').removeClass('apear');
			$('.accordion ul li .unfold').addClass('div');
			$(this).parent().addClass('apear');
			$(this).next().removeClass('div');
			$('.accordion ul li .div').animate({'width':'0px'},10);
			$('.accordion ul li.apear .unfold').animate({'width':'750px'},10);
		});
	}
	accordion();
	
	//花瓣效果
	function rFlower(){
		var oImg=$('#flowerRain img');
		var num=oImg.length;
		var clientH=$(document).height();
		var a=[];
		for(var i=0;i<num;i++){
				a[i]=i;
			}
		function rain(){
			var rand=parseInt(Math.random()*(a.length-1));
			oImg.eq(a[rand]).animate({'top':clientH+'px'},20000);
			a.splice(rand,1);
			if(a.length==0){
				$('#flowerRain').css('top','-200px');
				$('#flowerRain img').css('top','-200px');
				for(var j=0;j<num;j++){
					a[j]=j;
				}
//				console.log(a);
			}
//			console.log(a[rand]);
			
		}
		rain();
		setInterval(rain,1000);
	}
	rFlower();
	
//	音乐播放
	function musicPlay(){
//		var oMusic = document.getElementById('music');
////		var oMusic = $('#music').eq(0);
//		$('#play').click(function(){
//			oMusic.pause();
//		});
		
		var singer = ['李健','张信哲','李健','张信哲', '李健'];
		var songName = ['假如爱有天意','爱你没错', '假如爱有天意','爱你没错', '假如爱有天意'];
//		var songSrc = [
//		'music/假如爱有天意.ogg',
//		'http://sc.111ttt.com/up/mp3/5626/FCDAA1EE48E373A55D8763D4F5671F69.mp3',
//		'music/假如爱有天意.ogg',
//		'http://sc1.111ttt.com/2016/1/07/20/200201544362.mp3',
//		'music/假如爱有天意.ogg'
//		]
		var n=1;
		var m=0;
		var mark=true;
		var oMusic = $('#music')[0];
		$('#singerPic').addClass('yy');
		$('.musicBg').addClass('yy');
		$('#play').attr('src','imgMusic/play.png');
		$('#play').click(function(){
			if(mark){
				oMusic.play();
				$('#play').attr('src','imgMusic/play.png');
				$('#singerPic').addClass('yy');
				$('.musicBg').addClass('yy');
				mark=false;
			}else{
				oMusic.pause();
				$('#play').attr('src','imgMusic/pause.png');
				$('#singerPic').removeClass('yy');
				$('.musicBg').removeClass('yy');
				mark=true;
			}
		});
		$('#next').click(function(){
			m=n%5;
			$('#singer').html(singer[m]);
			$('#songNam').html(songName[m]);
			$('#music').attr('src','music/'+songName[m]+'.ogg');
//			$('#music').attr('src',songSrc[m]);
			$('#singerPic').attr('src','imgMusic/'+m+'.jpg');
			oMusic.play();
			$('#play').attr('src','imgMusic/play.png');
			$('#singerPic').addClass('yy');
			$('.musicBg').addClass('yy');
			mark=false;
			n++;
		});
	}
	musicPlay();
	
	
//	图片展示
	function picShow(){
		var oImg=$('#picShow img');
		var n=0;
		oImg.click(function(){
			var obj=$(this).attr('src');
			$('#picShow').removeClass('picWrap').addClass('changePic');
			if(n==0){
				$('.bigPic').addClass('pic_h');
				$('.bigPic img').attr('src',obj);
				n++;
			}else{
				$('.bigPic').removeClass('pic_h');
				setTimeout(function(){
					$('.bigPic').addClass('pic_h');
					$('.bigPic img').attr('src',obj);
				},500);
			}
//			
		})
	}
	picShow();
	
//球体旋转
	function ball(){
		var oDiv=$('.ballWrap div');
		for(var i=0;i<oDiv.length;i++){
				setInterval(color,100);
				var a=color();
				oDiv.eq(i).css('border','4px solid '+a);
//				console.log(a);
		}
	}
	function color(){
		var aClor=[0,1,2,4,5,6,7,8,9,'a','b','c','d','e','f'];
		var colors='';
		var a='';
		for(var i=0;i<6;i++){
			var n=Math.floor(Math.random()*15);
			colors+=aClor[n]+'';
			a+=n+'';
		}
		return '#'+colors;
	}
	setInterval(ball,1000);

//3d旋转
	var rotate=0;
	function cube(m){
		var html='';
		var z=0;
		var delay=0;
		for(var a=0;a<m;a++){
			html+='<li><div></div><div></div><div></div><div></div></li>';
		}
		$('.cube ul').html(html);
		var oLi=$('.cube ul li');
		var liW=600/oLi.length;
		oLi.css('width',liW);
		for(var i=0;i<oLi.length;i++){
			oLi.eq(i).find('div').css({'background-position':-i*liW+'px'});
			if(i>oLi.length/2){
				z--;
				oLi.eq(i).css('z-index',z);
			}
			oLi.eq(i).css('transition','1s '+delay+'s');
			delay+=0.4/oLi.length;
		}
		
		//点击
		$('.iList i').click(function(){
			$(this).css('background','orangered').siblings().css('background','grey');
//			var index=$(this).index();
		});
		$('.iList i').eq(0).click(function(){$('.cube ul li').css('transform','rotateX(0deg)')});
		$('.iList i').eq(1).click(function(){$('.cube ul li').css('transform','rotateX(-90deg)')});
		$('.iList i').eq(2).click(function(){$('.cube ul li').css('transform','rotateX(-180deg)')});
		$('.iList i').eq(3).click(function(){$('.cube ul li').css('transform','rotateX(-270deg)')});
	}
	cube(10);
//	setInterval(cube(50),100);
	
//时钟
	function svgClock(){
		var date=new Date();
		var min=date.getMinutes();
		var second=date.getSeconds();
		var hour=(date.getHours()%12);
		
		//30度是一个小时，6度就是一分或者一秒钟
		var minAngle=min*6;
		var secondAngle=second*6;
		var hourAngle=hour*30;
		//获取三个指针
		var hourHand=$('#hour');
		var minHand=$('#munite');
		var secondHand=$('#second');
		hourHand.attr('transform','rotate('+hourAngle+',50,50)');
		minHand.attr('transform','rotate('+minAngle+',50,50)');
		secondHand.attr('transform','rotate('+secondAngle+',50,50)');
	}
	svgClock();
	setInterval(svgClock,1000);
//计时
	function DateDiff(sDate1, sDate2) {  //sDate1和sDate2是yyyy-MM-dd格式
	    var aDate, oDate1, oDate2, iDays;
	    aDate = sDate1.split("-");
	    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为yyyy-MM-dd格式
	    aDate = sDate2.split("-");
	    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
	    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
	    return iDays;  //返回相差天数
	}
	function loveTime(){
		var date=new Date();
			year=date.getFullYear(),
			month=date.getMonth()+1,
			day=date.getDate(),
			hour=date.getHours(),
			munite=date.getMinutes(),
			second=date.getSeconds(),
			nowDay=year+'-'+month+'-'+day;
		var time=DateDiff(nowDay, '2015-04-10');
//		alert(time);
		$('#Lday').html(time);
		$('#Lhour').html(hour);
		$('#Lmunite').html(munite);
		$('#Lsecend').html(second);
//		alert(day);
	}
	setInterval(loveTime,1000);

	//倒计时
	
	//判断年份合法性
	function verifyCountdown(){
		var date = new Date(),
			    year = date.getFullYear(),
				month = date.getMonth()+1,
				day = date.getDate()+1;
		$('#contentWrap_jsq .objYear').blur(function(){
			var objYear = parseInt($('.objYear').val());
			if(objYear-year<0){
				alert("你输入的年份不得小于"+year);
				$('.objYear').val(year);
			}
			if(isNaN(objYear)){
				alert("请输入合法的年份");
				$('.objYear').val(year);
			}
		});
		$('#contentWrap_jsq .objMonth').blur(function(){
			var objMonth = parseInt($('.objMonth').val());
			var objYear = parseInt($('.objYear').val());
			if(objYear==year){
				if(12-objMonth<0||objMonth<month){
					alert("你输入的月份不得小于"+month+"或大于12");
					$('.objMonth').val(month);
				}
			}else{
				if(12-objMonth<0||objMonth<1){
					alert("你输入的月份不得小于1或大于12");
					$('.objMonth').val(month);
				}
			}
			if(isNaN(objMonth)){
				alert("请输入合法的月份");
				$('.objMonth').val('1');
			}
		});
		$('#contentWrap_jsq .objDay').blur(function(){
			var objYear = parseInt($('.objYear').val());
			var objMonth = parseInt($('.objMonth').val());
			var objDay = parseInt($('.objDay').val());
			if(objDay<0||isNaN(objDay)){
				alert("请输入合法的天数");
				$('.objDay').val(day);
			}
			if(objMonth==1 || objMonth==3 || objMonth==5 || objMonth==7 || objMonth==8 || objMonth==10 || objMonth==12){
				if(objDay>31){
					alert("本月不得大于31天");
					$('.objDay').val(day);
				}
				if(objYear==year&&objMonth==month&&objDay<day){
					alert("本月不得小于"+day+"天");
					$('.objDay').val(day);
				}
			}
			if(objMonth==4 || objMonth==6 || objMonth==9 || objMonth==11){
				if(objDay>30){
					alert("本月不得大于30天");
					$('.objDay').val(day);
				}
				if(objYear==year&&objMonth==month&&objDay<day){
					alert("本月不得小于于"+day+"天");
					$('.objDay').val(day);
				}
			}
			if(objMonth==2){
				if((objYear%4==0 && objYear%100!=0) || objYear%400==0){
					if(objDay>29){
						alert("本月不得大于29天");
						$('.objDay').val(day);
					}
				}else{
					if(objDay>28){
						alert("本月不得大于28天");
						$('.objDay').val(day);
					}
				}
			}
		});
	}
	verifyCountdown();
	//点击倒计时
	$('#contentWrap_jsq .begin').click(function(){
		function countdown(){
			//输入框的时间
			var objYear = $('.objYear').val(),
				objMonth = $('.objMonth').val(),
				objDay = $('.objDay').val(),
				objTime = objYear+'-'+objMonth+'-'+objDay;
			//现在时间
			var date = new Date(),
			    year = date.getFullYear(),
				month = date.getMonth()+1,
				day = date.getDate()+1,
				hour = date.getHours();
				minute = date.getMinutes();
				second = date.getSeconds();
			    nowTime = year+'-'+month+'-'+day;
			//时间差
			var diffDay = DateDiff(objTime, nowTime),//获取时间差的天数
				diffHour = 23-hour,
				diffMinute = 59-minute,
				diffSecond = 59-second;
				
			$('.cutDay').html(diffDay);
			$('.cutHour').html(diffHour);
			$('.cutMinute').html(diffMinute);
			$('.cutSecond').html(diffSecond);
		}
		countdown();
		setInterval(countdown,1000);
	});
	
})