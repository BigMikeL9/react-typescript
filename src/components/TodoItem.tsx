import React from "react";
import TodoItemProps from "../types/TodoItem";

const TodoItem = (props: TodoItemProps) => {
  const clickHandler = () => {
    props.onDeleteTodo(props.id);
  };

  return (
    <li id={props.id}>
      <h2>{props.text}</h2>
      {/* <h3>Id: {props.id}</h3>
      <h4>Completed: {String(props.completed)}</h4> */}

      <button onClick={clickHandler}>Delete Todo</button>
    </li>
  );
};

export default TodoItem;
