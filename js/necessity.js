// JavaScript Document$
$(document).ready(function(){
    $('#necessity').click(function(){
        $('#necessity-detail').css("display", "block");
    });
    $('#nc-times').click(function(){
        $('#necessity-detail').css("display","none");
    });
    $('#effect').click(function(){
        $('#effect-detail').css("display", "block");
    });
    $('#ef-times').click(function(){
        $('#effect-detail').css("display","none");
    });
});