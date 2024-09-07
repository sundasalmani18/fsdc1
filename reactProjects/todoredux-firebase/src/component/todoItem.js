// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "../feature/deleteTodo.js";
import { updateTodoItem } from "../feature/updateTodo.js";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoItem(todo.id));
  };

  const handleUpdate = () => {
    const newText = prompt("Enter new text:", todo.text);
    if (newText) {
      dispatch(updateTodoItem(todo.id, { text: newText }));
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
