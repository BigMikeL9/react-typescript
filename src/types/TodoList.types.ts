import TodoItemTypes from "./TodoItem.types";

interface TodoListTypes {
  todos: TodoItemTypes[];
  onRemoveTodo: (todoId: number) => void;
  children?: React.ReactNode;
}

export default TodoListTypes;
