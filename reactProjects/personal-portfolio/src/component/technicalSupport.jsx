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
      const response = await axios.post('http://localhost:8080/supportsystem', formData);
      setStatus(response.data.message);
      alert("issues sumitted wait for response")
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Issue:
        <textarea name="issue" value={formData.issue} onChange={handleChange} required />
      </label>
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
};

export default TechnicalSupport