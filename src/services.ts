import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", ()=> {
    const heroHeader = document.querySelector(".hero-header")
    if ( heroHeader && heroHeader.textContent) {
      const words = heroHeader.textContent.trim().split(' ');
      heroHeader.innerHTML = words.map(word => `<span class="header-word">${word}</span>`).join(" ");
      gsap.from('.header-word', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5
      });
    }

    const heroSub = document.querySelector(".hero-sub")
    if ( heroSub && heroSub.textContent) {
      const words = heroSub.textContent.trim().split(' ');
      heroSub.innerHTML = words.map(word => `<span class="sub-word">${word}</span>`).join(" ");
      gsap.from('.sub-word', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5
      });
    }
    const carousel = document.getElementById('carousel');
    if (carousel) {
      const totalWidth = carousel.scrollWidth / 2;

      gsap.to(carousel, {
        x: -totalWidth,
        duration: 30,            
        ease: "none",              
        repeat: -1,                
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth) // wrap around x position
        }
      }); 
    }
    
});
window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".services > div", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });
});