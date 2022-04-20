const wave = document.querySelector("#wave");
const circle = document.querySelector("#circle");

const circlePath1 =
  "M1920.64 0.190063H0.263916V326.151C0.263916 326.151 332.214 877.926 969.032 516.176C1605.85 154.426 1920.64 516.176 1920.64 516.176V0.190063Z";

const shape2 =
  "M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z";
const shape3 =
  "M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz";

let tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1 },
});

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.to("#wave", 0.8, {
  scrollTrigger: {
    trigger: "#wave",
    start: "-500px center",
  },
  attr: { d: shape2 },
  ease: Power2.easeIn,
});

gsap.to("#wave", 0.8, {
  scrollTrigger: {
    trigger: "#wave",
    start: "-450px center",
  },
  attr: { d: shape3 },
  ease: Power2.easeOut,
  fill: "#F5F9FF",
});

gsap.to(circle, 0.8, {
  scrollTrigger: {
    trigger: "#circle",
    start: "top center",
  },
  attr: { d: circlePath1 },
  ease: Power2.easeOut,
  fill: "#F5F9FF",
});

// ANIMATION MARKET INSTRUMENTS

// gsap.to(".img", {
//   scrollTrigger: {
//     trigger: ".mg",
//     start: "150px center",
//     toggleActions: "play pause resume none",
//   },
//   stagger: 0.4,
//   scale: 1,
//   "clip-path": "circle(50.5% at 50% 50%)",
//   opacity: 1,
//   delay: 0.5,
//   duration: 1.8,
// });

// SECTION ANIMATION
gsap.to(".phone-left,.phone-right", {
  scrollTrigger: {
    trigger: ".phone-left",
    start: "-100px center",
    toggleActions: "play pause resume none",
  },

  stagger: 0.4,
  duration: 1,
  translateY: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  delay: 0,
});

gsap.to(".copy-trading-heading,.copy-trading-desc", {
  scrollTrigger: {
    trigger: ".copy-trading-heading",
    start: "-90px center",
    toggleActions: "play pause resume none",
  },
  stagger: 0.6,
  opacity: 1,
  duration: 1.3,
  y: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".copy-btn", {
  scrollTrigger: {
    trigger: ".copy-trading-heading",
    start: "-100px center",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.5,
});

gsap.to(".research-img", {
  scrollTrigger: {
    trigger: ".research-img",
    start: "-100px center",
    toggleActions: "play pause resume none",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".research-heading,.research-desc", {
  scrollTrigger: {
    trigger: ".research-heading",
    start: "-50px center",
    toggleActions: "play pause resume none",
  },
  stagger: 0.6,
  opacity: 1,
  duration: 1.3,
  y: 0,
  top: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".research-btn", {
  scrollTrigger: {
    trigger: ".research-btn",
    start: "-80px center",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.5,
});

gsap.to(".support-section-img ", {
  scrollTrigger: {
    trigger: ".support-section-img ",
    start: "-70px center",
    toggleActions: "play pause resume none",
  },
  y: 0,
  opacity: 1,
  duration: 1.2,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(CSSRulePlugin.getRule(".support-section .icon-user-plus::after"), {
  scrollTrigger: {
    trigger: ".icon-user-plus",
    start: "120px center",
    toggleActions: "play pause resume none",
  },

  duration: 0.8,
  delay: 0.6,
  cssRule: {
    opacity: 1,
    scale: 1.1,
  },
});

gsap.to(".advantage__item", {
  scrollTrigger: {
    trigger: ".advantage__item",
    start: "top center",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".advantage__item", {
  scrollTrigger: {
    trigger: ".advantage__item",
    start: "top center",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".start-trading-item", {
  scrollTrigger: {
    trigger: ".start-trading-item",
    start: "top center",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".start-trading-header", {
  scrollTrigger: {
    trigger: ".start-trading-header",
    start: "-80px center",
    toggleActions: "play pause resume none",
  },

  duration: 1,
  y: 0,
  opacity: 1,
});
