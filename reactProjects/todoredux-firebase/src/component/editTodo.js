import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../feature/updateTodo.js";

const TodoEdit = ({ todo, onClose }) => {
  // console.log("edit user", user);
  const [text, setText] = useState(todo.text);
  // const [user, setuser] = useState(todo.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = { id: todo.id, text };

    //  dispatch(editUser(updateUsr));

    dispatch(editTodo(updated));
    console.log("update user", updated);
    onClose();
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
        <button type="button" onClick={() => onClose()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

//with redux only
// const TodoEdit = ({ todo, onClose }) => {
//   const [text, setText] = useState(todo.text);
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       dispatch(editTodo(todo.id, text));
//       onClose();
//     }
//   };

//   return (
//     <div className="todo-edit">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button type="submit">Update</button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

export default TodoEdit;
