$(document).ready(function () {
  $(".account-carousel").owlCarousel({
    loop: false,
    dots: false,
    margin: 10,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left-short'></i>",
      "<i class='bi bi-arrow-right-short'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        nav: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        stagePadding: 50,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: "URLHash",
        dots: true,
      },
      320: {
        items: 1,
        nav: true,
        loop: false,
        dots: true,
      },
      575: {
        loop: true,
        items: 1,
        autoplay: true,
        nav: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        stagePadding: 50,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: "URLHash",
        dots: true,
      },
      768: {
        items: 1,
        dots: false,
        nav: true,
      },
      800: {
        items: 1,
        dots: false,
      },
      886: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1198: {
        items: 4,
      },
    },
  });
});
