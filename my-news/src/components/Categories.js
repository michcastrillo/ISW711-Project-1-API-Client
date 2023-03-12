import React from 'react';
import '../styles/categories.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
const Categories = () => {


  return (
   
    <div className="container">
        <Header/>
        <h2>Categories</h2>
        <table>
            <tr>
              <th>Category</th>
              <th>Actions</th>
            </tr>
        </table>
        <button id="b_buscador">Add new</button>
        <Footer/>
    </div>

  )
}

export default Categories;