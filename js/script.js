(function($){
$(document).ready(function(){
// READY 

/* 이미지 */

    $("#sketch").mousemove(function(e){
        $('.follow').css({'top': e.clientY - 20, 'left': e.clientX - 20});
    });

    var $imagesArea = $(".images-area");
    $imagesArea.css({
        "transform" : "translateY(-3000px)",
        "transition" : "all 15s linear"
    });

    // $imagesArea.click(function(){
        
    // });

    $(".i1").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

    $(".i2").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

    $(".i3").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

    $(".i4").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

    $(".i5").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

    $(".i6").hover(function() {
        $(this).find("img:last").fadeToggle();
    });

/* 로딩 */
    function delayLink1() {
        setTimeout(function(){
            location.href = "./p1.html";
        },1500);
    }
    function delayLink2() {
        setTimeout(function(){
            location.href = "./p2.html";
        },1500);
    }
    function delayLink3() {
        setTimeout(function(){
            location.href = "./p3.html";
        },1500);
    }
    function delayLink4() {
        setTimeout(function(){
            location.href = "./p4.html";
        },1500);
    }
    function delayLink5() {
        setTimeout(function(){
            location.href = "./p5.html";
        },1500);
    }
    function delayLink6() {
        setTimeout(function(){
            location.href = "./p6.html";
        },1500);
    }
    function delayLink7() {
        setTimeout(function(){
            location.href = "./p7.html";
        },1500);
    }
    $(".p1").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p1-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink1();
    });
    $(".p2").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p2-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink2();
    });
    $(".p3").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p3-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink3();
    });
    $(".p4").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p4-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink4();
    });
    $(".p5").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p5-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink5();
    });
    $(".p6").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p6-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink6();
    });
    $(".p7").click(function(event){
        event.preventDefault();
        $(".header").fadeOut(500);
        $(".p7-loading").css({
            "opacity" : "100",
            "transform" : "scaleY(200)",
            "transition" : "all ease 1s"
        });
        delayLink7();
    });



    /* 페이드인 아웃 */

    function coverFadeIn(){
        setTimeout(function(){
            $(".cover-container").fadeIn(1000);
            $(".header").fadeIn(1000);
        }, 3000);
    }
    function titleFadeToggle(){
        $(".loading-title").fadeIn(2000);
        $(".loading-title").fadeOut(1000);
        coverFadeIn();
    }
    

    titleFadeToggle();
    
    
    
});
})(jQuery);