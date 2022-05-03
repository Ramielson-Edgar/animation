let tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 1 },
});

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.to(".advantage__section-header", {
  scrollTrigger: {
    trigger: ".advantage__section-header",
    toggleActions: "play pause resume none",
  },
  duration: 1,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".advantage__item", {
  scrollTrigger: {
    trigger: ".advantage__item",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".advantage__section-header", {
  scrollTrigger: {
    trigger: ".advantage__section-header",
    toggleActions: "play pause resume none",
  },
  duration: 1,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".platform-section-header", {
  scrollTrigger: {
    trigger: ".platform-section-header",
    toggleActions: "play pause resume none",
  },
  duration: 1,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".header-pips, .header-description, .platforms-allpips-logo", {
  scrollTrigger: {
    trigger: ".header-pips",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".purple-btn", {
  scrollTrigger: {
    trigger: ".header-description",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.1,
});

gsap.to(".pips-devices, .pips-glass-card", {
  scrollTrigger: {
    trigger: ".pips-devices",
    toggleActions: "play pause resume none",
  },
  stagger: 0.5,
  y: 0,
  delay: 1,
  opacity: 1,
  duration: 1.8,
  "clip-path": "polygon(0% 0%, 200% 0%, 200% 200%, 0% 200%)",
});

gsap.to(".header-mt4, .header-mt4-desc, .meta-trader-logo", {
  scrollTrigger: {
    trigger: ".header-mt4",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".platform-mt4-btn", {
  scrollTrigger: {
    trigger: ".platform-mt4-btn",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.1,
});

gsap.to(".mt4-platform-img, .mt4-glass-card", {
  scrollTrigger: {
    trigger: ".mt4-platform-img",
    toggleActions: "play pause resume none",
  },

  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 200% 0%, 200% 200%, 0% 200%)",
});

gsap.to(
  ".markets-header, .top__markets-heading, .top__markets-sub-description, .top__markets-description",
  {
    scrollTrigger: {
      trigger: ".top__markets-heading",
      toggleActions: "play pause resume none",
    },
    stagger: 0.6,
    duration: 1,
    y: 0,
    opacity: 1,
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.to(".top-market-btn", {
  scrollTrigger: {
    trigger: ".top-market-btn",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.1,
});

gsap.to(".img", {
  scrollTrigger: {
    trigger: ".img",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  scale: 1,
  "clip-path": "circle(80.50% at 50% 80%)",
  opacity: 1,
  delay: 0.5,
  duration: 1.8,
});

gsap.to(".copy-header, .copy-desc", {
  scrollTrigger: {
    trigger: ".copy-header",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  opacity: 1,
  duration: 1.3,
  y: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".copy-btn", {
  scrollTrigger: {
    trigger: ".copy-btn",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.1,
});

gsap.to(".phone-left, .phone-right", {
  scrollTrigger: {
    trigger: ".phone-left",
    toggleActions: "play pause resume none",
  },
  stagger: 0.6,
  duration: 2,
  translateY: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".markets__wrapper-item", {
  scrollTrigger: {
    trigger: ".markets__wrapper-item",
    toggleActions: "play pause resume none",
  },
  stagger: 0.6,
  opacity: 1,
  duration: 1.3,
  y: 0,
});

gsap.to(".research-img", {
  scrollTrigger: {
    trigger: ".research-img",
    toggleActions: "play pause resume none",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".research-header, .research-desc", {
  scrollTrigger: {
    trigger: ".research-header",
    toggleActions: "play pause resume none",
  },
  stagger: 0.6,
  opacity: 1,
  duration: 1.3,
  y: 0,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(".research-btn", {
  scrollTrigger: {
    trigger: ".research-btn",
    toggleActions: "play pause resume none",
  },
  top: 0,
  opacity: 1,
  duration: 1.1,
});

gsap.to(
  ".support-header, .support__section-heading, .support__section-description",
  {
    scrollTrigger: {
      trigger: ".support__section-heading",
      toggleActions: "play pause resume none",
    },
    stagger: 0.4,
    duration: 1.4,
    y: 0,
    opacity: 1,
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  }
);

gsap.to(".support-item", {
  scrollTrigger: {
    trigger: ".support-item",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".support-section-img", {
  scrollTrigger: {
    trigger: ".support-section-img",
    toggleActions: "play pause resume none",
  },
  y: 0,
  opacity: 1,
  duration: 1.2,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});

gsap.to(CSSRulePlugin.getRule(".support__section .icon-user-plus::after"), {
  scrollTrigger: {
    trigger: ".icon-user-plus",
    toggleActions: "play pause resume none",
  },
  duration: 0.8,
  delay: 0.6,
  cssRule: {
    opacity: 1,
    scale: 1.1,
  },
});

gsap.to(".start__trading-item", {
  scrollTrigger: {
    trigger: ".start__trading-item",
    toggleActions: "play pause resume none",
  },
  stagger: 0.4,
  duration: 1.4,
  y: 0,
  opacity: 1,
});

gsap.to(".start__trading-header", {
  scrollTrigger: {
    trigger: ".start__trading-header",
    toggleActions: "play pause resume none",
  },
  y: 0,
  duration: 1,
  opacity: 1,
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
});
