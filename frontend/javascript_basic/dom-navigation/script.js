let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

console.log("list", list);
console.log("listItem", listItem);

val = list.childNodes;
console.log(val);
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType;
/* //*NodeType
1 - Element
2 - Attr (deprecated)
3 - Text Node
8 - Commet Noe
9 - Document itsetlf
10 - Doctype
*/

//* children element node 반환
val = list.children; //HTML Collection 반환 (line break 포함x)
val = list.children[1];
list.children[1].textContent = "hi";

//* First child
val = list.firstChild;
//list.firstChild === list.childNodes[0];
val = list.lastChild;
//list.lastChild === list.childeNodes[list.childNodes.length-1];
//(line break 포함O)

val = list.firstElementChild;
val = list.lastElementChild;
//(line break 포함x(지금 예제에선 text ))

//* child 요소 count
val = list.childEelmentCount; //5

//* parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

//* next sibling 반환
val = listItem.nextSibling; //(line break 포함O)
val = listItem.nextElementSibling; //(line break 포함x)
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//* previous sibling 반환
val = listItem.previousSibling; //(line break 포함O)
val = listItem.previousElementSibling; //(line break 포함x)

/*for (let node of list.childNodes) {
  console.log(node);
}*/

console.log(Array.from(list.childNodes).filter);
