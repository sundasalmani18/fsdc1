import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../../feature/userthunks.js";

const UserEdit = ({ user, onClose }) => {
  // console.log("edit user", user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateUsr = { id: user.id, name, email, phone };

    //  dispatch(editUser(updateUsr));

    dispatch(editUser(updateUsr));
    console.log("update user", updateUsr);
    onClose();
  };

  return (
    <div className="todo-edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserEdit;
