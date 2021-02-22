new Swiper ('.about__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        '320': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '475': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '576': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 152,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 100,
        },
        '1200': {
            slidesPerView: 4,
            spaceBetween: 30,
        }
      }
});
new Swiper ('.clients__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        '320': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '475': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '576': {
            slidesPerView: 1,
            spaceBetween: 10,
        }
      }
});
