import { createContext, useState } from "react";
import B from './B'
import C from './C'

export const UserContext = createContext();

export default function A() {
    const [user, setUser] = useState({
        name: "sundas",
        rollno: "123"
    })

    return (
        <>
            <UserContext.Provider value={user} >
                <h1> Hi My name is  {user.name} From Component A</h1>
                <B />
                <C />
            </UserContext.Provider>
        </>

    );
}








// import B from './B';

// export default function A({
// name= "",
// rollno =""

// }){
//     return(
//         <>
//         <h1>Component A</h1>
//         <B name= {name} rollno={rollno}/>
//         </>
//     );

// }

