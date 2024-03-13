

export default function Footer(){
  
    return(
        <>
{/* <!-- =======================================Footer======================================= --> */}
        <div id="footer">
        <div class="container-fluid bg-dark ">
          <div class="container py-5">
          <div class="row d-flex align-items-center ">
            <div class="col-md-3 ">
              <div class="companysection">
              <h4 class="sectionheading mb-4">Company</h4>
              <a class="btn btn-link" href="">About us</a>
              <a class="btn btn-link" href="">Contact us</a>
              <a class="btn btn-link" href="">Reservation</a>
              <a class="btn btn-link" href="">Privacy policy </a>
            
            </div>
            </div>
            <div class="col-md-3">
              <h4 class="sectionheading mb-4 ">Contact</h4>
              <p style={{color: "#fff"}}><i class="fa fa-map-marker-alt me-3"></i>
                123 Street, New York, USA</p>
                <p style={{color: "#fff"}}><i class="fa fa-phone-alt me-3"></i>
                  +012 345 67890</p>
                  <p style={{color: "#fff"}}><i class="fa fa-envelope me-3"></i>
                    info@example.com</p>
                    <div class="d-flex ">
                    <a href="" class=" btn btn-outline-light btn-social m-2">
                      <i class="fab fa-twitter"></i>
                    </a> 
                      <a href="" class=" btn btn-outline-light btn-social m-2">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="" class=" btn btn-outline-light btn-social m-2"> 
                         <i class="fab fa-youtube"></i>
                        </a>
                      <a href="" class=" btn btn-outline-light btn-social m-2">  
                        <i class="fab fa-linkedin-in"></i></a>
                        
                </div>
                  
            </div>
            <div class="col-md-3 ">
              <h4 class="sectionheading mb-4">Opening</h4>
             <h5 style={{color: "#fff"}}>Monday-Saturday</h5>
             <p style={{color: "#fff"}}>09AM-09PM</p>
             <h5 style={{color: "#fff"}}>Sunday</h5>
             <p style={{color: "#fff"}}>08AM-10PM</p>
              
            </div>
            <div class="col-md-3">
              <h4 class="sectionheading mb-4">newsletter</h4>
              <p style={{color: "#fff"}}>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div class="position-relative mx-auto" style={{maxWidth: "400px; "}}>
                <input  class="form-control  w-100 py-3 ps-4 pe-5" style={{borderColor: "#feaf39"}}  type="text" name="" id="" placeholder=" Your Email"/>
                <button type="button" class="btn btn-primary position-absolute py-2 top-0 end-0 mt-2 me-2">SIGNUP</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 d-flex" >
                <span style={{color: "#fff"}}>
               ©<a href=""style={{color: "#fff"}}>Your Site Name</a>
               ,All Rights Reserved. Designed By<a href="" style={{color: "#fff"}}>HTML Codex</a>
                <br/><br/>
                
           Distributed By <a href=""style={{color: "#fff"}}>ABC</a></span>
              </div>
              <div class="col-md-6">
                <div class="footermenu">
                  <a href="">Cookies</a>
                  <a href="">Home</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
    
            </div>
    
          </div>
        </div>
    
    
      </div>
      </div>
  {/* <!-- ================================= End Footer============================================ --> */}
  </>
    );
   
}