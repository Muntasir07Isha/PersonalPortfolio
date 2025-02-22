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
        <h1><span>Hi, I'm Muntasir Hossen,</span> Software Developer</h1>
<h3>Sydney, Australia</h3>
<p>
    I am a software developer at <b>DaxroMedical Ltd.</b>, specializing in building scalable and user-friendly web applications. 
    Passionate about modern web technologies, I focus on creating efficient, high-performance solutions.
</p>

       
    </div>
  )
}

export default Hero