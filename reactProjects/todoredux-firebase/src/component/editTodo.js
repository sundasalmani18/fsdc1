import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../feature/updateTodo.js";
import { setUser } from "../feature/userSlice.js";

const TodoEdit = ({ todo, onClose }) => {
  const { users } = useSelector((state) => state.users);
  console.log("edit user", todo);
  const [text, setText] = useState(todo.text);
  const [user, setUser] = useState(todo.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = { id: todo.id, text, user };

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

        <select
          id=""
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="m-4"
        >
          <label>Select a state</label>
          {users.length > 0 &&
            users.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>

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
