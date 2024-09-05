import React from 'react';
import '../styles/About.scss';
import Business from '../assets/svg/undraw_business_deal_re_up4u.svg'

const About = () => {
    return (
        <div>
            <div className="about">
                <div className='about-container'>
                    <h2>About Us</h2>
                    <p>We are a startup that provides a smart ERP system...</p>
                </div>
                <div className='about-illustration'>
                    <img src={Business} alt='about-business' />
                </div>
            </div>
        </div>
    );
};

export default About;