import { useEffect, useState } from "react";

export default function Exmpusecontext() {
    //     conext provider a way to pass data through the
    //     component tree without having to pass props down 
    //     manually at every level 


    const [user, setUser] = useState([]);
    const [status, setStatus] = useState(false);

    const fetchURL = "https://jsonplaceholder.typicode.com/todos"


    useEffect(()=>{
        console.log('hello',status);
        if(status && user.length===0){  
            fetchData();
        }
    },[status])

    const fetchData = async () => {
        try {
            const response = await fetch(fetchURL);
            const jsonData = await response.json()
            setUser(jsonData);

        } catch (error) {
            console.log('error', error);
        }
    }

    let usersList = user.map((item, index) => (
        <div key={index}>
          <p>{item.id} {item.title} {item.completed}</p>
        </div>
      ))
    

    return (
        <>
            <button onClick={()=>setStatus(true)}>Call Api</button>
            {usersList}
        </>
    );



}








