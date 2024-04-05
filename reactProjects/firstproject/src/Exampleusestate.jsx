import { useState } from "react";

 export default function Exampleusestate(){
    
    

    const [name,setName] =useState({
        name:"sundas",
        rollno: "18",
        batch:"12"
    });
 

    function Update(){
        setName(previous=>{
        return{...previous, name:"ali"}
    });
    }

    return(
        <>
     <h1>Hello</h1>
     <p>  {name.name}</p>
 <button onClick={Update}>Change name</button>
     </>
    );
    }
