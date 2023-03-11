import React from 'react';
import '../styles/login.css'
import user from '../images/user.png';
import email from '../images/email.jpg';
import password from '../images/password.png';
const Login = () => {


  return (
        <div className='wrapper'>
          <div className="imgs">
            <div className="container-image">
              <img src={user} alt="user" className="profile"/>
            </div>
          </div>
          <div>
            <h1>User Login</h1>
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="Email Address" className="name"/>         
            <div className="second-input">
              <img src={password} alt="pass" className="email"/>
              <input type="password" placeholder="Password" className="name"/>
            </div>
            <button>Login</button>
            <p>If you don't have an account, <a href="register">sign up here.</a></p>
          </div>
        </div>
  )
}

export default Login;