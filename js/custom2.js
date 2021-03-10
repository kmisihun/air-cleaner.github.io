// JavaScript Document

    $(window).scroll(function( ){
    
    if($(window).width()>=1401 && $(window).scrollTop() > 1400){
            $('.mid-img').css({'transform':'translateX(0)','textAlign':'center','fontSize':'52px','color':'white','fontWeight':'500'}).text("알뜰한 당신을 위한 슈퍼세일!");
        
    
        } else if($(window).width()>=1001 && $(window).width()<=1400 && $(window).scrollTop() > 1200){
                $('.mid-img').text("알뜰한 당신을 위한 슈퍼세일!").css({'transform':'translateX(0)','textAlign':'center','fontSize':'45px','color':'white','fontWeight':'500'});
        
        
            } else if($(window).width()>=660 && $(window).width()<=1000 && $(window).scrollTop() > 750){
                $('.mid-img').text("알뜰한 당신을 위한 슈퍼세일!").css({'transform':'translateX(0)','textAlign':'center','fontSize':'42px','color':'white','fontWeight':'500'});
            
                
                } else if($(window).width()>=300 && $(window).width()<=659 && $(window).scrollTop() > 1100){
                   $('.mid-img').text("알뜰한 당신을 위한 슈퍼세일!").css({'transform':'translateX(0)','textAlign':'center','fontSize':'28px','color':'white','fontWeight':'500'});
                
                        }else {
                        $('.mid-img').css({'transform':'translateX(-100%)'});
                        }
                    });
               

    