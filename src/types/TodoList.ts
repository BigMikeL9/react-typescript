import TodoItemProps from "../types/TodoItem";

interface TodoListProps {
  todos: TodoItemProps[];
  onDeleteTodo: Function;
  children?: React.ReactNode;
}

export default TodoListProps;
