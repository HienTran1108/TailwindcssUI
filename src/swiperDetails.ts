import { animationSlide } from "./gasp";


export const swiperDetails = () => {

    const defaultSetting = {
        loop: true,
        autoHeight: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        on: {
          init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
          slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
      }

    new Swiper(".listSwiper", {
        ...defaultSetting,
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });
    new Swiper(".mainSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

}