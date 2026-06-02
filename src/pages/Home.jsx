// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { useLanguage } from '../context/LanguageContext';
import SearchSection from '../components/SearchSection';

// IMPORT LOCAL IMAGES
import slide1 from '../assets/Images/slide1.jpg';
import slide2 from '../assets/Images/slide2.jpg';
import slide3 from '../assets/Images/slide3.jpg';

const Home = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    // --- NEW: STATE FOR LIVE WEATHER ---
    const [liveWeather, setLiveWeather] = useState({ temp: null, status: "Loading..." });

    // --- NEW: FETCH WEATHER DATA ON PAGE LOAD ---
    useEffect(() => {
        // Coordinates for New Delhi, India (Lat: 28.6139, Lon: 77.2090)
        // You can change these to Amritsar or any other city!
        const fetchWeather = async () => {
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true");
                const data = await response.json();
                setLiveWeather({
                    temp: data.current_weather.temperature,
                    status: "New Delhi, India"
                });
            } catch (error) {
                console.error("Failed to fetch weather", error);
                setLiveWeather({ temp: "--", status: "Weather unavailable" });
            }
        };
        fetchWeather();
    }, []);

    // Data for the Carousel
    const slides = [
        { id: 1, image: slide1, title: t('slide1_title'), subtitle: t('slide1_subtitle') },
        { id: 2, image: slide2, title: t('slide2_title'), subtitle: t('slide2_subtitle') },
        { id: 3, image: slide3, title: t('slide3_title'), subtitle: t('slide3_subtitle') }
    ];

    // Data for the Cards
    const services = [
        { id: 1, title: t('service1_title'), desc: t('service1_desc'), image: "https://picsum.photos/400/300?random=4" },
        { id: 2, title: t('service2_title'), desc: t('service2_desc'), image: "https://picsum.photos/400/300?random=5" },
        { id: 3, title: t('service3_title'), desc: t('service3_desc'), image: "https://picsum.photos/400/300?random=6" }
    ];

    return (
        <div className="home-container">

            {/* SECTION 1: CAROUSEL (SLIDER) */}
            <section className="carousel-section">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="slide-content">
                                <img src={slide.image} alt={slide.title} className="slide-image" />
                                <div className="slide-text">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* SECTION 2: SEARCH SECTION */}
            <SearchSection />

            {/* SECTION 3: VIDEO PLATFORM (Quadrants) */}
            <section className="platform-section">
                <div className="platform-header">
                    <p>{t('platform_desc1')}</p>
                    <p>{t('platform_desc2')}</p>
                </div>

                <div className="quadrant-container">
                    <div className="quad-box">
                        <h3>{t('food_systems')}</h3>
                        <img src="https://media.istockphoto.com/id/870915532/photo/man-holding-crate-ob-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=k2dXOI-wxUy7lX77Pm90vU6TJXmAAv5VtK60ZZHIyCA=" alt="Food Systems" />
                    </div>
                    <div className="quad-box">
                        <h3>{t('education')}</h3>
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20250308/pngtree-colorful-sunset-over-rice-and-wheat-fields-with-farmers-at-work-image_17079732.jpg" alt="Education" />
                    </div>
                    <div className="quad-box">
                        <h3>{t('entrepreneurship')}</h3>
                        <img src="https://www.shutterstock.com/image-photo/farmer-man-corn-field-works-600nw-2455309445.jpg" alt="Entrepreneurship" />
                    </div>
                    <div className="quad-box">
                        <h3>{t('learning')}</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BBltaRwdDLklgWJFQ8_1WNuTevg2mnA-Og&s" alt="Learning" />
                    </div>

                    {/* CENTER CIRCLE BUTTON */}
                    <div className="center-circle" onClick={() => navigate('/videos')}>
                        <div className="circle-content">
                            <span className="icon">▶️</span>
                            <h3>{t('video')}<br />{t('platform')}</h3>
                            <span className="icon">💻</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CARDS (SERVICES) */}
            <section className="cards-section">
                <h2 className="section-title">{t('our_services')}</h2>
                <div className="card-grid">
                    {services.map((service) => (
                        <div className="feature-card" key={service.id}>
                            <img src={service.image} alt={service.title} className="card-image" />
                            <div className="card-info">
                                <h3>{service.title}</h3>

                                {/* --- NEW: INJECT LIVE WEATHER INTO CARD #3 --- */}
                                {service.id === 3 && liveWeather.temp !== null ? (
                                    <div className="live-weather-box">
                                        <h2 className="weather-temp">{liveWeather.temp}°C</h2>
                                        <p className="weather-location">📍 {liveWeather.status}</p>
                                    </div>
                                ) : (
                                    <p>{service.desc}</p>
                                )}

                                <button className="card-btn">{t('learn_more')}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;