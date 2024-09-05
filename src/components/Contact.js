import React from 'react';
import '../styles/Contact.scss';
import ContactUs from '../assets/svg/undraw_contact_us_re_4qqt.svg'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className='contact-container'>
                <h2>Contact Us</h2>
                <p>Email: info@erpstartup.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className='contact-illustration'>
                <img src={ContactUs} alt='contact'/>
            </div>
        </div>
    </div>
  );
};

export default Contact;