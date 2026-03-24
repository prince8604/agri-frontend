// src/components/SearchSection.jsx
import React from 'react';
import './SearchSection.css';

const SearchSection = () => {
    return (
        <div className="search-section-container">
            <div className="search-content-wrapper">

                {/* Left Image (Logo) */}
                <div className="side-image-container">
                    <img
                        src="https://via.placeholder.com/150/ffffff/000000?text=Logo"
                        alt="Left Logo"
                        className="side-image"
                    />
                </div>

                {/* Center Content */}
                <div className="center-content">
                    <h2 className="main-heading">Watch catlog in your own language!</h2>
                    <p className="sub-heading">
                        Select a language or category or type a word in the search area and then click on <strong>Search</strong>
                    </p>

                    {/* Search Form */}
                    <div className="search-form">
                        <div className="form-row">
                            <select className="search-input">
                                <option>By language</option>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <select className="search-input">
                                <option>All categories</option>
                                <option>Farming</option>
                                <option>Technology</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Type here" className="search-input" />
                            <button className="search-btn">SEARCH</button>
                        </div>
                    </div>
                </div>

                {/* Right Image (Badge) */}
                <div className="side-image-container">
                    <img
                        src="https://via.placeholder.com/150/FFD700/000000?text=Gold+Badge"
                        alt="Right Badge"
                        className="side-image"
                    />
                </div>

            </div>
        </div>
    );
};

export default SearchSection;