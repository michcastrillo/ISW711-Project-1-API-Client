import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const AppRouter = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default AppRouter