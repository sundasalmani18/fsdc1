// src/Signup.js
import React, { useState } from 'react';
import { auth } from '../config/firebase.jsx';
import { useDispatch,useSelector } from 'react-redux';
import { setUser, setError } from '../feature/authSlice.js';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      alert ("signup successful")
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <>
       <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex justify-content-center">
          <i className="fa-solid fa-user-tie fa-2x m-2"></i>
          <h1>Admin Register Form </h1>
        </div>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="email"
              className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="password"
              name="password"
              value={password}
             placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <div className="col-md-12 justify-content-center d-flex p-2">
            <button
              type="submit"
              className="btn btn-primary btn-sm py-2 w-100 m-2"
            >
              Register
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {/* <a
              // onClick={() => navigate("/signup")}
              className="btn btn-sm btn-primary p-2 m-2 w-100"
            >
              Create an account
            </a> */}
            {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
          </div>
        </form>
{/* 
        <button
          onClick={userLogout}
          className="btn btn-primary btn-sm py-2 w-100 m-2"
        >
          Logout
        </button> */}
      </div>
    </div>
  </div>
    </>
    // <form onSubmit={handleSignup}>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     required
    //   />
    //   <button type="submit">Signup</button>
    // </form>
  );
};

export default Signup;
