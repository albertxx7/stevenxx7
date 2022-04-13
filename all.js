$(document).ready(function () {
    $('.showmenu').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });

    $('.pou').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-heart fa-solid fa-heart');
    });
   

});