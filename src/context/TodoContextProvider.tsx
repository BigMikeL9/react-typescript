import React, { useState } from "react";
import TodoItemTypes from "../types/TodoItem.types";
import TodoContext from "./todoContext";

// ---------
interface TodoContextProviderTypes {
  children: React.ReactNode;
}
// ---------

const TodoContextProvider = (props: TodoContextProviderTypes) => {
  const [todos, setTodos] = useState<TodoItemTypes[] | []>([]);

  const addTodoHandler = (todo: TodoItemTypes) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevState) => prevState.filter((el) => el.id !== todoId));
  };

  const todoContextValue = {
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  console.log(todoContextValue);

  return (
    <TodoContext.Provider value={todoContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
