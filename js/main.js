$(function (){
    'use strict'

    //Featured work shuffle
    $('.portofolio .select li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle-imgs .image').css('opacity',1);
        } else {
        $('.shuffle-imgs .image ').css('opacity','.09');
        $($(this).data('class')).parent().css('opacity',1);
        }
    });
});
