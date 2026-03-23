// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loginMethod, setLoginMethod] = useState('email');

    return (
        <div className="login-container">
            <div className="login-box">

                <h2>Welcome Back</h2>
                <p className="sub-text">Please log in to your account</p>

                {/* Toggle Tabs */}
                <div className="login-tabs">
                    <button
                        className={`tab-btn ${loginMethod === 'email' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('email')}
                    >
                        Email
                    </button>
                    <button
                        className={`tab-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('mobile')}
                    >
                        Mobile Number
                    </button>
                </div>

                <form className="login-form">

                    {/* OPTION 1: EMAIL INPUT */}
                    {loginMethod === 'email' && (
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                required
                            />
                        </div>
                    )}

                    {/* OPTION 2: MOBILE INPUT WITH COUNTRY CODE */}
                    {loginMethod === 'mobile' && (
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <div className="mobile-input-group">

                                {/* Country Code Selector */}
                                <select className="country-code-select">
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+1">+1 (US)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+971">+971 (UAE)</option>
                                    <option value="+61">+61 (AU)</option>
                                </select>

                                {/* Number Input */}
                                <input
                                    type="tel"
                                    placeholder="Enter 10-digit number"
                                    required
                                    className="mobile-number-input"
                                />
                            </div>
                        </div>
                    )}

                    {/* Password Field */}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>

                    <div className="form-options">
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btn">Log In</button>
                </form>

                <p className="register-link">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;