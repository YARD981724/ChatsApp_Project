import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebase/Signup'
import Login from './Firebase/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Firebase/Home'
import ProfileUpdate from './Firebase/ProfileUpdate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import { AuthContext } from '../AuthContext'
// import { useContext } from 'react'
const Makhan = () => {

  // const {currentUser} = useContext(AuthContext)
  // console.log(currentUser);
  
  
  return (
    <div>
    <ToastContainer/>
           <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
   
    </div>
  );


}

export default Makhan
