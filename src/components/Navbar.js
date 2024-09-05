import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();

    const getCurrentPage = () => {
        switch (location.pathname) {
            case '/':
                return 'HOME';
            case '/about':
                return 'ABOUT';
            case '/pricing':
                return 'PRICING';
            case '/contact':
                return 'CONTACT';
            default:
                return 'LOGO';
        }
    };

    const currentPage = getCurrentPage();

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
    <div>
        <nav className="navbar">
            <div className="logo">{currentPage}</div>
            <div className="nav-container">
                <ul className="nav-links">
                    {currentPage !== 'HOME' && (
                        <li><Link to="/">HOME</Link></li>
                    )}
                    {currentPage !== 'ABOUT' && (
                        <li><Link to="/about">ABOUT</Link></li>
                    )}
                    {currentPage !== 'PRICING' && (
                        <li><Link to="/pricing">PRICING</Link></li>
                    )}
                    {currentPage !== 'CONTACT' && (
                        <li><Link to="/contact">CONTACT</Link></li>
                    )}
                </ul>
                <button className="login-btn" onClick={openModal}>LOGIN</button>
            </div>
        </nav>
        <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    );
  };

export default Navbar;