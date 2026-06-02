// src/pages/Weather.jsx
import React, { useState, useEffect } from 'react';
import './Weather.css';

// Pre-defined cities for easy selection
const CITIES = [
    { name: "New Delhi", lat: 28.6139, lon: 77.2090 },
    { name: "Amritsar, Punjab", lat: 31.6340, lon: 74.8723 },
    { name: "Mumbai, Maharashtra", lat: 19.0760, lon: 72.8777 },
    { name: "Lucknow, UP", lat: 26.8467, lon: 80.9462 },
    { name: "Bhopal, MP", lat: 23.2599, lon: 77.4126 },
    { name: "Patna, Bihar", lat: 25.5941, lon: 85.1376 },
    { name: "Custom Coordinates", lat: "", lon: "" }
];

// Helper function to convert WMO weather codes to readable text & emojis
const getWeatherCondition = (code) => {
    if (code === 0) return { text: "Clear Sky", icon: "☀️" };
    if (code === 1 || code === 2 || code === 3) return { text: "Partly Cloudy", icon: "⛅" };
    if (code === 45 || code === 48) return { text: "Foggy", icon: "🌫️" };
    if (code >= 51 && code <= 67) return { text: "Rainy", icon: "🌧️" };
    if (code >= 71 && code <= 77) return { text: "Snow", icon: "❄️" };
    if (code >= 95) return { text: "Thunderstorm", icon: "⛈️" };
    return { text: "Unknown", icon: "🌡️" };
};

const Weather = () => {
    const [selectedCity, setSelectedCity] = useState(CITIES[0].name);
    const [lat, setLat] = useState(CITIES[0].lat);
    const [lon, setLon] = useState(CITIES[0].lon);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (latitude, longitude) => {
        if (!latitude || !longitude) return;
        setLoading(true);
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const data = await response.json();
            setWeatherData(data.current_weather);
        } catch (error) {
            console.error("Error fetching weather:", error);
            setWeatherData(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (selectedCity !== "Custom Coordinates") {
            fetchWeather(lat, lon);
        }
    }, [lat, lon, selectedCity]);

    const handleCityChange = (e) => {
        const cityName = e.target.value;
        setSelectedCity(cityName);
        const city = CITIES.find(c => c.name === cityName);
        if (city && cityName !== "Custom Coordinates") {
            setLat(city.lat);
            setLon(city.lon);
        } else {
            setLat("");
            setLon("");
            setWeatherData(null);
        }
    };

    const handleCustomSearch = (e) => {
        e.preventDefault();
        fetchWeather(lat, lon);
    };

    return (
        <div className="weather-page">
            <div className="weather-header">
                <h1>Agricultural Weather Center</h1>
                <p>Get real-time weather updates to plan your farming activities.</p>
            </div>

            <div className="weather-container">
                {/* LEFT PANEL: Controls */}
                <div className="weather-controls">
                    <h3>Select Location</h3>

                    <div className="form-group">
                        <label>Choose a City:</label>
                        <select value={selectedCity} onChange={handleCityChange} className="weather-select">
                            {CITIES.map((city, index) => (
                                <option key={index} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    {selectedCity === "Custom Coordinates" && (
                        <form onSubmit={handleCustomSearch} className="custom-coord-form">
                            <div className="form-group">
                                <label>Latitude:</label>
                                <input type="number" step="any" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="e.g. 28.6139" required />
                            </div>
                            <div className="form-group">
                                <label>Longitude:</label>
                                <input type="number" step="any" value={lon} onChange={(e) => setLon(e.target.value)} placeholder="e.g. 77.2090" required />
                            </div>
                            <button type="submit" className="weather-btn">Get Weather</button>
                        </form>
                    )}
                </div>

                {/* RIGHT PANEL: Display */}
                <div className="weather-display">
                    {loading ? (
                        <div className="loading-spinner">Fetching live data...</div>
                    ) : weatherData ? (
                        <div className="weather-card-large">
                            <div className="weather-card-header">
                                <h2>{selectedCity === "Custom Coordinates" ? "Custom Location" : selectedCity}</h2>
                                <p>Live Forecast</p>
                            </div>

                            <div className="weather-main-info">
                                <div className="weather-icon-large">
                                    {getWeatherCondition(weatherData.weathercode).icon}
                                </div>
                                <div className="weather-temp-large">
                                    {weatherData.temperature}°C
                                </div>
                            </div>

                            <h3 className="weather-condition-text">
                                {getWeatherCondition(weatherData.weathercode).text}
                            </h3>

                            <div className="weather-details-grid">
                                <div className="weather-detail-box">
                                    <span className="detail-label">Wind Speed</span>
                                    <span className="detail-value">{weatherData.windspeed} km/h</span>
                                </div>
                                <div className="weather-detail-box">
                                    <span className="detail-label">Wind Direction</span>
                                    <span className="detail-value">{weatherData.winddirection}°</span>
                                </div>
                                <div className="weather-detail-box">
                                    <span className="detail-label">Last Updated</span>
                                    <span className="detail-value">
                                        {/* THIS IS THE FIXED LINE */}
                                    