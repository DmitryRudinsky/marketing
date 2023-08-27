$(function(){

    $(".menu a, .go__top").on("click", function (event) {
      event.preventDefault();

      var id  = $(this).attr('href'),

        top = $(id).offset().top;
      
      $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false
              }
            },
        ]
    });

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });


    var mixer = mixitup('.portfolio__content');

});