import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Fotter.jsx';
import './Layout.css'; // <--- Import the CSS

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;