import React from 'react'
import { useState } from 'react';
import { auth } from '../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setError } from '../feature/authSlice';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


  // src/Login.js


const Login = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      alert("login successful")
      navigate("/dashboard")
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
          <h1>Admin Login Form </h1>
        </div>
        <form onSubmit={handleLogin}>
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

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rempass"
            />
            <label className="form-check-label" htmlFor="rempass">
              Remember password{" "}
            </label>
          </div>

          <div className="col-md-12 justify-content-center d-flex p-2">
            <button
              type="submit"
              className="btn btn-primary btn-sm py-2 w-100 m-2"
            >
              login
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <a
              onClick={() => navigate("/signup")}
              className="btn btn-sm btn-primary p-2 m-2 w-100"
            >
              Create an account
            </a>
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
  );
};

export default Login;

 

