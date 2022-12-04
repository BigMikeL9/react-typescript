import { useContext } from "react";
import TodoContext from "../context/todoContext";
import TodoListTypes from "../types/TodoList.types";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListTypes) => {
  const todoContextData = useContext(TodoContext);

  const { todos } = todoContextData;

  return (
    <>
      {props.children}

      <ul>
        {todos.length !== 0 &&
          todos.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
