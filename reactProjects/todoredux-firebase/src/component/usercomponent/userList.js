// UserList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUsers, deleteUser } from "../../feature/userthunks.js";
import UserEdit from "./editUser.js";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  // console.log("users", users);

  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleCloseEdit = () => {
    setEditingUser(null);
  };

  // const handleUpdate = () => {
  //   const newText = prompt("Enter new text:", todo.text);
  //   // console.log(newText);
  //   // console.log(todo);
  //   if (newText) {
  //     dispatch(editUser({ id: user.id, text: newText }));
  //     // console.log("text", newText);
  //   }
  // };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            {user.email}
            {user.phone}
            {/* <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button> */}

            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
            <button onClick={() => handleEditClick(user)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingUser && <UserEdit user={editingUser} onClose={handleCloseEdit} />}
    </div>
  );
};

export default UserList;
