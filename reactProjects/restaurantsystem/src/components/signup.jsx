
export default function Signup(){
return (
  <>
   <div class="container py-5">
      <div class="row justify-content-center">
    <div class="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <h1 class="text-center">Sign-up Form </h1>

        <form>
          <div class="form-group">
           
            <input type="text" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="fname" aria-describedby="emailHelp" placeholder="Enter first name"/>
            
          </div>
          <div class="form-group">
           
            <input type="text" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="lname" placeholder="Enter Last name"/>
          </div>
          <div class="form-group">
           
            <input type="email" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="email" placeholder="Enter Email"/>
          </div>
          <div class="form-group">
          
            <input type="number" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="num" placeholder="Enter Number"/>
          </div>
          <div class="form-group">
           
            <input type="password" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="password" placeholder="Enter Password"/>
          </div>
          <div class="form-group">
            
            <input type="password" class="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" id="conpassword" placeholder="Enter conform Password"/>
          </div>

          
           
          <button type="submit" class="btn btn-primary py-3 w-100">Submit</button>
        </form>
</div>
</div>
</div>
  
  
  </>
);

}