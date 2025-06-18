// client/src/components/TrustedBy.js
import React from 'react';

import { useInView } from 'react-intersection-observer';

const AnimatedDiv = ({ children }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>{children}</div>;
};

// Replace with your actual client logos
const clientLogos = [
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/spotify.com",
    "https://logo.clearbit.com/slack.com",
    "https://logo.clearbit.com/dropbox.com",
    "https://logo.clearbit.com/shopify.com",
];

function TrustedBy() {
  return (
    <section className="trusted-by-section">
      <AnimatedDiv>
        <h4 className="trusted-by-title">TRUSTED BY INDUSTRY LEADERS</h4>
        <div className="logos-container">
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Client logo ${index + 1}`} className="client-logo" />
          ))}
        </div>
      </AnimatedDiv>
    </section>
  );
}

export default TrustedBy;