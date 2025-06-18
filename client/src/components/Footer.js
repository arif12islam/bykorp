// client/src/components/Footer.js - UPDATED FOR ROUTING
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight } from "react-icons/hi2";

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleNewsletterSubmit = (e) => { e.preventDefault(); alert("Thank you for subscribing!"); };

  return (
    <footer className="footer-redesigned">
      <div className="footer-content">
        <div className="footer-column about">
          <p>We have a relentless desire to challenge the status quo, and deep digital expertise across hundreds of brands and verticals.</p>
          <Link to="/contact" className="btn-footer-cta"> {/* Changed to Link */}
            <span>Let's talk</span><HiArrowRight />
          </Link>
        </div>
        <div className="footer-column newsletter">
          <p>Get the latest from bykorp—research-driven strategies and data-backed trends designed to fuel your brand's growth.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input className='email' type="email" placeholder="Email*" required />
            <button type="submit" className="btn-sub-cta"><span>Subscribe</span><HiArrowRight /></button>
          </form>
        </div>
      </div>
      <div className="sub-footer">
        <div className="social-links">
          <a href="https://github.com/arif12islam" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/company/bykorp" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/a_arifbhuiyan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <p className="copyright">&copy; {currentYear} bykorp. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;