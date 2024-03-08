const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

//event.target ===> 실제 이벤트가 시작된 '타깃' 요소
//this(event.currentTarget) ===> 핸들러가 할단된 요소
form.onclick = function (e) {
  e.target.style.backgroundColor = "yellow";

  setTimeout(() => {
    alert("target = " + e.target.tagName + ", this=" + this.tagName);
    e.target.style.backgroundColor = "";
  }, 0);
};
