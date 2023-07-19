$(function () {

  const hamburger = document.getElementById('menu__btn');
  const headerMenu = document.getElementById('menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');


  hamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('menu__list--active');
    hamburger.classList.toggle('menu__btn--open');
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('menu__list--active');
      hamburger.classList.remove('menu__btn--open');
    })
  });

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    hoverOnly: true,
  });

  $('.program__item-top').on('click', function () {
    $(this).next('.program__decor-content').slideToggle();
    $(this).children('.program__decor-arrow').toggleClass('program__decor-arrow--rotate');
  })

  $('.program__decor-content').hide();

  if ($(window).width() < 591) {
    // alert('Less than 1230'); 
    $('.team__gallery').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/team-gallery/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/team-gallery/arrow-right.svg" alt=""></button>',
      slidesToShow: 1,
      slidesToScroll: 1, 
      dots: true, 
      fade: true,     
      // autoplay: true,
    });
  }

  //  var elem = document.querySelector('.team__gallery');
  //  var msnry = new Masonry(elem, {
  //    // options 
  //    itemSelector: '.team__photo',
  //  });


});


