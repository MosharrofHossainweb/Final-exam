import React from 'react'
import './Common/LoginRegister.css'
import Register from './Component/Register/Register'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './Component/Login/Login'
import { ToastContainer, toast } from 'react-toastify';
import app from './firebase.config'

const App = () => {

  const myroute=createBrowserRouter(createRoutesFromElements(
    <Route>
       <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myroute}/>
      <ToastContainer />
    </>
  )
}

export default App
