import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/modules/navigation-element.css';
import 'swiper/modules/pagination-element.css';

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
};

new Swiper('.testimonial-swiper', swiperParams);


