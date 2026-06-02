// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// 1. Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap App inside BrowserRouter */}
    <BrowserRouter>
    <LanguageProvider>
      <App/>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);