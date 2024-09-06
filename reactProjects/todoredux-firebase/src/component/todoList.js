import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "../feature/action.js";
import TodoEdit from "./editTodo.js";
import { useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [editingTodo, setEditingTodo] = useState(null);

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
  };

  const handleCloseEdit = () => {
    setEditingTodo(null);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingTodo && <TodoEdit todo={editingTodo} onClose={handleCloseEdit} />}
    </div>
  );
};

export default TodoList;
