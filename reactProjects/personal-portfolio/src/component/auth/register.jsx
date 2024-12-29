import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/register', { username, password,role });
      
      alert('User registered successfully');
      setUsername('');
      setPassword('');
      setRole('');
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (

<>


    <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex justify-content-center">
          <i className="fa-solid fa-user-tie fa-2x m-2"></i>
          <h1 >Registeration </h1>
    
        </div>
      
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="username" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} required 
              placeholder="Enter Username" />
          </div>


          <div className="form-group">
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter Password" />
          </div>

          <div className="form-group">
            <input type="issue" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)} 
              required 
              placeholder="Enter Role" />
          </div>

        
        

          <div className="col-md-12 justify-content-center d-flex p-2">
            <button type="submit" className="btn btn-primary btn-sm py-2 w-100 m-2">Submit</button>
            
            {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
          </div>


        </form>


       
      </div>
    </div>
  </div>






    {/* <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password"value={password}  onChange={(e) => setPassword(e.target.value)} required />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
      <button type="submit">Register</button>
    </form> */}
    </>
  );
};

export default Register;
