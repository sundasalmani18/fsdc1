// UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../feature/userthunks.js";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          {user.email}
          {user.phone}
          {/* <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
