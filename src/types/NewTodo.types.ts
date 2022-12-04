import TodoItemTypes from "./TodoItem.types";

// Dont need this since we are not passing any props to 'NewTodo' after creating ContextAPI.
// Left it here for reference
// All type definitions are optional, hence the '?'
interface NewTodoTypes {
  onAddTodo?: (todo: TodoItemTypes) => void;
}

export default NewTodoTypes;
