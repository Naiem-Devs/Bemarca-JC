(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".tesominial__slider").owlCarousel({
    loop: true,
    margin: 30,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  document.querySelector('html').classList.remove('no-js');
  if (!window.Cypress) {

    AOS.init({
      mirror: true,
      duration: 1500,
      initClassName: 'aos-init',
      once: true,
    });

  }
})(jQuery);
