// JavaScript Document

$(document).ready(function( ){
	
    
    
	/* 내비게이션바 */
	
	var wd = ($('body').css('width')).split('p')[0];
	var he = ($('body').css('height')).split('p')[0];
	if(wd <= 1000){
		$('.menu').css({'width' : wd, 'height' : he-60});
		$('.trigger').click(function( ){
			$('.menu').fadeToggle( );
			$(this).toggleClass('trigger-extra-bg');
		});
		$('.menu').click(function( ){
			$('.menu').fadeToggle( );
			$('.trigger').removeClass('trigger-extra-bg');
		});
	}
	
    /*if(wd <= 1000){
        var ft_wd = $('.ft-btn').css('width');
        alert(ft_wd);
    }*/
    
    
	/* 백그라운드 버튼 */
	if(wd <= 660){
        
		$('.main-bg[data-slide=1] div h3').html("당신의 가족을<br>위협하는<br><span>미세먼지</span>");
		$('.main-bg[data-slide=2] div h3').html("미세먼지로부터<br>지켜줄<br><span>공기청정기</span>");
		$('.main-bg[data-slide=3] div h3').html("여러 조건을 통해<br>선별된<br><span>제품</span>");
		$('.main-bg[data-slide=4] div h3').html("실제 경험을 통해<br>작성된<br><span>후기</span>");
        $('.fine-banner h2').html("What is<br>fine dust");
        $('.fd-cause-left p').insertAfter('.fd-cause-right');
        $('.fd-cause-left h3').insertAfter('.fd-cause-right');
        $('.fd-car-right p').insertAfter('.fd-car-left');
        $('.fd-car-right h3').insertAfter('.fd-car-left');
        $('.fd-factory-left p').insertAfter('.fd-factory-right');
        $('.fd-factory-left h3').insertAfter('.fd-factory-right');
	}
	
	/* 백그라운드 */
	
	$('.slide1').mouseover(function( ){
		$('.main-bg-slide').css('transform', 'translateX(0%)');
		$('.main-bg-slide-btn ul li a').removeClass('focus');
		$(this).find('a').addClass('focus');
	});
	
	$('.slide2').mouseover(function( ){
		$('.main-bg-slide').css('transform', 'translateX(-25%)');		
		$('.main-bg-slide-btn ul li a').removeClass('focus');
		$(this).find('a').addClass('focus');
	});
	
	$('.slide3').mouseover(function( ){
		$('.main-bg-slide').css('transform', 'translateX(-50%)');	
		$('.main-bg-slide-btn ul li a').removeClass('focus');
		$(this).find('a').addClass('focus');
	});
	
	$('.slide4').mouseover(function( ){
		$('.main-bg-slide').css('transform', 'translateX(-75%)');	
		$('.main-bg-slide-btn ul li a').removeClass('focus');
		$(this).find('a').addClass('focus');
	});
	
	/* 백그라운드 타이머 */
	
	/*setInterval(function( ){
		var wd = ($('body').css('width')).split('p')[0];
		
		var trans = $('.slide').css('transform');
		var val = parseInt(trans.split(",")[4]);
		if(val <= -wd*3){
			$('.slide').css('transform', 'translateX(0px)');
			$('.slide-btn ul li a').removeClass('focus');
			$('.slide-btn ul li:first-child').find('a').addClass('focus');
		}
		else{
			var value = "translateX("+(val - wd)+"px)";
			var indexNum = $(this).index()+1;
			$('.slide').css('transform', value);
			$('.slide-btn ul li a').removeClass('focus');
			$('.slide-btn ul li:nth-child("'+indexNum+'")').find('a').addClass('focus');
		}
		
		
	}, 2000);*/
	
	/* 스크롤 */
    
    $(window).scroll(function( ){
        
        if($(this).scrollTop( ) > 450){
			$('.rv-rv:nth-child(2n)').css({'margin-left' : '0px'});
			$('.rv-rv:nth-child(2n+1)').css({'margin-right' : '0px'});
		}
        
		var wd = ($('body').css('width')).split('p')[0];
		
        /* 내비게이션 바 컬러 변경 */
        if(wd >= 1401){
            if($(this).scrollTop( ) > 450){
                $('header').addClass('extra-header');
                $('header a').addClass('extra-text');
            }else{
                $('header').removeClass('extra-header');
                $('header a').removeClass('extra-text');
            }
        }else if(wd >= 661){
            if($(this).scrollTop( ) > 350){
                $('header').addClass('extra-header');
                $('header a').addClass('extra-text');
            }else{
                $('header').removeClass('extra-header');
                $('header a').removeClass('extra-text');
            }
        }else{
            if($(this).scrollTop( ) > 400){
                $('header').addClass('extra-header');
                $('header a').addClass('extra-text');
            }else{
                $('header').removeClass('extra-header');
                $('header a').removeClass('extra-text');
            }
        }
		
        /* FHD ~ TABLET 까지 fine-dust fadeIn 이미지 */
		if($(this).scrollTop( ) > 150){
			$('.fd-cause-right').fadeIn( );
		}
		if($(this).scrollTop( ) > 500){
			$('.fd-car-left').fadeIn( );
		}
		if($(this).scrollTop( ) > 1600){
			$('.fd-factory-right').fadeIn( );
		}		
        
        
        
	});
	if(wd > 1000){
        $('.fd-symptom').mouseover(function( ){
            $('.fd-symptom > div > img').stop( ).fadeIn( );
            $('.fd-symptom > div > div').stop( ).fadeIn( );
        });
        $('.fd-symptom').mouseout(function( ){
            $('.fd-symptom > div > img').stop( ).fadeOut( );
            $('.fd-symptom > div > div').stop( ).fadeOut( );
        });
    }
});