// src/components/Services.js - UPDATED CONTENT
import React from 'react';

// Import new icons for the new services
import { HiOutlineMegaphone, HiOutlineCodeBracket, HiOutlineChatBubbleLeftRight, HiOutlineCpuChip } from "react-icons/hi2";
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ children, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`service-card fade-in-section ${inView ? 'is-visible' : ''}`}>
      <div className="icon-wrapper">{icon}</div>
      {children}
    </div>
  );
};

const IconWrapper = ({ children }) => (
  <div style={{
    backgroundColor: 'var(--color-accent-blue)', color: 'white', borderRadius: '50%',
    width: '50px', height: '50px', display: 'flex', alignItems: 'center',
    justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.75rem'
  }}>
    {children}
  </div>
);

function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Core Services</h2>
      <div className="services-container">

        <AnimatedCard icon={<HiOutlineMegaphone />}>
          <h3>Digital Marketing</h3>
          <p>Full-service social media management, content creation, and targeted marketing campaigns to build your brand and engage your audience.</p>
        </AnimatedCard>
        
        <AnimatedCard icon={<HiOutlineCodeBracket />}>
          <h3>Website Development</h3>
          <p>From simple landing pages to complex web applications, we build beautiful, high-performance websites that achieve your business goals.</p>
        </AnimatedCard>

        <AnimatedCard icon={<HiOutlineChatBubbleLeftRight />}>
          <h3>AI Chatbots</h3>
          <p>We build intelligent, conversational chatbots powered by the latest AI to enhance customer experience and automate support 24/7.</p>
        </AnimatedCard>

        <AnimatedCard icon={<HiOutlineCpuChip />}>
          <h3>AI Automation</h3>
          <p>Develop sophisticated AI agents that automate complex workflows, analyze data, and provide actionable insights to save you time and money.</p>
        </AnimatedCard>

      </div>
    </section>
  );
}

export default Services;