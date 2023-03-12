import React from 'react';
import '../styles/newsEditing.css'
import Header from "./Header.js";
import Footer from "./Footer.js";

const NewsEditing = () => {


  return (
    <div class="container">
       <Header/>
        <h2>News source</h2>
        <p>-----------------------------------</p>
        <input type="text" placeholder="Name" required/><br/>
        <input type="text" placeholder="RSS URL" required/><br/>
        <select>
            <option>Category</option>
        </select>
        <p>-----------------------------------</p>    
        <button id="b_buscador">Save</button>
        <Footer/>
    </div>
  )
}

export default NewsEditing;