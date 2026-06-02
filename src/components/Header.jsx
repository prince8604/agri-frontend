// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import agriLogo from '../assets/Images/Logo.png';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
    const { language, changeLanguage, t } = useLanguage();

    return (
        <div className="header-wrapper">

            {/* 1. TOP BAR (Language Switcher) */}
            <div className="top-bar">
                <div className="language-options">
                    {/* English Button */}
                    <span
                        onClick={() => changeLanguage('en')}
                        style={{
                            cursor: 'pointer',
                            fontWeight: language === 'en' ? 'bold' : 'normal',
                            color: language === 'en' ? 'white' : '#ccc'
                        }}
                    >
                        English
                    </span>

                    <span style={{ margin: '0 10px' }}>|</span>

                    {/* Hindi Button */}
                    <span
                        onClick={() => changeLanguage('hi')}
                        style={{
                            cursor: 'pointer',
                            fontWeight: language === 'hi' ? 'bold' : 'normal',
                            color: language === 'hi' ? 'white' : '#ccc'
                        }}
                    >
                        हिंदी
                    </span>
                </div>

                <div className="auth-links">
                    <Link to="/login">{t('login')}</Link>
                    <span> | </span>
                    <Link to="/register">{t('register')}</Link>
                </div>
            </div>

            {/* 2. MAIN GREEN HEADER */}
            <header className="header">
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img src={agriLogo} alt="Logo" className="logo-img" />
                        <span className="logo-text">{t('companyName')}</span>
                    </Link>
                </div>

                <nav className="nav-links">
                    <Link to="/" className="nav-link">{t('home')}</Link>
                    <Link to="/about" className="nav-link">{t('about')}</Link>
                    {/* The Services link has been removed from here */}
                    <Link to="/contact" className="nav-link">{t('contact')}</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;