import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/action.js";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
        })
      );
      setText("");
    }
  };

  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
