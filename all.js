$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });

    $('.pou').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-heart fa-solid fa-heart');
    });

    $('.uptotop a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1800);
    });
   

});