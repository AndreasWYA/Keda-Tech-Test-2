import React from 'react';
import '../styles/Home.scss';
import '../styles/Navbar.scss'
import Metric from '../assets/svg/undraw_metrics_re_6g90.svg';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <div className='home-container2'>
                        <p>Excepteur sint occaecat cupidatat non proident.</p>
                        <div className="home-illustration">
                            <img src={Metric} alt="metric" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;