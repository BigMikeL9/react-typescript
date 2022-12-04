import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <>
      <NewTodo />

      <TodoList>------------ Your Added Todos ------------</TodoList>
    </>
  );
};

export default TodoPage;
