// client/src/components/Navbar.js - FINAL
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi2";

function Navbar() {
  // State for the "scrolled" appearance (glassmorphism)
  const [isScrolled, setIsScrolled] = useState(false);
  // State for the "hidden" appearance (disappearing on scroll)
  const [isVisible, setIsVisible] = useState(true);
  // State for the responsive mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const triggerPointRef = useRef(null);
  const location = useLocation();

  // Effect for calculating the scroll trigger point
  useEffect(() => {
    const calculateTriggerPoint = () => {
      const triggerElement = document.querySelector('.trusted-by-section');
      if (triggerElement) {
        const elementTop = triggerElement.getBoundingClientRect().top + window.scrollY;
        const navbarHeight = 80; // Approximate height of the navbar
        triggerPointRef.current = elementTop - navbarHeight;
      } else {
        // Fallback for pages without the trigger section (e.g., /contact)
        triggerPointRef.current = window.innerHeight;
      }
    };

    // Calculate after a short delay to ensure the DOM is stable
    const timer = setTimeout(calculateTriggerPoint, 100);

    // Cleanup function for the timer
    return () => clearTimeout(timer);
  }, [location]); // Re-calculate when the page/route changes

  // Effect for handling all scroll-based events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const trigger = triggerPointRef.current || window.innerHeight;

      // Logic for hiding/showing the navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > trigger) {
        setIsVisible(false); // Hide if scrolling down AND past the trigger point
      } else {
        setIsVisible(true); // Show in all other cases
      }
      
      // Logic for the "scrolled" glass effect
      setIsScrolled(currentScrollY > 10);
      
      // Update the last scroll position for the next event
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // This effect runs once to add the listener

  // Effect for locking body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);


  return (
    <>
      <nav className={`navbar-final ${isScrolled ? 'scrolled' : ''} ${isVisible ? '' : 'hidden'}`}>
        <div className="brand-container">
          <Link to="/" className="brand-link-wrapper" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
            <div className="logo-bg"></div>
            <img src="/bykorp_logo.png" alt="bykorp logo" className="navbar-logo" />
            <span className={`brand-text ${isScrolled ? 'hidden-text' : ''}`}>bykorp.</span>
          </Link>
        </div>

        {/* --- Hamburger Button for Mobile --- */}
        <button 
          className={`mobile-nav-toggle ${isMobileMenuOpen ? 'is-active' : ''}`} 
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        {/* --- Desktop Navigation --- */}
        <div className="nav-right-section">
          <div className="navbar-pill">
            <ul className="navbar-links-final">
              <li>
                <a href="/#services"><span>Services</span></a>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-links">
                      <h4>Our Services</h4>
                      <a href="#services">Digital Marketing</a>
                      <a href="#services">Website Development</a>
                      <a href="#services">AI Chatbots</a>
                      <a href="#services">AI Automation</a>
                    </div>
                    <div className="mega-menu-feature">
                      <div className="feature-content">
                        <h5>Featured Service</h5>
                        <p>Custom AI Chatbots</p>
                        <span>Harness the power of conversational AI to engage customers 24/7.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/#showcase"><span>Work</span></a>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-links">
                      <h4>Project Categories</h4>
                      <a href="#showcase">AI for E-commerce</a>
                      <a href="#showcase">Workflow Automation</a>
                      <a href="#showcase">NLP & Market Research</a>
                      <a href="#showcase">Healthcare Solutions</a>
                    </div>
                    <div className="mega-menu-feature">
                      <div className="feature-content">
                        <h5>Our Portfolio</h5>
                        <p>Proven Results</p>
                        <span>We deliver measurable impact for our clients through innovative solutions.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/contact"><span>Contact</span></Link>
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-links">
                      <h4>Get in Touch</h4>
                      <Link to="/contact">Request a Quote</Link>
                      <Link to="/contact">Partnerships</Link>
                      <Link to="/contact">General Inquiry</Link>
                    </div>
                    <div className="mega-menu-feature">
                      <div className="feature-content">
                        <h5>Contact Info</h5>
                        <p>hello@bykorp.com</p>
                        <span>+8801630346988</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="navbar-cta-final">
            <Link to="/contact" className="btn-navbar-cta">
              <div className="cta-content">
                <span>Let's talk</span>
                <HiArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-nav-links">
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/#showcase" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Let's talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;