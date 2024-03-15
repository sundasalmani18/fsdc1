import { useNavigate } from "react-router-dom"


export default function Login(){
  const navigate =useNavigate();
    return (  
 <>
 <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div class="d-flex justify-content-center">
          <i class="fa-solid fa-user fa-2x m-2"></i>
          <h1 > Login Form </h1>
      </div>

        <form>
          <div class="form-group">
            <input type="email" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="email"
              placeholder="Enter Email"/>
          </div>

          <div class="form-group">
            <input type="password" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="password"
              placeholder="Enter Password"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="rempass"/>
            <label class="form-check-label" for="rempass">Remember password </label>
          </div>

            <div class="col-md-12 justify-content-center d-flex p-2">         
           <a href="" class="btn btn-primary btn-sm py-2 w-100 m-2">Submit</a>
           <a onClick={()=>navigate("/signup")}  class="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a>
          {/* <a href="register.html" class="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
        </div>


        </form>
      </div>
    </div>
  </div>

 </>
    );

}