import TodoItemTypes from "./TodoItem.types";

// Dont need this since we are not passing any props to 'TodoList' after creating ContextAPI.
// Left it here for reference.
// All type definitions are optional, hence the '?'
interface TodoListTypes {
  todos?: TodoItemTypes[];
  onRemoveTodo?: (todoId: number) => void;
  children?: React.ReactNode;
}

export default TodoListTypes;
