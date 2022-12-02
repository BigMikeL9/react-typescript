interface TodoItemTypes {
  id: number;
  text: string;
  userId?: number;
  completed?: boolean;
}

export default TodoItemTypes;

export interface TodoItemProps extends TodoItemTypes {
  onRemoveTodo: (todoId: number) => void;
}
