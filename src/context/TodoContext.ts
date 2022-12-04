import React from "react";
import TodoItemTypes from "../types/TodoItem.types";

// ---------
interface TodoContextTypes {
  todos: TodoItemTypes[];
  addTodo: (todo: TodoItemTypes) => void;
  removeTodo: (todoId: number) => void;
}
// ---------

const TodoContext = React.createContext<TodoContextTypes>({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (todoId) => {},
});

export default TodoContext;
