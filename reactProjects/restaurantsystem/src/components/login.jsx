import { useNavigate } from "react-router-dom"


export default function Login(){
  const navigate =useNavigate();
    return (  
 <>
 <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex justify-content-center">
          <i className="fa-solid fa-user fa-2x m-2"></i>
          <h1 > Login Form </h1>
      </div>

        <form>
          <div className="form-group">
            <input type="email" classname="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="email"
              placeholder="Enter Email"/>
          </div>

          <div className="form-group">
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="password"
              placeholder="Enter Password"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="rempass"/>
            <label className="form-check-label" htmlFor="rempass">Remember password </label>
          </div>

            <div className="col-md-12 justify-content-center d-flex p-2">         
           <a href="" className="btn btn-primary btn-sm py-2 w-100 m-2">Submit</a>
           <a onClick={()=>navigate("/signup")}  className="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a>
          {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
        </div>


        </form>
      </div>
    </div>
  </div>

 </>
    );

}