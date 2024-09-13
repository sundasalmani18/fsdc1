// src/components/TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../feature/deleteTodo.js";
import { editTodo } from "../feature/updateTodo.js";

const TodoItem = ({ todo }) => {
  // console.log("TodoItem", todo);
  const dispatch = useDispatch();

  return (
    <div>
      <tr></tr>
    </div>
  );
};

export default TodoItem;
