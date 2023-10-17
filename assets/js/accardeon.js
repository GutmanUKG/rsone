"use strict";
document.addEventListener("DOMContentLoaded", () => {
  class Accardeon {
    constructor({
      items = undefined,
      toggleBtn = undefined,
      activeClass = "active",
      triggerAction = "click",
    }) {
      (this.items = items),
        (this.toggleBtn = toggleBtn),
        (this.activeClass = activeClass),
        (this.triggerAction = triggerAction);
    }
    init() {
      this.items != "" && this.items != undefined
        ? true
        : console.error(new Error("Не передан список элементов"));
      this.toggleBtn != "" && this.toggleBtn != undefined
        ? true
        : console.error(new Error("Не передан класс триггер кнопки"));
      this.items.forEach((element) => {
        let btn = element.querySelector(this.toggleBtn);
        btn.addEventListener(this.triggerAction, (e) => {
          e.preventDefault();
          element.classList.toggle(this.activeClass);
        });
      });
    }
  }

  try {
    const prodAccardeon = new Accardeon({
      items: document.querySelectorAll(".item--accardeon"),
      toggleBtn: ".link",
      activeClass: "item--accardeon--active",
    });
    prodAccardeon.init();
  } catch (e) {}
});
