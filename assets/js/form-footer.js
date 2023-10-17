"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const formFooter = document.querySelector(".form-footer"),
    inputs = formFooter.querySelectorAll('input[type="text"]');

  inputs.forEach((item) => {
    item.addEventListener("focus", () => {
      clearClass(inputs, "focused");
      item.parentNode.classList.add("focused");
    });
  });

  function clearClass(items, classActive) {
    for (let i = 0; i < items.length; i++) {
      items[i].value.length <= 0
        ? items[i].parentNode.classList.remove(classActive)
        : true;
    }
  }
});
