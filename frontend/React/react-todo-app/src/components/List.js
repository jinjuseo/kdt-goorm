import React, { useState } from "react";

const List = React.memo(
  ({
    key,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    onClickRemoveBtn,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const onClickCheckBox = (id) => {
      let newTodos = todoData.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setTodoData(newTodos);
      localStorage.setItem("todoData", JSON.stringify(newTodos));
    };
    // const onClickEditBtn = () => {};
    const onChangeInput = (e) => {
      setEditedTitle(e.target.value);
    };
    const onSubmit = (e) => {
      e.preventDefault();
      let newTodos = todoData.map((todo) => {
        if (todo.id === id) {
          todo.title = editedTitle;
        }
        return todo;
      });
      setTodoData(newTodos);
      localStorage.setItem("todoData", JSON.stringify(newTodos));
      setIsEditing(false);
    };
    if (isEditing) {
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-3 my-2 bg-gray-100 text-gray-600 border rounded`}
        >
          <div className="items-center">
            <form onSubmit={onSubmit}>
              <input
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                onChange={onChangeInput}
              />
            </form>
          </div>
          <div className="items-center">
            <button onClick={onSubmit}>save</button>
            <button
              className="ml-4 float-right"
              onClick={() => setIsEditing(false)}
            >
              X
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-3 my-2 text-gray-600 border rounded`}
        >
          <div className="items-center">
            <input
              className="mr-2"
              type="checkbox"
              defaultChecked={completed}
              onChange={() => onClickCheckBox(id)}
            />
            <span className={completed ? "line-through" : undefined}>
              {title}
            </span>
          </div>
          <div className="items-center">
            <button onClick={() => setIsEditing(true)}>edit</button>
            <button
              className="ml-4 float-right"
              onClick={() => onClickRemoveBtn(id)}
            >
              X
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
