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
    gsap.to(".parallax-blob", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-section",
      scrub: true,
      } 
    });
    gsap.to(".parallax-wave", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-section",
      scrub: true,
      }
    });
  // Motion Blobs Floating
    gsap.to("#motion-blob-1", { y: 20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#motion-blob-2", { y: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#motion-blob-3", { y: 25, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#motion-blob-4", { y: -25, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });

    // Parallax & Soft Scale Scroll Effects
    gsap.from("#mission-card", {
      scrollTrigger: { trigger: "#mission-card", start: "top 80%" },
      x: -100, opacity: 0, duration: 1.5, ease: "power3.out"
    });

    gsap.from("#mission-image img", {
      scrollTrigger: { trigger: "#mission-image", start: "top 85%" },
      scale: 0.95, y: 50, opacity: 0, duration: 1.5, ease: "power3.out"
    });

    gsap.from("#vision-card", {
      scrollTrigger: { trigger: "#vision-card", start: "top 80%" },
      x: 100, opacity: 0, duration: 1.5, ease: "power3.out"
    });

    gsap.from("#vision-image img", {
      scrollTrigger: { trigger: "#vision-image", start: "top 85%" },
      scale: 0.95, y: 50, opacity: 0, duration: 1.5, ease: "power3.out"
    });
    gsap.utils.toArray(".relative.mb-20").forEach((item, index) => {
    gsap.from(item as HTMLElement, {
      scrollTrigger: {
        trigger: item as HTMLElement,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      delay: index * 0.1
    });
  });
  gsap.from("#certifications-grid > div", {
    scrollTrigger: {
      trigger: "#certifications-grid",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out"
  });
  gsap.from(".cert-card", {
  scrollTrigger: {
    trigger: ".cert-card",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  });
});