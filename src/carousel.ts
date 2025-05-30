import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination, Autoplay]); 

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  init:true,
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
  },
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


