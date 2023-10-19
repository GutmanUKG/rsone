"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // const formFooter = document.querySelector(".form-footer"),
  //   inputs = formFooter.querySelectorAll('input[type="text"]');

  // inputs.forEach((item) => {
  //   item.addEventListener("focus", () => {
  //     clearClass(inputs, "focused");
  //     item.parentNode.classList.add("focused");
  //   });
  // });

  // function clearClass(items, classActive) {
  //   for (let i = 0; i < items.length; i++) {
  //     items[i].value.length <= 0
  //       ? items[i].parentNode.classList.remove(classActive)
  //       : true;
  //   }
  // }

  class formAnimation {
    constructor({ form }) {
      this.form = form;
    }
    start() {
      const formWrapper = document.querySelector(this.form);
      const inputs = formWrapper.querySelectorAll('input[type="text"]');

      inputs.forEach((item) => {
        item.addEventListener("focus", () => {
          this.clearClass(inputs, "focused");
          item.parentNode.classList.add("focused");
        });
      });
    }
    clearClass(items, classActive) {
      for (let i = 0; i < items.length; i++) {
        items[i].value.length <= 0
          ? items[i].parentNode.classList.remove(classActive)
          : true;
      }
    }
  }

  try {
    const formFooter = new formAnimation({
      form: ".form-footer",
    });
    formFooter.start();
  } catch (e) {}
  try {
    const formMain = new formAnimation({
      form: ".form_main",
    });
    formMain.start();
  } catch (e) {}
});
