import { useState } from 'react';


export default function MyForm() {
  //inputs is varibale and setInputs is a function
    const [inputs, setInputs] = useState({
      username: "",
      age: ""
    });
  
    const handleChange = (event) => {
      
      const name = event.target.name;
      const value = event.target.value;
      console.log({name,value})
      setInputs(input => ({...input, [name] : value}))
      // setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Your name is " + inputs.username  + " Your age is " + inputs.age);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }