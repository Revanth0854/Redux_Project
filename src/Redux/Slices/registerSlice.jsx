import { createSlice } from '@reduxjs/toolkit'
import data from "../../../../reduxServer/data.json"
// import axios from 'axios' 
// const getData = axios.get("https://redux-server-w0s1.onrender.com")


const initialState = {
    data: data,
    theme: false,
    login: null
}

const slice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerData: (state, action) => {
            state.data.users = [...state.data.users, action.payload]
        },
        dark: (state)=>{
            state.theme = !state.theme
        },
        setLogin:(state,action)=>{
            state.login = action.payload
        },
        logout:(state)=>{
            state.login = null
        }
    }
})



export default slice.reducer
export const { registerData, dark, setLogin, logout } = slice.actions
