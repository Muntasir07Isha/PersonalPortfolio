import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import the necessary icons
import './contactModule.css';

const socialLinks = [
  {
    href: 'https://www.facebook.com/mh.hossen.9',
    icon: <FaFacebook />,
    name: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/muntasir_hossen/',
    icon: <FaInstagram />,
    name: 'Instagram'
  },
  {
    href: 'https://github.com/Muntasir07Isha',
    icon: <FaGithub />,
    name: 'GitHub'
  },
  {
    href: 'mailto:iammunta321@gmail.com',
    icon: <FaEnvelope />,
    name: 'Email'
  }
];

const Contact = () => {
  return (
    <div className='contact-header'>
      <h1>Contact</h1> 
      <h3>Let's get in Touch</h3>
      <div className='social-icons'>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {link.icon}
          </a>
        ))}
      </div>
     
    </div>
  )
}

export default Contact;
