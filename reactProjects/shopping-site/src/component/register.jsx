import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const initFormData = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    userType: "",
  };

  const [formData, setFormData] = useState(initFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const fetchRes = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!fetchRes.ok) {
        throw new Error("Error occurred");
      }
      const data = await fetchRes.json();
      console.log("fetchRes", data);

      setFormData(initFormData);
      alert(data.Data.msg);
      navigate("/");
    } catch (error) {
      console.error("error fetching the data", error);
      alert("data already exists");
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
            <h1 className="text-center">Sign-up Form </h1>

            <form onSubmit={registerUser}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="fname"
                  aria-describedby="emailHelp"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="lname"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                />
              </div>

              <div classname="form-group">
                <input
                  type="password"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="num"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
              </div>

              <div classname="form-group">
                <input
                  type="number"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="email"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="password"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group">
                <input
                  name="userType"
                  type="text"
                  className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
                  id="user"
                  value={formData.userType}
                  onChange={handleInputChange}
                  placeholder="Enter user type"
                />
              </div>

              <button type="submit" classname="btn btn-primary py-3 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
