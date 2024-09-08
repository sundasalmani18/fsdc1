// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../feature/deleteTodo.js";
import { editTodo } from "../feature/updateTodo.js";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    const newText = prompt("Enter new text:", todo.text);
    if (newText) {
      dispatch(editTodo(todo.id, { text: newText }));
      // console.log("text", newText);
    }
  };

  return (
    <li>
      {todo.text}
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
