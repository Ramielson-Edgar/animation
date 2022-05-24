document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 1 },
  });

  gsap.registerPlugin(CSSRulePlugin);
  gsap.registerPlugin(ScrollTrigger);

  gsap.config({ nullTargetWarn: false });

  gsap.to(".advantage__section-header", {
    scrollTrigger: {
      trigger: ".advantage__section-header",
      toggleActions: "play pause resume none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
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

  gsap.to(".platform-section-header", {
    scrollTrigger: {
      trigger: ".platform-section-header",
      start: "-110px center",
      markers: true,
      toggleActions: "play pause resume none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
  });

  gsap.to(".platforms-allpips", {
    scrollTrigger: {
      trigger: ".platforms-allpips",
      start: "-120px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.6,
    duration: 1.3,
    y: 0,
    opacity: 1,
  });

  gsap.to(".pips-devices, .pips-glass-card", {
    scrollTrigger: {
      trigger: ".pips-devices",
      start: "50px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.5,
    y: 0,
    opacity: 1,
    duration: 1.5,
  });

  gsap.to(".header-mt4, .header-mt4-desc, .meta-trader-logo", {
    scrollTrigger: {
      trigger: ".header-mt4",
      start: "-180px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.4,
    duration: 1.4,
    y: 0,
    opacity: 1,
  });

  gsap.to(".platform-mt4-btn", {
    scrollTrigger: {
      trigger: ".platform-mt4-btn",
      toggleActions: "play pause resume none",
    },
    top: 0,
    opacity: 1,
    duration: 1.5,
  });

  gsap.to(".mt4-platform-img, .mt4-glass-card", {
    scrollTrigger: {
      trigger: ".mt4-platform-img",
      start: "50px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.5,
    y: 0,
    opacity: 1,
    duration: 1.5,
  });

  gsap.to(".markets-header", {
    scrollTrigger: {
      trigger: ".markets-header",
      start: "-150px center",
      toggleActions: "play pause resume none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
  });

  gsap.to(".account__types-header", {
    scrollTrigger: {
      trigger: ".account__types-header",
      start: "-150px center",
      toggleActions: "play pause resume none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
  });

  gsap.to(".top__markets-heading", {
    scrollTrigger: {
      trigger: ".top__markets-heading",
      start: "-150px center",
      toggleActions: "play pause resume none",
    },
    duration: 1,
    y: 0,
    opacity: 1,
  });

  // gsap.to(
  //   ".top__markets-heading, .top__markets-sub-description, .top__markets-description",
  //   {
  //     scrollTrigger: {
  //       trigger: ".top__markets-heading",
  //       start: "-140px center",
  //       toggleActions: "play pause resume none",
  //     },
  //     stagger: 0.6,
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //   }
  // );

  // gsap.to(".top-market-btn", {
  //   scrollTrigger: {
  //     trigger: ".top__markets-sub-description",
  //     start: "-150px center",
  //     toggleActions: "play pause resume none",
  //   },
  //   top: 0,
  //   opacity: 1,
  //   duration: 1.5,
  // });

  gsap.to(".img-top-markets", {
    scrollTrigger: {
      trigger: ".img-top-markets",
      start: "60px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.4,
    "clip-path": "circle(80.50% at 50% 80%)",
    opacity: 1,
    duration: 1.4,
  });

  gsap.to(".copy-header, .copy-desc", {
    scrollTrigger: {
      trigger: ".copy-header",
      start: "-120px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.4,
    opacity: 1,
    duration: 1.3,
    y: 0,
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

  gsap.to(".markets__wrapper-item", {
    scrollTrigger: {
      trigger: ".markets__wrapper-item",
      start: "50px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.6,
    opacity: 1,
    duration: 1.3,
    y: 0,
  });

  gsap.to(".research-header, .research-desc, .research-img", {
    scrollTrigger: {
      trigger: ".research-header",
      start: "-130px center",
      toggleActions: "play pause resume none",
    },
    stagger: 0.5,
    opacity: 1,
    duration: 1.3,
    y: 0,
  });

  gsap.to(".research-btn", {
    scrollTrigger: {
      trigger: ".research-desc",
      start: "15px center",
      end: "10%",
      toggleActions: "play pause resume none",
    },
    top: 0,
    opacity: 1,
    duration: 1,
  });

  gsap.to(
    ".support-header, .support__section-heading, .support__section-description",
    {
      scrollTrigger: {
        trigger: ".support-header",
        start: "-140px center",
        toggleActions: "play pause resume none",
      },
      stagger: 0.3,
      duration: 1,
      y: 0,
      opacity: 1,
    }
  );

  gsap.to(".support-item", {
    scrollTrigger: {
      trigger: ".support-item",
      start: "-90px center",
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
      start: "-170px center",
      toggleActions: "play pause resume none",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
  });

  gsap.to(".research-img", {
    scrollTrigger: {
      trigger: ".research-img",
      start: "-50px center",
      toggleActions: "play pause resume none",
    },
    y: 0,
    opacity: 1,
    duration: 1.2,
  });

  gsap.to(CSSRulePlugin.getRule(".support__section .icon-user-plus::after"), {
    scrollTrigger: {
      trigger: ".icon-user-plus",
      start: "-80px center",

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
      start: "-50px center",
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
  });
});
