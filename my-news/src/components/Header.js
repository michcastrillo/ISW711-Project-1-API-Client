import React from 'react';
import '../styles/header.css'
import tv from '../images/tv.png';

const Header = () => {


  return (
    <header>
            <nav>
                <ul>
                  <li><img src={tv} alt="tv" className="tv"/></li>
                    <li><h1 className='title_header'>My News Cover</h1></li>  
                    <li>
                        <select>
                            <option>Sign up</option>
                        </select>
                    </li>
                
                </ul>      
            </nav>       
    </header> 
  )
}

export default Header;