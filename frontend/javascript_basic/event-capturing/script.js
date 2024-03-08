for (let element of document.querySelectorAll("*")) {
  //{capture:true } === true
  element.addEventListener(
    "click",
    (e) => alert(`캡처링 :${element.tagName}`),
    true
  );
  element.addEventListener("click", (e) => alert(`버블링 :${element.tagName}`));
}
