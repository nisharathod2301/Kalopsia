import React from 'react'
import './Offers.css'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Iconic</h1>
            <p>Holiday season offers!</p>
            <p>A promise of joyful moments that will illuminate end-of-year festivities with an extra touch of magic.</p>
            <button>Discover</button>
        </div>
        <div className="offers-right">
        <img
          src="https://www.pngarts.com/files/9/Brown-Louis-Vuitton-Purse-PNG-High-Quality-Image.png"
          alt=""
          style={{ width: '300px', height: '300px' }}/>
        </div>
    </div>
  )
}

export default Offers