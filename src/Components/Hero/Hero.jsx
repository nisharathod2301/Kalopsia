import React from 'react'
import './Hero.css'
import k_icon from '../Assets/k_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero from '../Assets/hero.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>HOLIDAY SEASON</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Celebrate the magic of the Holiday Season through exceptional gifts, selected for you among the different universes of the House. A poetic and enchanting ode to the art of wonder, dreams and beauty of the moments that make the holidays.</p>
                    <img src={k_icon} alt="" />
                </div>
                <p><b><i>Collections</i></b></p>
                <p><b><i>For everyone</i></b></p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero