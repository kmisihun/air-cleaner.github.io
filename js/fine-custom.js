// JavaScript Document

// JavaScript Document

$(document).ready(function( ){
	
	var wd = ($('body').css('width')).split('p')[0];
	var he = ($('body').css('height')).split('p')[0];
	if(wd <= 1000){
		$('.menu').css({'width' : wd, 'height' : he-80});
		$('.trigger').click(function( ){
			$('.menu').fadeToggle( );
			$(this).toggleClass('trigger-extra-bg');
		});
		$('.menu').click(function( ){
			$('.menu').fadeToggle( );
			$('.trigger').removeClass('trigger-extra-bg');
		});
	}
	
	$(window).scroll(function( ){
		
		if(wd > 1000){
			if($(this).scrollTop( ) > 450){
				$('header').addClass('extra-header');
				$('header a').addClass('extra-text');
			}else{
				$('header').removeClass('extra-header');
				$('header a').removeClass('extra-text');
			}
		}
		if($(this).scrollTop( ) > 150){
			$('.fd-cause-right').fadeIn( );
		}
		if($(this).scrollTop( ) > 500){
			$('article div.fd-car-left').fadeIn( );
		}
		if($(this).scrollTop( ) > 1600){
			$('.fd-factory-right').fadeIn( );
		}		
	});
	$('.fd-symptom').mouseover(function( ){
		$('.fd-symptom > div > img').stop( ).fadeIn( );
		$('.fd-symptom > div > div').stop( ).fadeIn( );
	});
	$('.fd-symptom').mouseout(function( ){
		$('.fd-symptom > div > img').stop( ).fadeOut( );
		$('.fd-symptom > div > div').stop( ).fadeOut( );
	});
	
	
	
});