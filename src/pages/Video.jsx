// src/pages/Videos.jsx
import React from 'react';
import '../pages/Video.css';

const Videos = () => {
    // 1. Data for Left Sidebar (Categories with Colors)
    const categories = [
        { name: "Agroecology", color: "#006400", icon: "🌱" },
        { name: "Approaches", color: "#2196F3", icon: "👥" },
        { name: "Aquaculture", color: "#00BCD4", icon: "🐟" },
        { name: "Business Skills", color: "#9C27B0", icon: "💼" },
        { name: "Cereals", color: "#FF9800", icon: "🌾" },
        { name: "Equipment", color: "#795548", icon: "🚜" },
        { name: "Fruits & Nuts", color: "#E91E63", icon: "🍎" },
        { name: "Legumes", color: "#8BC34A", icon: "🥜" },
        { name: "Livestock", color: "#795548", icon: "🐄" },
        { name: "Plant Health", color: "#F44336", icon: "🌿" },
        { name: "Roots & Tubers", color: "#FFC107", icon: "🥔" },
        { name: "Vegetables", color: "#4CAF50", icon: "🥕" },
    ];

    // 2. Data for Video Grid
    const videos = [
        { id: 1, title: "Using termites as poultry feed", views: "1,936 views", time: "13:21", img: "https://picsum.photos/300/200?random=1" },
        { id: 2, title: "Making the most of coconut", views: "1,589 views", time: "15:31", img: "https://picsum.photos/300/200?random=2" },
        { id: 3, title: "Growing and processing turmeric", views: "2,065 views", time: "12:24", img: "https://picsum.photos/300/200?random=3" },
        { id: 4, title: "Community knowledge sharing centres", views: "920 views", time: "13:31", img: "https://picsum.photos/300/200?random=4" },
        { id: 5, title: "Alley cropping with multi-purpose trees", views: "1,260 views", time: "12:00", img: "https://picsum.photos/300/200?random=5" },
        { id: 6, title: "Managing sweet potato weevils", views: "799 views", time: "10:36", img: "https://picsum.photos/300/200?random=6" },
        { id: 7, title: "Making money with microgreens", views: "1,098 views", time: "15:16", img: "https://picsum.photos/300/200?random=7" },
        { id: 8, title: "Establishing a forest seedling nursery", views: "1,292 views", time: "15:33", img: "https://picsum.photos/300/200?random=8" },
        { id: 9, title: "Village Development Committees", views: "1,110 views", time: "14:27", img: "https://picsum.photos/300/200?random=9" },
    ];

    return (
        <div className="video-page">

            {/* Top Stats Bar */}
            <div className="stats-strip">
                <span>👥 90,000,000 viewers</span>
                <span>💼 463 entrepreneurs in 20 countries</span>
                <span>📹 6,132 agroecology videos</span>
                <span>🌍 110 languages available</span>
            </div>

            <div className="video-layout">

                {/* --- LEFT SIDEBAR (Categories) --- */}
                <aside className="left-sidebar">
                    <div className="sidebar-header">Agroecology</div>
                    <ul className="category-list">
                        {categories.map((cat, index) => (
                            <li key={index} className="category-item">
                                <div className="cat-left">
                                    <span className="cat-icon" style={{ backgroundColor: cat.color }}>{cat.icon}</span>
                                    <span className="cat-name">{cat.name}</span>
                                </div>
                                <span className="arrow">›</span>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* --- CENTER SECTION (Video Grid) --- */}
                <main className="center-content">
                    <div className="video-grid">
                        {videos.map((vid) => (
                            <div className="video-card" key={vid.id}>
                                <div className="thumbnail-wrapper">
                                    <img src={vid.img} alt={vid.title} />
                                    <span className="time-badge">{vid.time}</span>
                                </div>
                                <div className="video-info">
                                    <h4>{vid.title}</h4>
                                    <p className="views-text">{vid.views}</p>

                                    <div className="card-footer">
                                        <div className="lang-badges">
                                            <span className="badge">EN</span>
                                            <span className="badge">FR</span>
                                            <span className="badge">HI</span>
                                        </div>
                                        <div className="action-icons">
                                            <span>📥</span>
                                            <span>🔗</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* --- RIGHT SIDEBAR (Extras) --- */}
                <aside className="right-sidebar">

                    {/* Help Box */}
                    <div className="help-box">
                        <div className="help-header">How you can help...</div>
                        <div className="help-buttons">
                            <button className="green-btn">🔍 Find more videos</button>
                            <button className="green-btn">📱 Download our app!</button>
                            <button className="green-btn">💰 Make a donation</button>
                        </div>
                        <p className="small-text">
                            Your generous donation will enable us to give smallholder farmers better access to agricultural advice in their language.
                        </p>
                    </div>

                    {/* Latest News */}
                    <div className="news-box">
                        <h4>Latest News</h4>
                        <ul className="news-list">
                            <li>Young researchers hail learning-by-doing communication training in Uganda</li>
                            <li>Good practices in digital rural advisory services revealed in Madagascar</li>
                            <li>Unlocking youth potential through entrepreneurship education in Ghana</li>
                            <li>Strengthening communication skills of young researchers in Francophone West Africa</li>
                        </ul>
                        <button className="see-all-btn">See all our recent news</button>
                    </div>

                    {/* Recent Video Widget */}
                    <div className="recent-video-widget">
                        <h4>Recent Videos</h4>
                        <div className="video-card">
                            <div className="thumbnail-wrapper">
                                <img src="https://picsum.photos/300/200?random=20" alt="Recent" />
                                <span className="time-badge">13:21</span>
                            </div>
                            <div className="video-info">
                                <h4>Using termites as poultry feed</h4>
                                <p className="views-text">1,936 views</p>
                            </div>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    );
};

export default Videos;