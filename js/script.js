$(function () {

  // banner slider
  $('.main_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
  });

  // about slider
  $('.main_about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
  });

  // testimonial_slider
  $('.test_img_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    asNavFor: '.test_text_slider'
  });

  $('.test_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    asNavFor: '.test_img_slider'
  });

  // team_slider
  $('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1200,
    asNavFor: '.test_img_slider',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


})

// menu_fix
var menu = $('.navbar').offset().top;
$(window).scroll(function () {
  var scroll = $(this).scrollTop();

  if (menu < scroll) {
    $('.navbar').addClass('menu_fix');
  } else {
    $('.navbar').removeClass('menu_fix');
  }
});

// bt_top
$('.bt_top').click(function () {
  $('html, body').animate({
    scrollTop: 0,
  }, 1500);
});

$(window).scroll(function () {
  var abc = $(this).scrollTop();

  if (abc > 200) {
    $('.bt_top').fadeIn();
  } else {
    $('.bt_top').fadeOut();
  }
});

// veno box-js
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'circle-fade'
});

// preeloader-js
$(window).load(function () {
  $('.pre_body').delay(300).fadeOut(300);
});

// srollspy-js
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 40
  }, 1000);
});

$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// wow js
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true // default
})
wow.init();