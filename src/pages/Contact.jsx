// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">

            {/* Header Section */}
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>Have questions about crops, prices, or Products? We are here to help!</p>
            </div>

            <div className="contact-container">

                {/* LEFT COLUMN: Contact Info */}
                <div className="contact-info">
                    <div className="info-box">
                        <h3>📍 Our Office</h3>
                        <p>E/4-2190 Guru Bazar Chhehratta<br />Amritsar Punjab, India - 143105</p>
                    </div>

                    <div className="info-box">
                        <h3>📞 Call Us</h3>
                        <p>+91 7007114733</p>
                        <p>+91 8528589038</p>
                    </div>

                    <div className="info-box">
                        <h3>✉️ Email Us</h3>
                        <p>support@agriapp.com</p>
                        <p>help@agriapp.com</p>
                    </div>

                    {/* Embedded Map */}
                    {/* Embedded Map for Guru Bazar, Amritsar */}
                    <div className="map-container">
                        <iframe
                            title="Office Location"
                            src="https://maps.google.com/maps?q=Guru%20Bazar%2C%20Katra%20Ahluwalia%2C%20Amritsar%2C%20Punjab%20143006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="200"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form">
                        <h3>Send us a Message</h3>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" required />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <select>
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Partnership</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help you?" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;