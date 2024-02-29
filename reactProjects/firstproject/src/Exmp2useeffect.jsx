import { useEffect, useState } from "react";

export default function Exmpusecontext() {
    //     conext provider a way to pass data through the
    //     component tree without having to pass props down 
    //     manually at every level 
 
 const [count ,setCount]=useState(0);
 const [name ,setName]=useState("sundas");
    useEffect(()=>{
        console.log("Hello");
    },[name])
    const changeHandler=()=>{
        setName("aisha")
        setCount((count) => count + 1);
    }
    return(
        <>
  <p>{name} I m render {count} times</p>
    <button onClick={changeHandler}>Change Name</button>
    </>

    );

}