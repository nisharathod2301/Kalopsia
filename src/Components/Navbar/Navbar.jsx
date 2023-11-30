import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const[menu, setMenu]=useState("holiday");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Unable to load img" />
            <ul className='nav-menu'>
                <li onClick={()=>{(setMenu("shop"))}}><Link style={{textDecoration: 'none' ,color: '#000'}} to='/'>Holiday Collection</Link>{menu=="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{(setMenu("her"))}}><Link style={{textDecoration: 'none' ,color: '#000'}} to='/her'>Her's Only</Link>{menu=="her"?<hr/>:<></>}</li>
                <li onClick={()=>{(setMenu("Accessories"))}}><Link style={{textDecoration: 'none' ,color:'#000'}} to='/Accessories'>Accessories</Link>{menu=="Accessories"?<hr/>:<></>}</li>
                {/* <li onClick={()=>{(setMenu("fragnance"))}}><Link style={{textDecoration: 'none' ,color:'#000'}} to='/fragnance'>Fragnances</Link>{menu=="fragnance"?<hr/>:<></>}</li> */}
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Unable to load img" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar