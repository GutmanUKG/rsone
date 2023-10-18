document.addEventListener("DOMContentLoaded", () => {
  // Получение выделенного текста с помощью анонимной самовызывающейся функции.
  function get_text() {
    // Объявление переменной.
    let text;

    if (window.getSelection) {
      // Современный способ.
      text = window.getSelection().toString();
    } else if (document.getSelection) {
      // Старый способ.
      text = document.getSelection();
    } else if (document.selection) {
      // IE.
      text = document.selection.createRange().text;
    }

    // Вывод результата, если получен выделенный текст.
    if (text) {
      let utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.lang = "ru";
      speechSynthesis.speak(utterance);
      console.log(utterance);
    }
  }

  // Применять эту функцию к тегам, содержащим текстовую информацию.
  let p_arr = document.getElementsByTagName("p");
  let h2_arr = document.getElementsByTagName("h2");
  let span_arr = document.getElementsByTagName("span");
  let a_arr = document.getElementsByTagName("a");

  for (let i = 0; i < p_arr.length; i++) {
    p_arr[i].onmouseup = get_text;
    h2_arr[i].onmouseup = get_text;
    span_arr[i].onmouseup = get_text;
    a_arr[i].onmouseup = get_text;
  }
});
