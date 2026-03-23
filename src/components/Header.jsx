// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import agriLogo from '../assets/Images/Logo.png'; // Make sure this path is correct

const Header = () => {
    return (
        <div className="header-wrapper">

            {/* 1. TOP BAR (Dark Grey Strip) */}
            <div className="top-bar">
                <div className="language-options">
                    <span>English</span>
                    <span>Hindi</span>
                    <span>Français</span>
                </div>
                <div className="auth-links">
                    <Link to="/login">Log In</Link>
                    <span> | </span>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            {/* 2. MAIN GREEN HEADER */}
            <header className="header">

                {/* Logo Section */}
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        {/* If you don't have the image yet, this text will still show correctly */}
                        <img src={agriLogo} alt="Logo" className="logo-img" />
                        <span className="logo-text">Hind Fertilizer & Chemicals Industries</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

            </header>
        </div>
    );
};

export default Header;