import React, { useRef, useState } from "react";
import NewTodoProps from "../types/NewTodo";

const NewTodo = (props: NewTodoProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const inputRef = useRef();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const onFocusHandler = (event: React.FocusEvent) => {};

  const onBlurHandler = (event: React.FocusEvent) => {};

  // IMPORTANT: How to find event type quickly without much searching each time. 👇
  // https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25890218#questions/18072366
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredValue.length <= 0) return;

    props.onAddTodo({ id: Date.now(), text: enteredValue });

    inputRef.current.blur();

    setEnteredValue("");
  };

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
