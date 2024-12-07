import { createSlice } from '@reduxjs/toolkit'
import data from "../../../data.json"

const initialState = {
    data: data,
    theme: false
}






const slice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerData: (state, action) => {
            state.data.users = [...state.data.users, action.payload]
        },
        dark: (state,action)=>{
            state.theme = !state.theme
        }
    }
})



export default slice.reducer
export const { registerData, dark } = slice.actions