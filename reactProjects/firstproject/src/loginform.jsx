import { useRef } from "react";


export default function Login(){
    const emailRef=useRef();
    const passwordRef=useRef();


    function onSubmitm(e){
  e.preventDefault();
  console.log({email : emailRef.current.value, "password" :passwordRef.current.value});
    }
    return(
   <form onSubmit={onSubmitm}>
  <label>UserName</label>
<input type="email"  ref={emailRef} />

  <label>Password</label>
  <input type="password"  ref={passwordRef}/>
<button type="submit">Submit</button>
   </form>


    );
}