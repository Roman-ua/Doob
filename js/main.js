$(function(){

$('.company__slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<img class="arrow__prev" src="img/company/Pathprev.png">',
  nextArrow: '<img class="arrow__next" src="img/company/Pathnext.png">',
});


$('.galery__slider-wrapper').slick({
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<img class="arrow__prev" src="img/company/Pathprev.png">',
  nextArrow: '<img class="arrow__next" src="img/company/Pathnext.png">',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.blog__slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<img class="arrow__prev" src="img/company/Pathprev.png">',
  nextArrow: '<img class="arrow__next" src="img/company/Pathnext.png">',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(function() {
  $(".header__nav-gamburger").click(function() {
      $(".header__nav-items").toggleClass("active");         
      $(this).toggleClass("active");
  })
});

  
});