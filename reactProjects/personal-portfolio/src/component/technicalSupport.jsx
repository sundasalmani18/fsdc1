import React, { useState } from 'react';
import axios from 'axios';

const TechnicalSupport = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sundusbk.vercel.app/supportsystem', formData);
      setStatus(response.data.message);
      alert("Support ticket submitted and email sent successfully")
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (

    <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex justify-content-center">
          <i className="fa-solid fa-user-tie fa-2x m-2"></i>
          <h1 >Welcome To Technical Support System </h1>
    
        </div><h4> How Can I Help You </h4>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="name" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name" />
          </div>


          <div className="form-group">
            <input type="email" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <input type="issue" className="form-control mt-4 shadow-none p-2 mb-3 bg-light rounded"
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Enter Issue" />
          </div>

        
        

          <div className="col-md-12 justify-content-center d-flex p-2">
            <button type="submit" className="btn btn-primary btn-sm py-2 w-100 m-2">Submit</button>
            
            {/* <a href="register.html" classname="btn btn-sm btn-primary p-2 m-2 w-100">Create an account</a> */}
          </div>


        </form>


       
      </div>
    </div>
  </div>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Name:
    //     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
    //   </label>
    //   <label>
    //     Email:
    //     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
    //   </label>
    //   <label>
    //     Issue:
    //     <textarea name="issue" value={formData.issue} onChange={handleChange} required />
    //   </label>
    //   <button type="submit">Send</button>
    //   <p>{status}</p>
    // </form>
  );
};

export default TechnicalSupport