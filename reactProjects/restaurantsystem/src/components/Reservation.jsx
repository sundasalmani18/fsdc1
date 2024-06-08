
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export default function Reservation(){

  const initFormData = {
    name: "",
   email : "",
   dateTime:"",
   numOfPeople:"",
   request :""
}
const [formData, setFormData] = useState(initFormData)


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}


 const  bookTable =  async (e) => {
    e.preventDefault()
    try {
      let response = await fetch('http://localhost:8080/booktable',{
      method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
             body: JSON.stringify(formData)
        })
        if(!response.ok){
                  throw new Error('Error occurred')
               }

      let responseJson = await response.json();
      console.log(responseJson);
      setFormData(initFormData)
      alert(responseJson.Data.msg)
  } catch(error) {
      console.error(error);
  }


    // try {
    //     const fetchRes = await fetch('http://localhost:8080/booktable', {
    //         method: 'POST',
    //         headers: {
    //             'content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     if(!fetchRes.ok){
    //         throw new Error('Error occurred')
    //     }
    //     const data = await fetchRes.json()
    //     console.log('fetchRes', data)

    //     setFormData(initFormData)
    //     alert(data.Data.msg)
    // } catch (error) {
    //     console.error('error fetching the data', error)

    // }
}

    return(
  <>
  
  <div id="reservation">
    <div className="container section">
      <div className="row">
        <div className="col-md-6">
          <div className="reservation-video">
            <div className="btn-play">
            <FontAwesomeIcon icon={faCirclePlay} className=" fa-solid fa-5x"/>
              {/* <i className="fa-solid fa-circle-play fa-5x"></i> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 bg-dark">
          <div className="p-5">
            <h5 className="sectionheading ">Reservation</h5>
            <h1 className="text-white mb-2"> Book A Table Online</h1>
            <form action="" onSubmit={bookTable}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="name"
                     value={formData.name}
                     onChange={handleInputChange} id="" 
                     className="form-control"
                     
                     />
                    <label>Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="email" id="" 
                    value={formData.email}
                     onChange={handleInputChange}
                    className="form-control"/>
                    <label>Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" name="dateTime" id="" 
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="form-control"/>
                    <label>Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="number" name="numOfPeople" id="" 
                     value={formData.numOfPeople}
                     onChange={handleInputChange}
                    className="form-control"/>
                    <label># of people</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="text" name="request" id=""
                     value={formData.request}
                     onChange={handleInputChange}
                    className="form-control"/>
                    <label>Special Request</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <button type="submit" id="headbutton" className="py-3 w-100">Book Now</button>
                  </div>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </>

    );
}