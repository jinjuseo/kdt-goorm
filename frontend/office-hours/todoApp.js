const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [{ id: "sfdfs", text: "운동하기", complete: false }];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
  //새로운 아이템 객체 생성.
  const item = {
    id: crypto.randomUUID(), //random id 값 부여
    text: "",
    complete: false,
  };

  //배열에 처음에 새로운 아이템을 추가
  todos.unshift(item);

  //요소 생성하기
  const { itemEl, inputEl, editBtnEl, removeBtnEl } = createTodoElement(item);

  //리스트 요소 안에 방금 생성한 아이템 요소 추가
  list.prepend(itemEl);

  //disabled 속성 제거
  inputEl.removeAttribute("disabled");

  //focus
  inputEl.focus();
  saveToLocalStorage();
}

function createTodoElement(item) {
  const itemEl = document.createElement("div");
  itemEl.className.add("item");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add("complete");
  }

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = item.text;
  inputEl.setAttribute("disabled", "");

  const actionsEl = document.createElement("div");
  actionsEl.className.add("actions");

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("material-icons");
  editBtnEl.innerText = "edit";

  const removeBtnEl = document.createElement("button");
  removeBtnEl.classList.add("material-icons");
  removeBtnEl.innerText = "remove_circle";

  checkboxEl.addEventListener("change", () => {
    item.complete = checkboxEl.checked;
    if (item.complete) {
      itemEl.classList.add("complete");
    } else {
      itemEl.classList.remove("complete");
    }
    saveToLocalStorage();
  });

  inputEl.addEventListener("input", () => {
    item.text = inputEl.value;
  });

  inputEl.addEventListener("blur", () => {
    inputEl.setAttribute("disabled", "");
    saveToLocalStorage();
  });

  editBtnEl.addEventListener("click", () => {
    inputEl.removeAttribute("disabled");
    inputEl.focus();
  });

  removeBtnEl.addEventListener("click", () => {
    //데이터 변경
    todos = todos.filter((t) => t.id !== item.id);

    //요소 삭제
    itemEl.remove();

    saveToLocalStorage();
  });

  actionsEl.append(editBtnEl);
  actionsEl.append(removeBtnEl);

  itemEl.append(checkboxEl);
  itemEl.append(inputEl);
  itemEl.append(actionsEl);

  return {
    itemEl,
    inputEl,
    editBtnEl,
    removeBtnEl,
  };
}

function saveToLocalStorage() {
  const data = JSON.stringify(todos);

  localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("my_todos");

  if (data) {
    todos = JSON.parse(data);
  }
}

function displayTodos() {
  loadFromLocalStorage();

  todos.forEach((todo) => {
    const itemEl = createTodoElement(todo);
    list.append(itemEl);
  });
}

displayTodos();
