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
      // The animation starts when the top of the #services element reaches 80% of the viewport height.
      start: "top 80%"
      }
      })
    }
    console.log('App started');
});