$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 250){
            $(".back-top").fadeIn();
        }
        else{
            $(".back-top").fadeOut();
        }

        if(scrolling > 200){
            $("nav").addClass("navfixed");
        }

        else{
            $("nav").removeClass("navfixed");
        }
    });

    $(".back-top").on("click",function(){
        $("html,body").animate({
            scrollTop:"0px",
        },1000);
    })
});