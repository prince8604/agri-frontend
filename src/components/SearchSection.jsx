// src/components/SearchSection.jsx
import React, { useState } from 'react';
import './searchSection.css';
import fasalVardan from "../assets/Images/fasal-Vardan1.jpg";
import fasalZyme from '../assets/Images/fasal-zyme.jpg';
import fasalSamrat from '../assets/Images/fasal-samrat.jpg';
import fasalHindsulf from '../assets/Images/fasal-hindsulf.jpg';
import fasalAllgreen from '../assets/Images/fasal-allgreen.jpeg';
 import fasalMonozinc from '../assets/Images/fasal-monozinc.jpg';
 import fasalMagicgold from '../assets/Images/fasal-magicgold.jpg';
// import fasalHindsulf from '../assets/Images/fasal-hindsulf.jpg';

    

const SearchSection = () => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    // REAL DATA FROM YOUR CATALOG IMAGES
    const catalogItems = [
        {
            id: 1,
            category: "Micro Nutrients",
            titleEn: "FASAL VARDAN",
            titleHi: "फसल वरदान",
            comp: "Zn - 6%, Fe - 3%, Mn - 3%, Cu - 1%, B - 1%",
            desc: "सूक्ष्म पोषक तत्वों का एक मिश्रण। यह स्वाइल एप्लीकेशन के लिए उपयोग किया जाता है। (सभी प्रकार की फसलों के लिए)",
            packing: "1 किग्रा०",
            img: fasalVardan
        },
        {
            id: 2,
            category: "Micro Nutrients",
            titleEn: "FASAL SAMRAT PLUS",
            titleHi: "फसल सम्राट प्लस",
            comp: "Zn - 6%, Fe - 3%, Cu - 5%, B - 5%",
            desc: "एक बहुउपयोगी सूक्ष्म पोषक तत्वों का माइक्रो मिश्रण। धान, गेहूँ, गन्ना, तम्बाकू, चाय, आलू आदि के लिए।",
            packing: "1 किग्रा०",
            img: fasalSamrat
        },
        {
            id: 3,
            category: "Fungicide",
            titleEn: "HIND SULF 90% D.P.",
            titleHi: "हिन्द सल्फ 90% डी.पी.",
            comp: "Sulphur 90% D.P. (Contact Fungicide)",
            desc: "फसल में टॉप ड्रेसिंग के रूप में प्रयोग किया जाता है। क्लोरोफिल की कमी को पूरा करके फफूंद रोग से बचाता है।",
            packing: "1 किग्रा०",
            img: fasalHindsulf
        },
        {
            id: 4,
            category: "Fertilizer",
            titleEn: "ALL GREEN",
            titleHi: "ऑल ग्रीन",
            comp: "Mg - 9.6%, S - 12%",
            desc: "मैग्नीशियम एक सिंगल न्यूट्रेन्ट है। यह पौधों में क्लोरोफिल का एक मुख्य अवयव है।",
            packing: "1 किग्रा०",
            img: fasalAllgreen
        },
        {
            id: 5,
            category: "Fertilizer",
            titleEn: "MONO ZINC 33%",
            titleHi: "मोनो जिंक 33%",
            comp: "Zinc Sulphate Monohydrate",
            desc: "पौधों में एंजाइम क्रियाओं को उत्तेजित कर रोग प्रतिरोध क्षमता को बढ़ाता है।",
            packing: "1 किग्रा०",
            img: fasalMonozinc
        },
        {
            id: 6,
            category: "Organic",
            titleEn: "MAGIC GOLD",
            titleHi: "मैजिक जैविक खाद",
            comp: "Pure Organic Manure",
            desc: "प्रेस मड मैटेरियल पर आधारित महत्वपूर्ण उत्पाद। खेत में गोबर की खाद की पूर्ति करने का मुख्य स्रोत।",
            packing: "40 किग्रा०",
            img: fasalMagicgold
        },
        {
            id: 7,
            category: "Organic",
            titleEn: "FASAL ZYME",
            titleHi: "फसल जाइम",
            comp: "Bio Product",
            desc: "जैव निस्सारित उत्पाद जिसमें एंजाइम व सूक्ष्म पोषक तत्व संतुलित मात्रा में पाये जाते हैं।",
            packing: "10 किग्रा०",
            img: fasalZyme
        },
        {
            id: 8,
            category: "Liquid/Gel",
            titleEn: "HIND MAHAKAL",
            titleHi: "हिन्द महाकाल",
            comp: "Humic Acid 16%",
            desc: "मिट्टी में कार्बनिक जीवाश्म की मात्रा को बढ़ाकर पोषक तत्वों को रिलीज करने का काम करता है।",
            packing: "250ml, 500ml, 1L",
            img: "https://via.placeholder.com/300x400/f3e5f5/6a1b9a?text=Hind+Mahakal"
        }
    ];

    // Get unique categories for the filter buttons
    const categories = ['All', ...new Set(catalogItems.map(item => item.category))];

    // Filter products based on selected category
    const filteredItems = activeCategory === 'All'
        ? catalogItems
        : catalogItems.filter(item => item.category === activeCategory);

    return (
        <div className="catalog-section-container">

            {/* --- THE BANNER --- */}
            <div className="catalog-banner">
                <div className="catalog-content-wrapper">
                    <div className="side-image-container">
                        <img src="https://cdn-icons-png.flaticon.com/512/2913/2913990.png" alt="Plant Icon" className="side-image" />
                    </div>

                    <div className="center-content">
                        <h2 className="main-heading">HFCI Premium Product Catalog</h2>
                        <p className="sub-heading">
                            Explore our complete range of Fertilizers, Micro Nutrients, and Organic products for a bountiful harvest.
                        </p>
                        <button
                            className="toggle-catalog-btn"
                            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                        >
                            {isCatalogOpen ? "Hide Catalog ▲" : "View All Products ▼"}
                        </button>
                    </div>

                    <div className="side-image-container">
                        <img src="https://cdn-icons-png.flaticon.com/512/3082/3082008.png" alt="Quality Badge" className="side-image" />
                    </div>
                </div>
            </div>

            {/* --- THE EXPANDABLE CATALOG --- */}
            {isCatalogOpen && (
                <div className="expanded-catalog-wrapper">

                    {/* Category Filter Buttons */}
                    <div className="category-filters">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="expanded-catalog-grid">
                        {filteredItems.map((item) => (
                            <div className="product-card" key={item.id}>
                                <div className="product-img-box">
                                    {/* You will replace this src with your actual product images later */}
                                    <img src={item.img} alt={item.titleEn} />
                                    <span className="category-badge">{item.category}</span>
                                </div>
                                <div className="product-details">
                                    <h3 className="product-title-hi">{item.titleHi}</h3>
                                    <h4 className="product-title-en">{item.titleEn}</h4>
                                    <p className="product-comp">{item.comp}</p>
                                    <p className="product-desc">{item.desc}</p>

                                    <div className="product-footer">
                                        <span className="packing-info">📦 {item.packing}</span>
                                        <button className="buy-btn">Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default SearchSection;