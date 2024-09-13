// with Redux firebase
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../feature/readTodo.js";
import TodoItem from "../component/todoItem.js";
import { deleteTodo } from "../feature/deleteTodo.js";
import TodoEdit from "./editTodo.js";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [editingTodos, setEditingTodos] = useState(null);

  // console.log("todos", todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleEditClick = (todo) => {
    setEditingTodos(todo);
  };

  const handleCloseEdit = () => {
    setEditingTodos(null);
  };

  // const handleUpdate = (todo) => {
  //   const newText = prompt("Enter new text:", todo.text);
  //   // console.log(newText);
  //   // console.log(todo);
  //   if (newText) {
  //     dispatch(editTodo({ id: todo.id, text: newText }));
  //     // console.log("text", newText);
  //   }
  // };

  return (
    <div className="container m-5">
      <h2>Todo List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">user</th>
            <th scope="col">text</th>
            <th scope="col">upadte</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>{todo.user}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
            // <TodoItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
      {editingTodos && (
        <TodoEdit todo={editingTodos} onClose={handleCloseEdit} />
      )}
    </div>
  );
};

export default TodoList;

//with redux only

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTodo, removeTodo } from "../feature/action.js";
// import TodoEdit from "./editTodo.js";
// import { useState } from "react";

// const TodoList = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todo.todos);

//   const [editingTodo, setEditingTodo] = useState(null);

//   const handleEditClick = (todo) => {
//     setEditingTodo(todo);
//   };

//   const handleCloseEdit = () => {
//     setEditingTodo(null);
//   };

//   return (
//     <div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               onClick={() => dispatch(toggleTodo(todo.id))}
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => dispatch(removeTodo(todo.id))}>
//               Delete
//             </button>
//             <button onClick={() => handleEditClick(todo)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//       {editingTodo && <TodoEdit todo={editingTodo} onClose={handleCloseEdit} />}
//     </div>
//   );
// };

// export default TodoList;
