// src/components/AddTodo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../feature/createTodo.js";

const AddTodo = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log("user-todo", users);
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("text", text);
    // console.log("user", user);
    if (text.trim()) {
      dispatch(createTodo({ text, user }));
      alert("Todo add successfully");
      setText("");
    }
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="container ">
      <div className="col-md-8 m-4">
        <h2>Add Todos</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id=""
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Todo"
            />
          </div>
          <select id="" value={user} onChange={handleChange} className="m-4">
            <label>Select a state</label>
            {users.length > 0 &&
              users.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>
          <br></br>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

{
  /* <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a New todo"
      />
     
      <button type="submit">Add</button>
    </form> */
}

export default AddTodo;
