// src/pages/Register.jsx
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending to Google Doc...');

        // 🔴 PASTE YOUR NEW GOOGLE APPS SCRIPT URL HERE
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIiunt_jqGIE3fiQpgJqXZQlUL97dj4teQaKAH66bYiNq5Vigx42aUJyixToYpQMhLLw/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Important for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setStatus('Registration Saved to Google Doc!');
            setFormData({ name: '', email: '', mobile: '', password: '' });

        } catch (error) {
            console.error("Error:", error);
            setStatus('Error saving data.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Create an Account</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    {/* ... Keep your existing inputs (Name, Email, Mobile, Password) ... */}

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="register-btn">Sign Up</button>

                    {status && <p style={{ marginTop: '10px', color: 'green' }}>{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;