import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import data from "../../../../reduxServer/data.json"
import axios from 'axios'
const getData = fetch("https://redux-server-w0s1.onrender.com").then(res => res.json()).then(data1 => console.log(data1)).catch(err => console.log(err))


const initialState = {
    data: {
        users:[],
        admin:[]
    },
    theme: false,
    login: null,
    loading:false,
    error:null
}
export const fetchData = createAsyncThunk(
    'register/fetchData',
    async () => {
      const response = await axios.get('https://redux-server-w0s1.onrender.com');
      return response.data;
    }
  );
  
  const slice = createSlice({
    name: "register",
    initialState,
    reducers: {
      registerData: (state, action) => {
        state.data.users = [...state.data.users, action.payload];
      },
      dark: (state) => {
        state.theme = !state.theme;
      },
      setLogin: (state, action) => {
        state.login = action.payload;
        localStorage.setItem("login", JSON.stringify(action.payload));
      },
      logout: (state) => {
        state.login = null;
        localStorage.removeItem("login");
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    }
  });
  





export default slice.reducer
export const { registerData, dark, setLogin, logout } = slice.actions
