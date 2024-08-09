import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authcontext";
import { AuthContext } from "../context/authContext"



export default function Login() {
  const navigate = useNavigate();

  const initFormData = {
    email: "",
    password: ""
  };
  const { currentUser, login, logout } = useContext(AuthContext)
  const [formData, setFormData] = useState(initFormData)



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
    
      alert("login successful")
      console.log("login successful")

    }
    catch (err) {
      console.log(err)
    }
  }

  const userLogout = async (e) => {

    e.preventDefault()
    await logout()
    navigate('/')
  }

  return (
    <>

      <section class="vh-100" style={{ backgroundColor: "#9A616D;" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem;" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" class="img-fluid" style={{ borderRadius: " 1rem 0 0 1rem;" }} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleLogin}>

                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219;" }}></i>
                          <span class="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px;" }}>Sign into your account</h5>

                        <div data-mdb-input-init class="form-outline mb-4">
                          <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            id="form2Example17"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example17">Email address</label>
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                          <input type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            id="form2Example27"
                            class="form-control form-control-lg" />
                          <label class="form-label" for="form2Example27">Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>

                        <a class="small text-muted" href="#!">Forgot password?</a>
                        <p class="mb-5 pb-lg-2" style={{ color: "#393f81;" }}>Don't have an account? <button onClick={() => navigate("/register")}
                          style={{ color: "#393f81;" }}>Register here</button></p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}