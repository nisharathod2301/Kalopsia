import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/k_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>THE HOUSE OF KALOPSIA</p>
        </div>
        <ul className="footer-links">
            <li>Legal Terms</li>
            <li>Ethics & compliace</li>
            <li>Kalopsia Sustainability</li>
            <li>Cookie Management</li>
            <li>Careers</li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer