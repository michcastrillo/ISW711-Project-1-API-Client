import React from 'react';
import '../styles/categoriesEditing.css'
import Header from "./Header.js";
import Footer from "./Footer.js";

const CategoriesEditing = () => {


  return (
    <div class="container">
      <Header/>
      <h2>Categories</h2>
      <p>-----------------------------------</p>
      <input type="text" placeholder="Name" required/>
      <p>-----------------------------------</p>    
      <button id="b_buscador">Save</button>
      <Footer/>
    </div>
  )
}

export default CategoriesEditing;