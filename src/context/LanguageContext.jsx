// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const LanguageContext = createContext();

// 2. Create the Dictionary
// Inside src/context/LanguageContext.jsx

const dictionary = {
    en: {
        // Header
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        login: "Log In",
        register: "Register",
        companyName: "Hind Fertilizer & Chemicals Industries",

        // Home Page - Slider
        slide1_title: "Modern Agriculture",
        slide1_subtitle: "Using technology to boost production.",
        slide2_title: "Organic Farming",
        slide2_subtitle: "Healthy food for a healthy life.",
        slide3_title: "Smart Irrigation",
        slide3_subtitle: "Save water with automated systems.",

        // Home Page - Platform Section
        platform_desc1: "Access Agriculture is a non-profit organisation that supports organic farming and agroecology.",
        platform_desc2: "We enable global and local access to quality training videos in local languages.",
        food_systems: "Food Systems",
        education: "Education",
        entrepreneurship: "Entrepreneurship",
        learning: "South-South Learning",
        video: "Video",
        platform: "Platform",

        // Home Page - Services
        our_services: "Our Services",
        service1_title: "Crop Analysis",
        service1_desc: "Check your soil health and crop quality instantly.",
        service2_title: "Market Rates",
        service2_desc: "Get the latest selling prices for your crops.",
        service3_title: "Weather Forecast",
        service3_desc: "Real-time weather updates for your farm location.",
        learn_more: "Learn More "
    },
    hi: {
        // Header
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        contact: "संपर्क करें",
        login: "लॉग इन",
        register: "रजिस्टर",
        companyName: "हिन्द फर्टिलाइजर एंड केमिकल्स इंडस्ट्रीज",

        // Home Page - Slider
        slide1_title: "आधुनिक कृषि",
        slide1_subtitle: "उत्पादन बढ़ाने के लिए तकनीक का उपयोग।",
        slide2_title: "जैविक खेती",
        slide2_subtitle: "स्वस्थ जीवन के लिए स्वस्थ भोजन।",
        slide3_title: "स्मार्ट सिंचाई",
        slide3_subtitle: "स्वचालित प्रणालियों के साथ पानी बचाएं।",

        // Home Page - Platform Section
        platform_desc1: "एक्सेस एग्रीकल्चर एक गैर-लाभकारी संगठन है जो जैविक खेती और कृषि-पारिस्थितिकी का समर्थन करता है।",
        platform_desc2: "हम स्थानीय भाषाओं में गुणवत्तापूर्ण प्रशिक्षण वीडियो तक वैश्विक और स्थानीय पहुंच सक्षम करते हैं।",
        food_systems: "खाद्य प्रणाली",
        education: "शिक्षा",
        entrepreneurship: "उद्यमिता",
        learning: "दक्षिण-दक्षिण सीखना",
        video: "वीडियो",
        platform: "प्लेटफॉर्म",

        // Home Page - Services
        our_services: "हमारी सेवाएं",
        service1_title: "फसल विश्लेषण",
        service1_desc: "अपनी मिट्टी के स्वास्थ्य और फसल की गुणवत्ता की तुरंत जांच करें।",
        service2_title: "बाजार भाव",
        service2_desc: "अपनी फसलों के लिए नवीनतम बिक्री मूल्य प्राप्त करें।",
        service3_title: "मौसम पूर्वानुमान",
        service3_desc: "आपके खेत के स्थान के लिए रीयल-टाइम मौसम अपडेट।",
        learn_more: "मौसम देखें"
    }
};

// 3. Create the Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default is English

    // Function to switch language
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    // Translation function (we will use this everywhere)
    const t = (word) => {
        return dictionary[language][word] || word;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context easily
export const useLanguage = () => useContext(LanguageContext);