import React from "react";
import { useState, useCallback } from "react";
import "./App.css";
import { Lists, Form } from "./components";
//클래스형 컴포넌트

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];
export default function App() {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    //form 안에 Input을 전송할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    //원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData((prev) => [...prev, newTodo]);
    setInputValue("");
    // console.log(todoData);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    //JSON.stringify(todoData); 가 아닌이유?
    // console.log(JSON.parse(localStorage.getItem("todoData")));
    // console.log(todoData);
  };

  const onClickRemoveBtn = useCallback(
    (id) => {
      let newTodos = todoData.filter((todo) => todo.id !== id);
      setTodoData(newTodos);

      localStorage.setItem("todoData", JSON.stringify(newTodos));
    },
    [todoData]
  );
  const onClickRemoveAllBtn = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <buttton onClick={onClickRemoveAllBtn} className="cursor-pointer">
            전체 삭제
          </buttton>
        </div>
        <Lists
          onClickRemoveBtn={onClickRemoveBtn}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
