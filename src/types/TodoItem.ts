interface TodoItemProps {
  id: string;
  text: string;
  userId?: number;
  completed?: boolean;
  onDeleteTodo: Function;
}

export default TodoItemProps;
