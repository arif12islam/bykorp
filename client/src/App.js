// client/src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

// --- NEW: Import the Lenis library ---
import Lenis from '@studio-freight/lenis'

function App() {
  // --- Your existing logic for first scroll (no changes) ---
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleFirstScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleFirstScroll);
    };

    window.addEventListener('scroll', handleFirstScroll);
    return () => window.removeEventListener('scroll', handleFirstScroll);
  }, []);

  // --- NEW: useEffect hook to initialize and run Lenis ---
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // How long the animation lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothTouch: true, // Enable smooth scrolling for touch devices
    });

    // 2. Create an animation loop
    function raf(time) {
      lenis.raf(time); // Update Lenis on each animation frame
      requestAnimationFrame(raf); // Request the next frame
    }

    requestAnimationFrame(raf); // Start the loop

    // 3. Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty array ensures this runs only once on mount


  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage hasScrolled={hasScrolled} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;