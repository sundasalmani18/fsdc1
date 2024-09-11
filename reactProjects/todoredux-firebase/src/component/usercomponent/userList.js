// UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUsers, deleteUser } from "../../feature/userthunks.js";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          {user.email}
          {user.phone}
          {/* <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button> */}

          <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
