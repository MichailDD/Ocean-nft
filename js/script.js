"use strict";

var burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    header = document.querySelector('.header'),
    body = document.querySelector('body'),
    headerIcons = document.querySelector('.header__icons'),
    menuList = document.querySelector('.menu__list'),
    accordionItem = document.querySelectorAll('.footer-top__item'),
    accordionList = document.querySelectorAll('.footer-top__list'),
    heroTop = document.querySelector('.hero__top'),
    partners = document.querySelector('.partners'),
    imageBlock = document.querySelector('.hero__right');
window.addEventListener('load', function () {
  if (burger) body.addEventListener('click', burgerToggle);

  function burgerToggle(e) {
    // alert("Click") // Для проверки вызова функции кликом
    if (e.target.closest('.burger')) {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      header.classList.toggle('active');
    } else if (!e.target.closest('.burger')) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      header.classList.remove('active');
    }
  }

  window.addEventListener('resize', moveToMenu);

  if (window.innerWidth <= 768) {
    moveToMenu();
  }

  function moveToMenu() {
    if (window.innerWidth <= 768) {
      headerIcons.style.display = 'flex';
      var newLi = document.createElement('li');
      newLi.append(headerIcons);
      menuList.append(newLi);
      window.removeEventListener('resize', moveToMenu);
    }
  }

  if (accordionItem) body.addEventListener('click', accordionToggle);

  function accordionToggle(e) {
    if (e.target.closest('.footer-top__item')) {
      if (e.target.closest('.footer-top__item').classList.contains('active')) {
        e.target.closest('.footer-top__item').classList.remove('active');
        e.target.closest('.footer-top__line').nextElementSibling.style.height = null;
      } else if (e.target.closest('.footer-top__item')) {
        accordionItem.forEach(function (el) {
          el.classList.remove('active');
        });
        accordionList.forEach(function (el) {
          el.style.height = null;
        });
        e.target.closest('.footer-top__item').classList.toggle('active');
        e.target.closest('.footer-top__line').nextElementSibling.style.height = e.target.closest('.footer-top__line').nextElementSibling.scrollHeight + 'px';
      }
    }
  }

  if (window.innerWidth <= 1200) {
    moveToHero();
  }

  window.addEventListener('resize', moveToHero);

  function moveToHero() {
    if (window.innerWidth <= 1200) {
      heroTop.append(partners);
      heroTop.append(imageBlock);
    }
  }

  var swiperTop = new Swiper('.swiper-top', {
    speed: 500,
    loop: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    breakpoints: {
      1450: {
        slidesPerView: 3,
        spaceBetween: 45
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 45
      },
      1000: {
        slidesPerView: 2.1,
        spaceBetween: 45
      },
      765: {
        slidesPerView: 1.5,
        spaceBetween: 45
      },
      630: {
        slidesPerView: 1.3,
        spaceBetween: 25
      },
      320: {
        slidesPerView: 1.14,
        spaceBetween: 25
      }
    }
  });
  var btnsTop = [document.querySelector('.top__button'), document.querySelector('.top__angle-button')];
  btnsTop.forEach(function (el) {
    el.addEventListener('click', function () {
      console.log('clicked');
      swiperTop.slideNext(500, false);
    });
  });
  var swiperCollections = new Swiper('.swiper-collections', {
    speed: 500,
    loop: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    breakpoints: {
      1450: {
        slidesPerView: 3,
        spaceBetween: 45
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 45
      },
      1000: {
        slidesPerView: 2.1,
        spaceBetween: 45
      },
      765: {
        slidesPerView: 1.5,
        spaceBetween: 45
      },
      630: {
        slidesPerView: 1.3,
        spaceBetween: 25
      },
      320: {
        slidesPerView: 1.14,
        spaceBetween: 25
      }
    }
  });
  var btnsCollections = [document.querySelector('.collections__button'), document.querySelector('.collections__angle-button')];
  btnsCollections.forEach(function (el) {
    el.addEventListener('click', function () {
      console.log('clicked');
      swiperCollections.slideNext(500, false);
    });
  }); // Sellers

  var sellersFix = Array.from(document.querySelectorAll('.sellers__fix')),
      sellersPosition = Array.from(document.querySelectorAll('.sellers__position'));

  if (window.innerWidth <= 1000) {
    changeNumbers();
  }

  window.addEventListener('resize', changeNumbers);

  function changeNumbers() {
    if (window.innerWidth <= 1000) {
      sellersFix.forEach(function (el, i) {
        var orders = {};
        orders[i] = window.getComputedStyle(el).order;
        sellersPosition.forEach(function (elem, index) {
          if (i == index) {
            elem.innerHTML = +orders[i];
          }
        });
      });
    }
  }

  if (window.innerWidth <= 1000) {
    var sellersSlide = Array.from(document.querySelectorAll('.sellers__slide'));
    var orders = {};

    for (var i = 0; i < sellersFix.length; i++) {
      orders[i] = window.getComputedStyle(sellersFix[i]).order;
    }

    sellersFix.forEach(function (el, i) {
      if (+orders[i] < 5) {
        sellersSlide[0].append(el);
      } else if (+orders[i] < 9) {
        sellersSlide[1].append(el);
      } else if (+orders[i] < 13) {
        sellersSlide[2].append(el);
      }
    });
    var swiperSellers = new Swiper('.swiper-sellers', {
      speed: 500,
      loop: true,
      simulateTouch: true,
      slideToClickedSlide: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25
        }
      }
    });
    var sellersBtn = document.querySelector('.sellers__angle-button');
    sellersBtn.addEventListener('click', function () {
      console.log('clicked');
      swiperSellers.slideNext(500, false);
    });
  } //Video


  var videoBtn = document.querySelector('.what__button'),
      popup = document.querySelector('.popup');
  body.addEventListener('click', playVideo);

  function playVideo(e) {
    if (e.target.closest('.what__button')) {
      popup.classList.add('active');
      body.classList.add('lock');
    } else if (!e.target.closest('.popup__body')) {
      popup.classList.remove('active');
      body.classList.remove('lock');
    }
  } //header opacity


  window.addEventListener('scroll', function () {
    if (window.pageYOffset > parseInt(window.getComputedStyle(header).height.match(/[-0-9.]+(?=px)/))) {
      // if (window.pageYOffset > 100) {
      header.style.opacity = '0.05';
    } else if (window.pageYOffset < parseInt(window.getComputedStyle(header).height.match(/[-0-9.]+(?=px)/))) {
      header.style.opacity = '1';
    }
  });
  header.addEventListener('mouseover', function () {
    header.style.opacity = '1';
  });
  header.addEventListener('mouseout', function () {
    header.style.opacity = '0.05';
  });
});