import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { List } from "./";
const Lists = React.memo(({ todoData, setTodoData, onClickRemoveBtn }) => {
  const onDragEnd = (result) => {
    // console.log(result);

    //목격자가 없으면(이벤트 취소) 이함수를 종료
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newTodos = todoData;

    //1. 변경시키는 아이템을 배열에서 지워줌
    //2. return 값으로 지워진 아이템을 잡아줌
    const [reorderedTodo] = newTodos.splice(result.source.index, 1);

    // 원하는 자리에 reorderedTodo를 insert해줌
    newTodos.splice(result.destination.index, 0, reorderedTodo);
    setTodoData(newTodos);
    localStorage.setItem("todoData", JSON.stringify(newTodos));
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      onClickRemoveBtn={onClickRemoveBtn}
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      snapshot={snapshot}
                      provided={provided}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});
export default Lists;
