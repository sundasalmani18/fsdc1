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
      setName("");
      setEmail("");
      setPhone("");
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
    <div className="container m-5">
      <h2>Add User Data</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPhone">Phone No</label>
          <input
            type="number"
            class="form-control"
            id=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
