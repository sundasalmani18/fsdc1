// LogoutButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../feature/authSlice';
import { auth } from '../../config/firebase';
import setError  from '../../feature/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout =async () => {
 
    try {
      await auth.signOut();
      dispatch(logout);
      alert("logout successful")
    }
    catch(error){
        dispatch(setError(error.message));

    }
   
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
