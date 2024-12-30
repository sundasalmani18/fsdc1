import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', { username, password });
      // const token = response.data.token;
      // const user = response; 
      const { token, user } = response.data
      //  console.log("user",user)
      // Save the token and complete user data in localStorage
      localStorage.setItem('token', token);  // Store the token
      localStorage.setItem('userId', user.id);  // Store the user ID
      localStorage.setItem('username', user.username);  // Store the username

      setToken(token);
      alert('login successful')

      // Redirect based on user role
      if (user.role === 'admin') {
        console.log(user.role, "user role")
        navigate('/admin');  // Navigate to the admin page if user is an admin
      } else {
        navigate('/user');   // Navigate to the user page if user is not an admin
      }


    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
          <div className="d-flex justify-content-center">
            <i className="fa-solid fa-user-tie fa-2x m-2"></i>
            <h1 >Sign-In  </h1>

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





            <div className="col-md-12 justify-content-center d-flex p-2">
              <button type="submit" className="btn btn-primary btn-sm py-2 w-100 m-2">Submit</button>

              {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
            </div>


          </form>



        </div>
      </div>
    </div>
  );
};

export default Login;
