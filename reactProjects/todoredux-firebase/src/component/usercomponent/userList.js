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
      <h2>User Data</h2>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row"> {user.name}</th>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {editingUser && (
          <UserEdit user={editingUser} onClose={handleCloseEdit} />
        )}
      </table>
      <ul>
        <li>
          {/* <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button> */}
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default UserList;
