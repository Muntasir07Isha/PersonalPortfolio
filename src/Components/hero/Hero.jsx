import React from 'react'
import './hero.css'

import Lottie from 'lottie-react'
import homePage from '../../assets/homePage.json.json'

const Hero = () => {
  return (
    <div className='hero'>
    <div className='lottie-container'>
        <Lottie animationData = {homePage}/>
        </div>
        <h1><span> Hi,It's Muntasir Hossen,</span> Software Developer,</h1>
        <h3>Sydney,Australia</h3>
        <p> I am a recent graduate with a budding career in software development, Currently working as Junior Software Developer at HaemaGlobal Ltd. </p>
       
    </div>
  )
}

export default Hero