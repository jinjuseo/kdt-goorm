window.onload = function () {
  //문서가 load 될 때 이 함수를 실행

  let text = document.getElementById("text");
  //아이디가 'text인 요소를 return

  text.innerText = "Html 문서 Lodaed";
};

const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a element click");
});

//event 객체
const buttonElement = document.querySelector(".btn2");
buttonElement.addEventListener("click", (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  // 윈도우로부터 거리 좌표
  val = event.clientY;

  // 요소로부터 거리 좌표
  val = event.offsetY;
  console.log(val);
});

//-----------------------------
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");
const title = document.querySelector("h2");

//EVENT TYPE

//CLICK EVENT
// submitBtn.addEventListener("click", handleEvent);
// submitBtn.addEventListener("dblclick", handleEvent);
// submitBtn.addEventListener("mouseup", handleEvent);
// submitBtn.addEventListener("mousedown", handleEvent);
// submitBtn.addEventListener("mouseenter", handleEvent);
// submitBtn.addEventListener("mouseleave", handleEvent);
// submitBtn.addEventListener("mousemove", handleEvent);

// function handleEvent(event) {
//   event.preventDefault();
//   console.log(`Event Type: ${event.type}`);
//   title.textContent = `MouseX: ${event.offsetX}, MouseY: ${event.offsetY}`;
// }

const emailInput = document.getElementById("email");

//FORM EVENT
//form.addEventListener("submit", handleSubmit);
// emailInput.addEventListener("keydown", handleEvent);
// emailInput.addEventListener("keyup", handleEvent);
// emailInput.addEventListener("keydpress", handleEvent);
// emailInput.addEventListener("focus", handleEvent);
// emailInput.addEventListener("blur", handleEvent);
// emailInput.addEventListener("cut", handleEvent);
// emailInput.addEventListener("paste", handleEvent);
emailInput.addEventListener("input", handleEvent);

function handleEvent(event) {
  if (event.type === "submit") {
    event.preventDefault();
  }

  console.log(`Event Type: ${event.type}`);
  title.textContent = event.target.value;
}
