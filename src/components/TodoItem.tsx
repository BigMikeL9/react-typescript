import React, { useContext } from "react";
import TodoContext from "../context/todoContext";
import TodoItemTypes from "../types/TodoItem.types";

const TodoItem = (props: TodoItemTypes) => {
  const todoContextData = useContext(TodoContext);
  const { removeTodo } = todoContextData;

  // -------
  const clickHandler = () => {
    removeTodo(props.id);
  };

  // -------
  return (
    <li id={`${props.id}`}>
      <h2>{props.text}</h2>
      {/* <h3>Id: {props.id}</h3>
      <h4>Completed: {String(props.completed)}</h4> */}

      <button onClick={clickHandler}>Delete Todo</button>
    </li>
  );
};

export default TodoItem;
