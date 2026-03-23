// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {

    // NEW: Data for the Catalog Section
    const catalogItems = [
        {
            id: 1,
            title: "Organic Fertilizers",
            desc: "Enrich your soil with our eco-friendly, nutrient-rich fertilizers designed for maximum yield.",
            img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Crop Protection",
            desc: "Advanced, safe chemical solutions to protect your crops from pests and diseases.",
            img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c1b?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Premium Seeds",
            desc: "High-yielding, climate-resilient seed varieties tested for diverse Indian soils.",
            img: "https://images.unsplash.com/photo-1593480766951-2475094242ce?q=80&w=600&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Smart Equipment",
            desc: "Modern farming tools and machinery designed to reduce labor and increase efficiency.",
            img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=600&auto=format&fit=crop"
        }
    ];

    return (
        <div className="about-page">

            {/* 1. HERO HEADER */}
            <div className="about-header">
                <h1>About Us</h1>
                <p>Empowering Farmers, Feeding the Future.</p>
            </div>

            <div className="about-container">

                {/* 2. OUR STORY SECTION */}
                <section className="story-section">
                    <div className="story-image">
                        <img
                            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                            alt="Farmer in field"
                        />
                    </div>
                    <div className="story-content">
                        <h2>Who We Are</h2>
                        <p>
                            Welcome to <strong>Hind Fertilizer & Chemicals Industries</strong>, India's leading platform dedicated to transforming the lives of farmers.
                            We bridge the gap between traditional farming and modern technology.
                        </p>
                        <p>
                            Founded with a vision to support the agricultural backbone of our country, our goal is simple: to provide farmers with top-quality products,
                            expert advice, and the tools they need to ensure a bountiful harvest.
                        </p>
                    </div>
                </section>

                {/* 3. STATS BAR */}
                <section className="stats-bar">
                    <div className="stat-item">
                        <h3>5,000+</h3>
                        <p>Happy Farmers</p>
                    </div>
                    <div className="stat-item">
                        <h3>120+</h3>
                        <p>Expert Consultants</p>
                    </div>
                    <div className="stat-item">
                        <h3>50+</h3>
                        <p>Cities Covered</p>
                    </div>
                </section>

                {/* 4. MISSION & VISION */}
                <section className="mission-section">
                    <div className="mission-card">
                        <div className="icon">🚀</div>
                        <h3>Our Mission</h3>
                        <p>To empower every farmer with high-quality products that increase productivity and profitability.</p>
                    </div>

                    <div className="mission-card">
                        <div className="icon">🌱</div>
                        <h3>Our Vision</h3>
                        <p>A future where agriculture is sustainable, profitable, and technology-driven for everyone.</p>
                    </div>

                    <div className="mission-card">
                        <div className="icon">🤝</div>
                        <h3>Our Values</h3>
                        <p>Integrity, Innovation, and Community. We believe in growing together.</p>
                    </div>
                </section>

                {/* 5. NEW: PRODUCT CATALOG SECTION */}
                <section className="catalog-section">
                    <div className="catalog-header">
                        <h2>Our Product Catalog</h2>
                        <p>Explore our wide range of premium agricultural products tailored for your farm's success.</p>
                    </div>

                    <div className="catalog-grid">
                        {catalogItems.map((item) => (
                            <div className="catalog-card" key={item.id}>
                                <div className="catalog-img-wrapper">
                                    <img src={item.img} alt={item.title} />
                                    <div className="catalog-overlay">
                                        <button className="view-btn">View Details</button>
                                    </div>
                                </div>
                                <div className="catalog-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;