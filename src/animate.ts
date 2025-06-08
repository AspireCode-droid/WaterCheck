import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", ()=> {
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

    const heroText = document.querySelector(".hero-animate");
    if (heroText) {
      const split = new SplitText(heroText, { type: "chars,words" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
        delay: 0.3
      });
    }
    const heroSubText = document.querySelector(".hero-sub-animate");
    if (heroSubText) {
      const splitSub = new SplitText(heroSubText, { type: "chars,words" });
      gsap.from(splitSub.chars, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.04,
        delay: 1
      });
    }
    const heroCta = document.querySelector(".hero-cta");
    if (heroCta) {
      gsap.from(heroCta, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2
      })
    };
    const whySection = document.querySelector(".why-aquacheck");
    if (whySection) {
      const headings = whySection.querySelectorAll<HTMLElement>("h2, h3");
      headings.forEach((heading, idx) => {
      const split = new SplitText(heading, { type: "chars,words" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 10,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
        delay: 0.2 * idx,
        scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        toggleActions: "play none none none",
        },
      });
      });
    }
    const whyCards = document.querySelectorAll<HTMLElement>(".why-card");
    whyCards.forEach((card, idx) => {
      gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.40 * idx,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      });
    });
    const serviceCards = document.querySelectorAll<HTMLElement>(".service-card");
    serviceCards.forEach((card, idx) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3 * idx,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
    const benefitCards = document.querySelectorAll<HTMLElement>(".benefit-card");
    benefitCards.forEach((card, idx) => {
      gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3 * idx,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      });
    });
    // Animate testimonial cards as they enter the viewport
    document.querySelectorAll<HTMLElement>('.testimonial-card').forEach((tcard, index) => {
      gsap.from(tcard, {
        scrollTrigger: {
          trigger: tcard,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
});



