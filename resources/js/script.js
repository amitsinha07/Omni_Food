$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* scroll on functions*/
    $(".js--scroll-to-plan").click(function(){
        $("html, body").animate({scrollTop: $('.js--section-plans').offset().top},1000)
    })
    
    $(".js--scroll-to-start").click(function(){
        $("html, body").animate({scrollTop: $('.js--section-features').offset().top},1000)
    })

    
});