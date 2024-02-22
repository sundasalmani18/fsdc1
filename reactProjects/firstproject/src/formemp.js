import { useState } from "react";

export default function Formemp(){
    let [inputs,setInputs] =useState({
        username:"",
        rollno:"",
        email: "",
        gender:""
    });

    let handleChange=(event)=>{
        let name =event.target.name;
        let value=event.target.value;
       setInputs(input=>({...input,[name]:value}))
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        document.write("Your Name is " +inputs.username + "your roll no is " +inputs.rollno +"your email is "  +inputs.email
        +"your gender is"  +inputs.gender
        
        )
    }
  

    return(
    <form onSubmit={handleSubmit}>
        <h1>Welcome To ABC School System</h1>
        <h3>Admission Form</h3>
    <label> Enter Your Name
        <input type="text" name="username" value={inputs.username} onChange={handleChange}/>
    </label><br/><br/>
    <label> Enter Your Roll no
        <input type="number" name="rollno"  value={inputs.rollno} onChange={handleChange}/>
    </label><br/><br/>
    <label> Enter Your Email
        <input type="email" name="email"  value={inputs.email} onChange={handleChange}/>
    </label><br/><br/>
    <div onChange={handleChange}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div><br/><br/>
    <input type="submit"/>
    </form>
    );
}