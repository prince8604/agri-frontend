// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Import Search Section
import SearchSection from '../components/TempSection';

// 3. IMPORT LOCAL IMAGES HERE
// This path matches your screenshot perfectly
import slide1 from '../assets/Images/slide1.jpg';
import slide2 from '../assets/Images/slide2.jpg';
import slide3 from '../assets/Images/slide3.jpg';

const Home = () => {
    const navigate = useNavigate();

    // Data for the Carousel (Using your local folder images!)
    const slides = [
        {
            id: 1,
            image: slide1, // Variable from import above
            title: "Modern Agriculture",
            subtitle: "Using technology to boost production."
        },
        {
            id: 2,
            image: slide2, // Variable from import above
            title: "Organic Farming",
            subtitle: "Healthy food for a healthy life."
        },
        {
            id: 3,
            image: slide3, // Variable from import above
            title: "Smart Irrigation",
            subtitle: "Save water with automated systems."
        }
    ];

    // Data for the Cards (Keeping dummy images here for now)
    const services = [
        {
            id: 1,
            title: "Crop Analysis",
            desc: "Check your soil health and crop quality instantly.",
            image: "https://picsum.photos/400/300?random=4"
        },
        {
            id: 2,
            title: "Market Rates",
            desc: "Get the latest selling prices for your crops.",
            image: "https://picsum.photos/400/300?random=5"
        },
        {
            id: 3,
            title: "Weather Forecast",
            desc: "Real-time weather updates for your farm location.",
            image: "https://picsum.photos/400/300?random=6"
        }
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
                    <p>Access Agriculture is a non-profit organisation that supports organic farming and agroecology.</p>
                    <p>We enable global and local access to quality training videos in local languages.</p>
                </div>

                <div className="quadrant-container">
                    <div className="quad-box">
                        <h3>Food Systems</h3>
                        <img src="https://media.istockphoto.com/id/870915532/photo/man-holding-crate-ob-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=k2dXOI-wxUy7lX77Pm90vU6TJXmAAv5VtK60ZZHIyCA=" alt="Food Systems" />
                    </div>
                    <div className="quad-box">
                        <h3>Education</h3>
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20250308/pngtree-colorful-sunset-over-rice-and-wheat-fields-with-farmers-at-work-image_17079732.jpg" alt="Education" />
                    </div>
                    <div className="quad-box">
                        <h3>Entrepreneurship</h3>
                        <img src="https://www.shutterstock.com/image-photo/farmer-man-corn-field-works-600nw-2455309445.jpg" alt="Entrepreneurship" />
                    </div>
                    <div className="quad-box">
                        <h3>South-South Learning</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0BBltaRwdDLklgWJFQ8_1WNuTevg2mnA-Og&s" alt="Learning" />
                    </div>

                    {/* CENTER CIRCLE BUTTON */}
                    <div className="center-circle" onClick={() => navigate('/videos')}>
                        <div className="circle-content">
                            <span className="icon">▶️</span>
                            <h3>Video<br />Platform</h3>
                            <span className="icon">💻</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CARDS (SERVICES) */}
            <section className="cards-section">
                <h2 className="section-title">Our Services</h2>
                <div className="card-grid">
                    {services.map((service) => (
                        <div className="feature-card" key={service.id}>
                            <img src={service.image} alt={service.title} className="card-image" />
                            <div className="card-info">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <button className="card-btn">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;