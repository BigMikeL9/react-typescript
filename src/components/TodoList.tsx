import TodoItemProps from "../types/TodoItem";
import TodoListProps from "../types/TodoList";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListProps) => {
  console.log(props);

  return (
    <>
      {props.children}

      <ul>
        {props.todos.length !== 0 &&
          props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              onDeleteTodo={props.onDeleteTodo}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
