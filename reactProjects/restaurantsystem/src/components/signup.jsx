
export default function Signup(){
return (
  <>
   <div className="container py-5">
      <div className="row justify-content-center">
    <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="text-center">Sign-up Form </h1>

        <form>
          <div className="form-group">
           
            <input type="text" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="fname" aria-describedby="emailHelp" placeholder="Enter first name"/>
            
          </div>
          <div className="form-group">
           
            <input type="text" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="lname" placeholder="Enter Last name"/>
          </div>
          <div classname="form-group">
           
            <input type="email" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="email" placeholder="Enter Email"/>
          </div>
          <div classname="form-group">
          
            <input type="number" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="num" placeholder="Enter Number"/>
          </div>
          <div className="form-group">
           
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="password" placeholder="Enter Password"/>
          </div>
          <div className="form-group">
            
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="conpassword" placeholder="Enter conform Password"/>
          </div>

          
           
          <button type="submit" classname="btn btn-primary py-3 w-100">Submit</button>
        </form>
</div>
</div>
</div>
  
  
  </>
);

}