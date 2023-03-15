import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";
import user from "../images/user.png";
import email from "../images/email.jpg";
import password from "../images/password.png";


const userInicial = {
  email: "",
  password: ""
}

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(userInicial);
  const [error, setError] = useState('');

  const handleChangeInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  }


  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/auth/",{
      email: login.email,
      password: login.password
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.data.data.token);
      sessionStorage.setItem("loginToken", JSON.stringify(res.data.data.token));
      sessionStorage.setItem("userConect", JSON.stringify(res.data.data.user._id));
      navigate("/home");
    })
    .catch((err)=>{
      console.log(err.response.status)
      if(err.response.status === 404) setError('Sorry, no account was found with that information. Please check your credentials and try again.');
      else if (err.response.status === 403) setError('The email or password is incorrect. Please verify your information and try again.');
    })
  }

  const handleRegister = (e) => navigate("/register");

  return (
    <div className="wrapper">
      <div className="imgs">
        <div className="container-image">
          <img src={user} alt="user" className="profile" />
        </div>
      </div>
      <div>
        <form>
          <h1>User Login</h1>
          <img src={email} alt="email" className="email" />
          <input type="text" placeholder="Email Address" className="name" name="email" onChange={handleChangeInput} />
          <div className="second-input">
            <img src={password} alt="pass" className="email" />
            <input type="password" placeholder="Password" className="name" name="password" onChange={handleChangeInput}/>
          </div>
          {error && <div>{error}</div>}
          <button onClick={handleLogin}>Login</button>
        </form>
        <p>
          If you don't have an account, <a href="register" onClick={handleRegister}>sign up here.</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
