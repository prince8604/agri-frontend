// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register'; // Import the new page
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
 import Video from './pages/Video.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        {/* The Home Page */}
        <Route path="/" element={<Home />} />

        {/* The Register Page */}
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/About" element= {<About />}/>
        <Route path="/Login" element= {<Login />}/>
        <Route path= "/Video" element= {<Video />}/>
      </Routes>
    </Layout>
  );
}

export default App;