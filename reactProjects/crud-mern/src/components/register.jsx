import { useState } from "react";
import axios from 'axios'

export default function Register(){

const initFormData={

  name :"",
  email:"",
  password:"",
  phone:"",
  address:""
}

const [formData,setFormData]=useState(initFormData);

const handleChange=(e)=>{
const {name,value}= e.target;
setFormData({...formData,
  [name]:value
})
}

const registerHandle = async (e)=>{

    e.preventDefault()
    try {
        const fetchRes = await fetch ('http://localhost:8000/auth/register',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        if(!fetchRes.ok){
            throw new Error('Error occurred')
        }
        const data = await fetchRes.json()
        console.log('fetchRes', data)
    
        setFormData(initFormData)
        alert(data.Data.msg)
        // navigate("/admin/items");
    } catch (error) {
        console.error('error fetching the data', error)
        alert ("data already exists")
    
    }
    }

    return(
         <>
         <h1>hello Registeration</h1>

         <section class="vh-100" style={{backgroundColor:" #eee;"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form  onSubmit={registerHandle} class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text" 
                      id="form3Example1c"
                       class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c"
                      onChange={handleChange}
                      name="name"
                      value={formData.name} 
                      class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password"
                       id="form3Example4c" 
                       onChange={handleChange}
                       name="password"
                       value={formData.password}
                       class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="number" 
                      id="form3Example4cd" 
                      onChange={handleChange}
                      name="phone"
                      value={formData.phone}
                      class="form-control" />
                      <label class="form-label" for="form3Example4cd">Phone number</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="address"
                      onChange={handleChange}
                      name="address"
                      value={formData.address} 
                      id="form3Example4cd"
                       class="form-control" />
                      <label class="form-label" for="form3Example4cd">Address </label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

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