import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navigation-menu">
            <div className="menu">
            <NavLink className="menu-link" to="/home">Home</NavLink>
            <NavLink className="menu-link" to="/about">About</NavLink>
            <NavLink className="menu-link" to="/services">Services</NavLink>
            </div>
        </div>
    );
};

export default Header;