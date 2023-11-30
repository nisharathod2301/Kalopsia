import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign up</h1>
          <div className="loginsignup-feilds">
            <input type="text"placeholder='Name' />
            <input type="email"placeholder='Email' />
            <input type="password"placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>I agree to terms and conditions</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup