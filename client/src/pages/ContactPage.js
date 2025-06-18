// src/pages/ContactPage.js
import React from 'react';
import Contact from '../components/Contact';

function ContactPage() {
  // We can add a wrapper div for styling if needed
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '50px' }}>
      <Contact />
    </div>
  );
}

export default ContactPage;