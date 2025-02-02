import React from 'react';
import "./Navbar.css";

import { Link } from 'react-router-dom';

import logo from "..//../assets/meditationLogo.png"
function Navbar() {
  return (
     <>
       <div className='navbar'>
            <div className='main-nav'>
                <div className='subNav1'>
                    <img src={logo} alt='' className='logo'/>
                    <h4>RM</h4>
                </div>
                <ul className='nav-items'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/articles"><li>Articles</li></Link>
                    <Link to="/classes"><li>Classes</li></Link>
                    <Link to="/benifites"><li>Benifites</li></Link>
                    <Link to="/shop"><li>Shop</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
                <button className='login'>Login</button>
            </div>
       </div>
     </>
  )
}

export default Navbar
