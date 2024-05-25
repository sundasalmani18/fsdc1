import { useState } from "react";


export default function Formvalidation () {
    const [username,setUsername] =useState();  
    const [email,setEmail] =useState();
    const [usererr, setUserError] = useState(false); 
    const [emailerror, setEmailError] = useState(false);


    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const handleUser=(e)=>{
  const username = e.target.value;
  if(username.length < 3){
  setUserError(true);
  }
  else{
    setUserError(false); 
  }
  setUsername(username)
}
      const handleEmail=(e)=>{
   const email=e.target.value;
    if(!regex.test(email)){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }
    setEmail(email)
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(e.target[0].value +" "+ e.target[1].value )
     const username = e.target[0].value;
  if(username.length < 3){
  setUserError(true);
  }
  else{
    setUserError(false); 
  }
  const email=e.target[1].value;
    if(!regex.test(email)){
      setEmailError(true);
    }
    else{
      setEmailError(false);
    }

  }

    return(
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" class="form-control m-2" placeholder="user_id" onChange={handleUser} value={username} />
        {usererr ? <span>username must be greater than 2 character</span> : "" }
        <input type="email" class="form-control m-2" placeholder="email" onChange={handleEmail} value={email}  />
        {emailerror ? <p>Invalid Email</p> : ""}
     
     <button type ="submit">Submit</button>
        
        
        </form>
        </div>
    );

}