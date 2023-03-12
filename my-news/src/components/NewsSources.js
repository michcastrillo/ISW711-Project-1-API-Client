import React from 'react';
import '../styles/newsSources.css'
import Header from "./Header.js";
import Footer from "./Footer.js";

const NewsSources = () => {


  return (
    <div class="container">
       <Header/>
      <h2>News Sources</h2>
      <table>
          <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Actions</th>
          </tr>
      </table>
      <button id="b_buscador">Add new</button>
      <Footer/>
    </div>
  )
}

export default NewsSources;