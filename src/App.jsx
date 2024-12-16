import './App.css'
import Login from './Authentication/Login/Login'
import Registration from './Authentication/Register/Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Hotel from './Pages/Hotels/Hotel'
import HotelDetails from './Pages/HotelDetails/HotelDetails'
import Contact from './Pages/Contact/Contact'
import { ToastContainer } from 'react-toastify';
import Admin from './Pages/Admin/Admin'
import { useSelector } from 'react-redux'


function App() {

  const data = useSelector(state=> state.register.theme)


  return (
    <>
      <div className={data ? "drak" : "light"}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/hotel' element={<Hotel />} />
            <Route path='/hotel/:id' element={<HotelDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
            <Route path="*" element={<h1 style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>404 Page Not Found</h1>} />
          </Routes>
          <ToastContainer position="top-center" autoClose={1500} hideProgressBar />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
