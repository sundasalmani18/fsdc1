// src/components/AddTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../feature/userthunks.js";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() || email.trim() || phone.trim()) {
      const newUsr = { name, email, phone };
      console.log("new user", newUsr);
      dispatch(createUser(newUsr));
      setName("")
      setEmail("")
      setPhone("")
    }

    //   dispatch(createTodo({ text }));
    //   setText("");
    // }

    // const handleAddUser = () => {
    //   const newUser = { name: "New User", email: "newuser@example.com" };
    //   dispatch(addUser(newUser));
    // };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add name"
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Add email"
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Add phone no"
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
