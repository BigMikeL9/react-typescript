interface TodoItemTypes {
  id: number;
  text: string;
  userId?: number;
  completed?: boolean;
}

export default TodoItemTypes;

// Not being used after using Context API 👇. Just here for reference.
export interface TodoItemProps extends TodoItemTypes {
  onDeleteTodo: (todoId: number) => void;
}
