import TodoListTypes from "../types/TodoList.types";
import TodoItem from "./TodoItem";

const TodoList = (props: TodoListTypes) => {
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
              onRemoveTodo={props.onRemoveTodo}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
