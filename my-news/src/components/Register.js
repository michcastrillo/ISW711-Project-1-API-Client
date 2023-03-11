import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css'

const Register = () => {

  return (
    <div className='wrapper'>
        <h1>User Registration</h1>
        <p>----------------------------------------------------------------------</p>
        <input className="input_register" type="text"  placeholder="First Name" required/>
        <input className="input_register"  type="text" placeholder="Last Name" required/><br/>
        <input className="input_register" type="email" name="user_email" placeholder="Email Address" required/>
        <input className="input_register" type="password" placeholder="Password" required/><br/>
        <input className="addresses" type="text" placeholder="Address" required/><br/>
        <input className="addresses" type="text" placeholder="Address 2" required/><br/>
        <select id="country_select">
            <option>Country</option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Costa Rica</option>
            <option>Cuba</option>
            <option>Ecuador</option>
            <option>El Salvador</option>
            <option>Guayana Francesa</option>
            <option>Granada</option>
            <option>Guatemala</option>
            <option>Guayana</option>
            <option>Haití</option>
            <option>Honduras</option>
            <option>Jamaica</option>
            <option>México</option>
            <option>Nicaragua</option>
            <option>Paraguay</option>
            <option>Panamá</option>
            <option>Perú</option>
            <option>Puerto Rico</option>
            <option>República Dominicana</option>
            <option>Surinam</option>
            <option>Uruguay</option>
            <option>Venezuela</option>
        </select>
        <input className="input_register" type="text" placeholder="City"required/><br/>
        <input className="input_register" type="text" placeholder="Zip/Postal Code"  required/>
        <input className="input_register" type="text" placeholder="Phone Number" required/>
        <p>----------------------------------------------------------------------</p>    
        <button id="b_buscador">Sign up</button>
    </div>
  )
}

export default Register