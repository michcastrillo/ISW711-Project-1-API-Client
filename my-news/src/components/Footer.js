import React from 'react';
import '../styles/footer.css'
import Copyright from "../images/copyright.png";

const Footer = () => {


  return (
      <footer>
        <nav>
            <ul>
                <li><a href="" rel="noopener">My cover</a></li>
                <li>|</li>
                <li><a href="" rel="noopener">About</a></li>      
                <li>|</li>
                <li><a href="" rel="noopener">Help</a></li>     
            </ul>      
        </nav> 
        <img id="cr" src={Copyright} alt=""/>
        <p>My News Cover.net</p> 
    </footer>
  )
}

export default Footer;