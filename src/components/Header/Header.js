import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useHistory } from 'react-router';

const Header = () => {
    const history = useHistory()

    const handleSiteLogo = () => {
        history.push('/home')
    }
    return (
        <div className="navigation-menu">
            <h1 onClick={handleSiteLogo} className="menu-text">ZeroLearning</h1>
            <div className="menu">
                <NavLink className="menu-link" to="/home">Home</NavLink>
                <NavLink className="menu-link" to="/about">About Us</NavLink>
                <NavLink className="menu-link" to="/services">Services</NavLink>
                <NavLink className="menu-link" to="/contact">Contact Us</NavLink>
            </div>
        </div>
    );
};

export default Header;