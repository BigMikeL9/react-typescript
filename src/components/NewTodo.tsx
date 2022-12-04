import React, { useContext, useRef, useState } from "react";
import TodoContext from "../context/todoContext";
import NewTodoTypes from "../types/NewTodo.types";

const NewTodo = (props: NewTodoTypes) => {
  const [enteredValue, setEnteredValue] = useState("");

  const todoContextData = useContext(TodoContext);
  const { addTodo } = todoContextData;

  // specify which type of HTML element we are going to create this ref for, hence the '<>HTMLInputElement'
  //  📝 *ALL* DOM elements have concrete types built-in typescript which we can use to refer to them
  const inputRef = useRef<HTMLInputElement>(null);

  // --------
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  // --------
  const onFocusHandler = (event: React.FocusEvent) => {};

  // --------
  const onBlurHandler = (event: React.FocusEvent) => {};

  // --------
  // IMPORTANT: How to find event type quickly without much searching each time. 👇
  // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890218#questions/18072366
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) return;

    addTodo({ id: Date.now(), text: enteredValue });

    inputRef.current?.blur();

    setEnteredValue("");
  };

  // --------
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="text">Enter Todo text:</label>
      <input
        type="text"
        id="text"
        placeholder="Enter Todo Here"
        ref={inputRef}
        value={enteredValue}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
