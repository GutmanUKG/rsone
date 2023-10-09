document.addEventListener("DOMContentLoaded", () => {
  class BannerSlider {
    constructor({
      mainSlider,
      secondSlider,
      btnNext = undefined,
      btnPrev = undefined,
    }) {
      (this.mainSlider = mainSlider),
        (this.secondSlider = secondSlider),
        (this.btnNext = btnNext),
        (this.btnPrev = btnPrev);
    }
    init() {
      $(this.mainSlider).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          200: {
            items: 1,
          },
        },
      });
      //   $(`${this.secondSlider}`).owlCarousel({
      //     loop: true,
      //     margin: 10,
      //     nav: false,
      //     responsive: {
      //       200: {
      //         items: 1,
      //       },
      //     },
      //   });
    }
  }
  const aboutBanner = new BannerSlider({
    mainSlider: ".top_inner_slider-image",
    secondSlider: ".top_inner_slider-text",
  });
  aboutBanner.init();
});
