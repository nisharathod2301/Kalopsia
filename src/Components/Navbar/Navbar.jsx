import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[menu, setMenu]=useState("holiday");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Unable to load img" />
            <ul className='nav-menu'>
                <li onClick={()=>{(setMenu("shop"))}}><Link style={{textDecoration: 'none' }} to='/'>Holiday Collection</Link>{menu=="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{(setMenu("him"))}}><Link style={{textDecoration: 'none' }} to='/him'>For Him</Link>{menu=="him"?<hr/>:<></>}</li>
                <li onClick={()=>{(setMenu("her"))}}><Link style={{textDecoration: 'none' }} to='/her'>For Her</Link>{menu=="her"?<hr/>:<></>}</li>
                <li onClick={()=>{(setMenu("fragnance"))}}><Link style={{textDecoration: 'none' }} to='/fragnance'>Fragnances</Link>{menu=="fragnance"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Unable to load img" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar