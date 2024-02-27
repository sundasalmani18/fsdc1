import { useState } from "react";

export default function UseStateexmp(){

    let[input ,setInput]=useState({
        username:'sundas'
    })

  let onChangehandler=(event)=>{
    let newname=event.target.name;
        let newval=event.target.value;
        setInput(inputs=>({...inputs,[newname]:newval}));
  }

    return(
        <div>   
            <h1>{input.username}</h1>
  <input
  type="text" value={input.username} name="username" placeholder="Enter name here" onChange={onChangehandler}
  />
  </div>
    );
}