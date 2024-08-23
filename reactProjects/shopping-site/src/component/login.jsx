import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../context/authContext";

export default function Login() {
  const navigate = useNavigate();

  const initFormData = {
    email: "",
    password: "",
  };

  const { login, logout, currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState(initFormData);

  useEffect(() => {
    console.log(isUserlogin());
  }, []);

  const isUserlogin = () => {
    let validUser = false;
    if (Object.entries(currentUser).length > 0) {
      // console.log(currentUser)
      validUser = true;
    }

    return validUser;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/");
    alert("logout successful");
  };

  const loginUser = async (e) => {
    e.preventDefault();

    // console.log('formData', formData)

    try {
      await login(formData);
      alert("login successful");
      navigate("/");
    } catch (err) {
      console.log("ee", err);
    }
    // try {
    //   const fetchRes = await fetch('http://localhost:8080/login/user', {
    //     method: 'POST',
    //     headers: {
    //       'content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })

    //   if (!fetchRes.ok) {
    //     throw new Error('Error occurred')
    //   }
    //   const data = await fetchRes.json()
    //   console.log('fetchRes', data)

    //   setFormData(initFormData)
    //   alert(data.Data.msg)
    //   // navigate("/admin/items");
    // } catch (error) {
    //   console.error('error fetching the data', error)
    //   alert("data already exists")

    // }
  };

  if (isUserlogin()) {
    navigate("/");
    // return window.open('/', '_self')
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="d-flex justify-content-center">
              <i className="fa-solid fa-user-tie fa-2x m-2"></i>
              <h1>Admin Login Form </h1>
            </div>
            <form onSubmit={loginUser}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
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
                  Submit
                </button>
                <a
                  onClick={() => navigate("/signup")}
                  className="btn btn-sm btn-primary p-2 m-2 w-100"
                >
                  Create an account
                </a>
                {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
              </div>
            </form>

            <button
              onClick={userLogout}
              className="btn btn-primary btn-sm py-2 w-100 m-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
