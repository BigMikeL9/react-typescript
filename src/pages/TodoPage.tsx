import React, { useState } from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import TodoItemTypes from "../types/TodoItem.types";

const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItemTypes[]>([]);

  const addTodoHandler = (todo: TodoItemTypes) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevState) => prevState.filter((el) => el.id !== todoId));
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />

      <TodoList todos={todos} onRemoveTodo={removeTodoHandler}>
        ------------ Your Added Todos ------------
      </TodoList>
    </>
  );
};

export default TodoPage;
