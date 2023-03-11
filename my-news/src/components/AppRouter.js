import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Categories from './Categories'
const AppRouter = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/categories' element={<Categories/>}/>
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default AppRouter