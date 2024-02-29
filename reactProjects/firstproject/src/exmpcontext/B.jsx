 import { useContext } from "react";
import {UserContext} from './A';

 export  default function B(){
    const user = useContext(UserContext);
    return (
        <>
          <h1>Hi my roll no  {user.rollno} from component B</h1>
          <h2>  </h2>
        </>
      );
}



// import C from './C'
// export  default function B({
//     name= "",
//     rollno=""
    
//     }){
//         return(
//             <>
//             <h1>Component B</h1>
//             <p>This is from component B {name}</p>
//             <C name= {name} rollno={rollno}/>
         
//             </>
//         );
    
//     }