(function ($) {

  "use strict";

    // PRE_LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // seteaza durata    
    });


    // meniu
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // PARALLAX smc efct
    $.stellar({
      horizontalScrolling: false,
    }); 


    // slider
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    });


    // smoothcroll
    $(function() {
      $('.custom-navbar a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
