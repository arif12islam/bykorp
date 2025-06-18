// client/src/components/Showcase.js - FINAL VERSION
import React from 'react';

import { useInView } from 'react-intersection-observer';
// Note: We no longer import the Chatbot component into this file
import { 
  HiOutlineShoppingCart, 
  HiOutlineBolt, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineSparkles, 
  HiOutlineShieldCheck 
} from "react-icons/hi2";

const AnimatedDiv = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>{children}</div>;
};

function Showcase() {
  return (
    <section className="showcase-section" id="showcase">
      <AnimatedDiv>
        <h2 className="showcase-title">Our Work in Action</h2>
      </AnimatedDiv>
      
      {/* The Chatbot Demo container that you screenshotted has been removed from this version. */}

      <div className="portfolio-grid">

        <AnimatedDiv>
          <a href="#" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-item-header">
              <HiOutlineShoppingCart className="portfolio-icon" />
              <h4>Retail Support Bot</h4>
            </div>
            <p>Increased e-commerce sales by 15% with an AI-powered chatbot that automated 80% of customer inquiries.</p>
          </a>
        </AnimatedDiv>

        <AnimatedDiv>
          <a href="#" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-item-header">
              <HiOutlineBolt className="portfolio-icon" />
              <h4>Workflow Automation Agent</h4>
            </div>
            <p>Saved a major client over 20 hours of manual work per week by automating their data entry and report generation workflows.</p>
          </a>
        </AnimatedDiv>
        
        <AnimatedDiv>
          <a href="#" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-item-header">
              <HiOutlineChatBubbleLeftRight className="portfolio-icon" />
              <h4>NLP for Market Research</h4>
            </div>
            <p>Delivered key market sentiment insights by building an NLP model to analyze thousands of customer reviews for a new product.</p>
          </a>
        </AnimatedDiv>

        <AnimatedDiv>
          <a href="#" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-item-header">
              <HiOutlineSparkles className="portfolio-icon" />
              <h4>E-commerce AI Advisor</h4>
            </div>
            <p>Boosted average order value by 25% with a sophisticated AI agent that provides personalized product recommendations.</p>
          </a>
        </AnimatedDiv>

        <AnimatedDiv>
          <a href="#" target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="portfolio-item-header">
              <HiOutlineShieldCheck className="portfolio-icon" />
              <h4>Healthcare Triage Bot</h4>
            </div>
            <p>Reduced clinic wait times with a HIPAA-compliant chatbot for preliminary symptom checking and appointment scheduling.</p>
          </a>
        </AnimatedDiv>
        
      </div>
    </section>
  );
}

export default Showcase;