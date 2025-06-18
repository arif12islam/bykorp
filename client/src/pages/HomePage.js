// src/pages/HomePage.js - with Contact section removed
import React from 'react';
import { Link } from 'react-router-dom';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
// We have removed the import for 'Contact' from here

function HomePage() {
  return (
    <>
      <header className="App-header" id="home">
        <div className="hero-content">
          <h1>DIGITAL GROWTH, POWERED BY AI</h1>
          <p>We combine expert digital marketing with custom AI solutions to grow your business.</p>
          <Link to="/contact" className="btn btn-primary">Get Your Free Consultation</Link>
        </div>
      </header>
      <TrustedBy />
      <Services />
      <Showcase />
      {/* The <Contact /> component has been removed from the bottom of the homepage */}
    </>
  );
}

export default HomePage;