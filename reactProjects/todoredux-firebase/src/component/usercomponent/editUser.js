import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../feature/action.js";

const UserEdit = ({ user, onClose }) => {
  const [name, setName] = useState(todo.text);
  const [email, setEmail] = useState(todo.text);
  const [phone, setPhone] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(editUser(todo.id, text));
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
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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

export default UserEdit;
