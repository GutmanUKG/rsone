document.addEventListener("DOMContentLoaded", () => {
  class BannerSlider {
    constructor({
      mainSlider = undefined,
      secondSlider = undefined,
      btnNext = undefined,
      btnPrev = undefined,
    }) {
      (this.mainSlider = mainSlider),
        (this.secondSlider = secondSlider),
        (this.btnNext = btnNext),
        (this.btnPrev = btnPrev);
    }
    init() {
      //Проверки на торопыгу
      this.mainSlider == undefined || this.mainSlider == ""
        ? console.error(new Error("Не передан основной слайдер"))
        : true;
      this.secondSlider == undefined || this.secondSlider == ""
        ? console.error(new Error("Не передан второй слайдер"))
        : true;
      this.btnNext == undefined ||
      this.btnNext == "" ||
      this.btnPrev == undefined ||
      this.btnPrev == ""
        ? console.error("Не переданный кнопки управления слайдером")
        : true;
      //Заводим первый слайдер
      $(this.mainSlider).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        mouseDrag: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
      //Заводим второй слайдер
      $(`${this.secondSlider}`).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        vertical: true,
        mouseDrag: false,
        animateIn: "bounceInUp",
        animateOut: "fadeOut",
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
      //Закидываем слайдеры в переменные и привязываемся к событиям переключения
      //Завязываем переключение на кастомные кнопки
      let mainSliderListener = $(this.mainSlider),
        secondSliderListener = $(this.secondSlider);

      mainSliderListener.on("next.owl.carousel", () => {
        secondSliderListener.trigger("next.owl.carousel");
      });
      mainSliderListener.on("prev.owl.carousel", () => {
        secondSliderListener.trigger("prev.owl.carousel", [300]);
      });
      //Завязываем переключение на кастомные кнопки
      $(this.btnNext).click(function () {
        secondSliderListener.trigger("next.owl.carousel");
        mainSliderListener.trigger("next.owl.carousel");
        $(this.btnPrev).addClass("active");
      });
      $(this.btnPrev).click(function () {
        secondSliderListener.trigger("prev.owl.carousel", [300]);
        mainSliderListener.trigger("prev.owl.carousel", [300]);
      });
    }
  }
  const aboutBanner = new BannerSlider({
    mainSlider: ".top_inner_slider_image",
    secondSlider: ".top_inner_slider-text",
    btnNext: ".btn-arr--next",
    btnPrev: ".btn-arr--prev",
  });
  try {
    aboutBanner.init();
  } catch (e) {}
  const sliderByMainPage = new BannerSlider({
    mainSlider: ".slider-image",
    secondSlider: ".slider-text",
    btnNext: ".btn-next-multy",
    btnPrev: ".btn-prev-multy",
  });
  try {
    sliderByMainPage.init();
  } catch (e) {}
  try {
    const footerInnerSlider = document.querySelector(".footer_inner_slider");
  } catch (e) {}
});
