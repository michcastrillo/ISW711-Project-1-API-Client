import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Categories from './Categories'
import CategoriesEditing from './CategoriesEditing'
import NewsEditing from './NewsEditing'
import NewsSources from './NewsSources'
import Home from './Home'
const AppRouter = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/categoriesEditing' element={<CategoriesEditing/>}/>
            <Route path='/newsEditing' element={<NewsEditing/>}/>
            <Route path='/newsSources' element={<NewsSources/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
       </BrowserRouter>

    </>
  )
}

export default AppRouter