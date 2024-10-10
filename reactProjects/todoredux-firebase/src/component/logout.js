// LogoutButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../feature/authSlice';
import { auth } from '../config/firebase';
import setError  from '../feature/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout =async () => {
 
    try {
      await auth.signOut();
      dispatch(logout);
      alert("logout successful")
      navigate("/")
    }
    catch(error){
        dispatch(setError(error.message));

    }
   
  };

  return <button className="btn btn-primary" onClick={handleLogout}>Logout</button>;
};

export default Logout;
