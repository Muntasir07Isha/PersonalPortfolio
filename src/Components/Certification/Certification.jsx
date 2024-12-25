import React from 'react'
import azureCetrt from '../../assets/Portfolio images/AZ-900 CERT.png'
import './certificationModule.css'


const Certification = () => {
  return (
    <div className='c-container'>
        <h1>My Certification</h1>
    <div className="c-content">
        <div className="picture-container">
            <img src={azureCetrt} alt='your Picture' className='cert-pic'/>
        </div>
<div className="certificate-details">
<h2 className="certificate-title">Azure Fundamentals Certificate</h2>
        <p className="certificate-description">
        Azure Fundamentals certified, demonstrating foundational knowledge of Microsoft Azure cloud services. Proficient in core Azure concepts, including cloud services, pricing, security, and compliance. Skilled in leveraging Azure to streamline processes and drive innovation.


        </p>
</div>


</div>
        

</div>
  )
}

export default Certification