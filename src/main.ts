import './style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
 
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
  
    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });

    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
      gsap.from(header, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
    const ctaText = document.querySelector("#cta-heading");
    if (ctaText) {
      const splitSub = new SplitText(ctaText, { type: "chars,words" });
      gsap.from(splitSub.chars, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.04,
        delay: 1
      });
    }
    //navbar shadow class toglle
    ScrollTrigger.create({
      start: 'top -10',
      end: 99999,
      toggleClass: {
        targets: '.nav-header',
        className: 'scrolled'
      }
    });

    const container = document.querySelector('section[aria-labelledby="testimonials-heading"] > div.flex.overflow-x-auto');
    const thumb = document.getElementById('scroll-thumb');
    if (!container || !thumb) return;

    function updateThumb() {
      if (!container || !thumb) return;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const ratio = clientWidth / scrollWidth;
      const thumbWidth = Math.max(ratio * 100, 10); // min 10%
      const left = (scrollLeft / (scrollWidth - clientWidth)) * (100 - thumbWidth);
      thumb.style.width = thumbWidth + '%';
      thumb.style.left = left + '%';
      thumb.style.position = 'absolute';
    }
    updateThumb();
    container.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);

    console.log('App started');
});