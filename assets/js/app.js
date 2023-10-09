"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  //Все для появления всплывашок на проектах
  try {
    const mainProjectsWrapper = document.querySelector(".projects"),
      mainProjectsItems =
        mainProjectsWrapper.querySelectorAll(".projects-item"),
      projectFrameDiv = document.querySelector("#projects-frame"),
      video = document.createElement("video");
    let isShow = false;
    let videoList = [];
    let imgList = [];
    mainProjectsItems.forEach((item, idx) => {
      if (item.dataset.type == "video") {
        let obj = {
          id: idx,
          url: item.dataset.content,
        };
        videoList.push(obj);
      }
      if (item.dataset.type == "img") {
        let obj = {
          id: idx,
          url: item.dataset.content,
        };
        imgList.push(obj);
      }
      item.addEventListener("mouseenter", (event) => {
        if (item.dataset.content) {
          isShow = true;
          if (isShow) {
            projectFrameDiv.classList.add("frame-animate");
          }
          if (item.dataset.type == "video") {
            projectFrameDiv.style.cssText += `background: none`;
            video.src = videoList[idx].url;
            video.autoplay = true;
            if (!projectFrameDiv.querySelector("video")) {
              projectFrameDiv.appendChild(video);
            }
          }
          if (item.dataset.type == "img") {
            if (projectFrameDiv.querySelector("video")) {
              let v = projectFrameDiv.querySelector("video");
              v.remove();
            }
            imgList.forEach((item) => {
              if (item.id == idx) {
                let path = item.url;
                projectFrameDiv.style.cssText += `background: url('${path}')center/contain;
                          `;
              }
            });
          }
        }
      });
      item.addEventListener("mouseleave", (event) => {
        isShow = false;
        if (isShow == false) {
          projectFrameDiv.classList.remove("frame-animate");
        }
      });
      mainProjectsWrapper.addEventListener("mousemove", (event) => {
        const x = event.pageX; // получаем координату X мыши
        const y = event.pageY; // получаем координату Y мыши
        body.style.cssText += `--mouse-x: ${x}px ; --mouse-y: ${y}px`;
        projectFrameDiv.style.cssText += `left: ${x + 40}px;top: ${y - 40}px`;
      });
    });
  } catch (e) {}

  //*****************************************************

  function clearClass(items, classActive) {
    let len = items.length;
    for (let i = 0; i < len; i++) {
      items[i].classList.remove(classActive);
    }
  }
  //Слайдеры на главной
  $(".slider-image").owlCarousel({
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
  $(".slider-text").owlCarousel({
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
  let sliderText = $(".slider-text"),
    sliderImg = $(".slider-image");
  sliderText.on("next.owl.carousel", () => {
    sliderImg.trigger("next.owl.carousel");
  });

  sliderText.on("prev.owl.carousel", () => {
    sliderImg.trigger("prev.owl.carousel", [300]);
  });

  $(".btn-next-multy").click(function () {
    sliderText.trigger("next.owl.carousel");
    $(".btn-prev-multy").addClass("active");
  });
  $(".btn-prev-multy").click(function () {
    sliderText.trigger("prev.owl.carousel", [300]);
  });
  //*****************************************************
  //Акардеон на главной
  const accardionList = document.querySelector(".tabs-list"),
    accardionItem = accardionList.querySelectorAll(".tabs-item");

  accardionItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("tabs-item--active");
    });
  });
  //*****************************************************

  //********************** О нас */
});
