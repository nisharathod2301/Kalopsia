import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <p>NEWSLETTER</p>
      <p>Receive Kalopsia newsletters, personalized information on Kalopsia products and services, invitations to events and marketing surveys.</p>
    <div>
    <input type="email" placeholder='Email'/>
      <button>Confirm</button>
    </div>
    </div>

  )
}

export default NewsLetter