import React, { useState } from "react";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";
import TodoItemProps from "../types/TodoItem";

const TodoPage = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const addTodoHandler = (todo: TodoItemProps) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const deleteTodoHandler = (todoId: number) => {
    setTodos((prevState) => prevState.filter((el) => el.id !== todoId));
  };

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />

      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler}>
        To test how to pass children with typescript type Annotation
      </TodoList>
    </>
  );
};

export default TodoPage;
