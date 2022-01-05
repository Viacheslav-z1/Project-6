$(function(){
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: 0,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });

      $('.info__inner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              autoplay: true,
              autoplaySpeed: 3000,
              dots:true,
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
              dots:true,
              autoplay: true,
              autoplaySpeed: 3000,
              dots:true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 2,
              dots:true,
              autoplay: true,
              autoplaySpeed: 3000,
              dots:true,
            }
          },
          {
            breakpoint: 537,
            settings: {
              slidesToShow: 1,
              dots:true,
              autoplay: true,
              autoplaySpeed: 3000,
              dots:true,
            }
          }
        ]
      });



      $('.menu__btn').click(function() {
        $('.menu__block').toggleClass('open-menu');
        $('.slider').toggleClass('open-menu');
    });

});