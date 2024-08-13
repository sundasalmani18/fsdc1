import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data/userdata";

export const userSlice = createSlice({
    name: 'un',
    initialState:userData,

    reducers: {
        addUser:(state ,action)=>{
            console.log(action)
        }


    }
});
export  const {addUser} =userSlice.actions
export default userSlice.reducer;