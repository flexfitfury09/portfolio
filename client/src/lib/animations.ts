import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Fade in sections on scroll
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax effect for particles
  gsap.to('.particle', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const animateTypingEffect = (element: HTMLElement, text: string) => {
  const tl = gsap.timeline();
  
  tl.to(element, {
    duration: 0.1,
    text: "",
    ease: "none"
  })
  .to(element, {
    duration: text.length * 0.1,
    text: text,
    ease: "none"
  });
  
  return tl;
};

export const animateSkillBars = () => {
  gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
    const width = bar.dataset.width;
    gsap.fromTo(bar, 
      { width: "0%" },
      {
        width: width + "%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 80%"
        }
      }
    );
  });
};

export const animate3DCard = (element: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out"
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};
