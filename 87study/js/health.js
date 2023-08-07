$(function(){
        $(".filterMore").click(function(){
            $(this).toggleClass("moreDown");
            $(this).toggleClass("moreUp");
            $(".filterDetail").slideToggle();
        })


});