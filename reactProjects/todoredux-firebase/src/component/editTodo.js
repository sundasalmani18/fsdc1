import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../feature/action.js";

const TodoEdit = ({ todo, onClose }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(editTodo(todo.id, text));
      onClose();
    }
  };

  return (
    <div className="todo-edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TodoEdit;
