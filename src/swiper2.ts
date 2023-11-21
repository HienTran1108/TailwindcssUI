import { animationSlide } from './gasp.ts';

interface BreakPoints { slidePer_xl: number; slidePer_lg: number; slidePer_md: number; slidePer_sm: number }

export const setupSwiper2 = (
  el: string,
  slide: number,
  paginate: boolean,
  autoDelay: number | false,
  brPoints: BreakPoints | false,
  loopSlide: boolean,
  thumbs: any | false,
  watchSlidesProgress: boolean,
  freeMode: boolean,
) => {
  const defaultSetting = {
    loop: loopSlide, //slidesPerView <= totalSlide/2
    // centeredSlides: true,
    autoHeight: false,
    speed: 500,
    navigation: {
      nextEl: `.btn-next-${el}`,
      prevEl: `.btn-prev-${el}`,
    },
    on: {
      init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
      slideChangeTransitionStart: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    },
    
  };
  const swiperMain = new Swiper(`.mySwiper-${el}`, {
    ...defaultSetting,
    slidesPerView: slide,
    pagination: paginate && {
      el: `.swiper-pagination`,
      type: 'bullets',
      clickable: true,
    },
    autoplay: autoDelay && {
      delay: autoDelay,
      disableOnInteraction: false
    },
    spaceBetween: 20,
    breakpoints: brPoints && {
      1280: {
        slidesPerView: brPoints.slidePer_xl,
      },
      1024: {
        slidesPerView: brPoints.slidePer_lg,
      },
      768: {
        slidesPerView: brPoints.slidePer_md,
      },
      640: {
        slidesPerView: brPoints.slidePer_sm,
      },
    },
    thumbs: thumbs && {
      swiper: thumbs
    }
  });
  return swiperMain;
};
