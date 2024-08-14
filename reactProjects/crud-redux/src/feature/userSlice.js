import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data/userdata";

export const userSlice = createSlice({
    name: 'un',
    initialState: userData,

    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const u_user = state.find(user => user.id == id)
            if (u_user) {
                u_user.name = name;
                u_user.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const u_user = state.find(user => user.id == id)
            if (u_user) {
                return state.filter(item => item.id !== id)
            }

        }


    }
});
export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer;