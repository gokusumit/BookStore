import React from 'react'
import Home from './Home/Home'

import {Route, Routes,Navigate} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
  const [authUser,setAUthUser]=useAuth()
  console.log(authUser)
  return (
    <div>
   

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={ authUser?<Courses/> :<Navigate to="/signup"/> }/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Toaster />
    </div>
  )
}
 
export default App
