document.addEventListener("DOMContentLoaded", () => {
  class ToggleClass {
    constructor({
      btn,
      listener = "click",
      element,
      btnClose,
      classActive,
      isOveraly = true,
    }) {
      this.btn = document.querySelector(btn);
      this.listener = listener;
      this.element = document.querySelector(element);
      this.btnClose = btnClose;
      this.classActive = classActive;
      this.isOveraly = isOveraly;
    }
    init() {
      let btnCloseElement = this.element.querySelector(this.btnClose);
      let overlay = document.querySelector(".overlay");
      this.btn.addEventListener(this.listener, (e) => {
        e.preventDefault();
        this.element.classList.add(this.classActive);
        this.isOveraly ? overlay.classList.add("active") : false;
        document.body.style.overflow = "hidden";
      });
      btnCloseElement.addEventListener(this.listener, (e) => {
        e.preventDefault();
        this.element.classList.remove(this.classActive);
        this.isOveraly ? overlay.classList.remove("active") : false;
        document.body.style.overflow = "";
      });
    }
  }
  try {
    const mainForm = new ToggleClass({
      btn: "#btn-trigger_main_form",
      element: "#main_form",
      btnClose: ".close",
      classActive: "active",
    });
    mainForm.init();
  } catch (e) {}
});
