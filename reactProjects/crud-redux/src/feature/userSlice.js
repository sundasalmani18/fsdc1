import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data/userdata";


//with backend and redux 


export const userSlice = createSlice({
        name: 'un',
        initialState: {
            user:[]
        },
    
         reducers: {
            getUser :(state,action)=>{
                state.user=action.payload.map(user=>{
                    return {id:user.id,name:user.name,email:user.email}
                })

            },
            addUser:(state, action) => {
                state.user.push(action.payload)
                            
                        },
                        updateUser: (state, action) => {
                           const index=state.user.findIndex(x=>x.id === action.payload.id)
                           console.log("index",index)
                           state.user[index]={
                            id:action.payload.id,
                            name:action.payload.name,
                            email:action.payload.email
                           }
                        },
                        deleteUser: (state, action) => {
                           
                            
                
                        }
           
    
    
        }
    });
    export const { getUser,addUser,updateUser,deleteUser } = userSlice.actions
    export default userSlice.reducer;




//with redux 
// export const userSlice = createSlice({
//     name: 'un',
//     initialState: userData,

//     reducers: {
//         addUser: (state, action) => {
//             console.log(action)
//             state.push(action.payload)
//         },
//         updateUser: (state, action) => {
//             const { id, name, email } = action.payload;
//             const u_user = state.find(user => user.id == id)
//             if (u_user) {
//                 u_user.name = name;
//                 u_user.email = email;
//             }
//         },
//         deleteUser: (state, action) => {
//             const { id } = action.payload;
//             const u_user = state.find(user => user.id == id)
//             if (u_user) {
//                 return state.filter(item => item.id !== id)
//             }

//         }


//     }
// });
// export const { addUser, updateUser, deleteUser } = userSlice.actions
// export default userSlice.reducer;