
import { useState } from "react";

export default function Signup(){

  const initFormData = {
    first_name: "",
    last_name: "",
    email:"",
    number:"",
    password: ""
}

const [formData, setFormData] = useState(initFormData)


const handleInputChange = (e) => {
const { name, value } = e.target;
setFormData({
    ...formData,
    [name]: value
})
}

const registerUser = async (e) => {
e.preventDefault()
try {
    const fetchRes = await fetch('http://localhost:8080/auth/register', {
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


return (
  <>
   <div className="container py-5">
      <div className="row justify-content-center">
    <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="text-center">Sign-up Form </h1>

        <form onSubmit={registerUser}>
          <div className="form-group"> 
            <input type="text" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
             id="fname" aria-describedby="emailHelp"
             name="first_name"
             value={formData.first_name}
             onChange={handleInputChange}
              placeholder="Enter first name"/> 
          </div>

          <div className="form-group">
            <input type="text" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
             id="lname" 
             name="last_name"
             value={formData.last_name}
             onChange={handleInputChange}
             placeholder="Enter Last name"/>
          </div>

          <div classname="form-group"> 
            <input type="number" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
             id="num"
             name="number"
             value={formData.number}
             onChange={handleInputChange}
             placeholder="Enter Number"/>
          </div>
          
          <div classname="form-group">     
            <input type="email" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"/>
          </div>

         
          <div className="form-group">   
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" 
            id="password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"/>
          </div>
          {/* <div className="form-group">  
            <input type="password" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded" 
            id="conpassword"
            value={formData.itemName}
            onChange={handleInputChange}
             placeholder="Enter conform Password"/>
          </div> */}

          
           
          <button type="submit" classname="btn btn-primary py-3 w-100">Submit</button>
        </form>
</div>
</div>
</div>
  
  
  </>
);

}