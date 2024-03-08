let val;
/*
val = document;

val = document.baseURI; //웹 페이지의 절대 URI 반환
val = document.head; //<head> 태그 반환

val = document.body; //<body> 태그 반환

val = document.forms; //<form> 태그 반환
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts;
val = document.scripts[2].getAttribute("src");
*/

const headerContainer = document.getElementById("header-container");
//headerContainer.style.display = "none";

headerContainer.textContent = "TextContent";
headerContainer.innerText = "Inner Text";
headerContainer.innerHTML = "<span>Innter Html</span>";

const items = document.getElementsByClassName("list-group-item");
console.log(items);

items[0].style.color = "blue";
items[3].textContent = "Hi";

let lists = document.getElementsByTagName("li");
console.log(lists);

/*lists.forEach((list) => {
  console.log(list);
});
//* 콜렉션은 배열 순회 못함! (for Each)
*/

lists = Array.from(lists);
lists.forEach((list, index) => {
  list.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
//* selector로 배열 추출
liOdd.forEach((li) => {
  li.style.background = "gray";
});
console.log(lists);
