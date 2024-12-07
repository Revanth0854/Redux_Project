import { configureStore } from "@reduxjs/toolkit";
import SliceRegister from '../Slices/registerSlice'



export const store = configureStore({
    reducer:{
        register: SliceRegister
    }
})


