import './style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
 
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

    const subtitle = document.getElementById('heroSubtitle');
    if (subtitle && subtitle.textContent) {
      const words = subtitle.textContent.trim().split(' ');
      subtitle.innerHTML = words.map(word => `<span class="subtitle-word">${word}</span>`).join(" ");
      gsap.from('.subtitle-word', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5
      });
    }
    gsap.from(".hero-cta", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 2,
    ease: "power2.out"
    });

    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      gsap.from(".service-card", {
      opacity: 0,
      y: 40,
      duration: 2.5,
      delay:0.5,
      ease: "power2.out",
      stagger: 0.5,
      scrollTrigger:{
      trigger: "#services",
      start: "top 80%"
      }
      })
    }
    const ctatext = document.getElementById('ctatext');
    if (ctatext && ctatext.textContent) {
      const words = ctatext.textContent.trim().split(' ');
      ctatext.innerHTML = words.map(word => `<span class="cta-word">${word}</span>`).join(" ");
      gsap.from('.cta-word', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out",
      scrollTrigger:{
      trigger: "#booking",
      // The animation starts when the top of the #services element reaches 80% of the viewport height.
      start: "top 80%"
      },
      stagger: 0.1,
      delay: 0.5
      });
    }
    const ctasub = document.getElementById('ctasub');
    if (ctasub && ctasub.textContent) {
      const words = ctasub.textContent.trim().split(' ');
      ctasub.innerHTML = words.map(word => `<span class="cta-sub">${word}</span>`).join(" ");
      gsap.from('.cta-sub', {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out",
       scrollTrigger:{
      trigger: "#booking",
      start: "top 80%"
      },
      stagger: 0.1,
      delay: 1.7
      });
    }
    gsap.from('.cta-btn', {
      opacity: 0, 
      duration: 2, 
      delay: 2,    
      ease: "power2.in",
      scrollTrigger:{
        trigger: '#booking',
        start: 'top 80%'
      }
    });
    //navbar shadow class toglle
    ScrollTrigger.create({
      start: 'top -10',
      end: 99999,
      toggleClass: {
        targets: '.nav-header',
        className: 'scrolled'
      }
    });
    console.log('App started');
});