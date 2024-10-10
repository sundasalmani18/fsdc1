
import { createSlice } from "@reduxjs/toolkit";

const userauthSlice = createSlice({
       name: "usersauth",


 initialState :{
  user: null,
  error: null,
},
 reducers:{
    setUser:(state,action)=>{
        return { ...state, user: action.payload, error: null };
    },
    setError:(state,action)=>{
        return { ...state, error: action.payload };
    },
    logout:(state,action)=>{
        return { ...state, user: null };
    },
 },
});
export const { setUser, setError, logout } = userauthSlice.actions;

export default userauthSlice.reducer;
