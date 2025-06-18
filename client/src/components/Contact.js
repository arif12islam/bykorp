// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- YOUR EMAILJS KEYS GO HERE ---
    const serviceID = 'service_wizesa5';
    const templateID = 'template_vui3vfu';
    const publicKey = 'hk45qnXkvKw0AmEuw';
    // ---------------------------------

    // The object that will be sent to your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'AI Agency Admin', // You can customize this
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! It has been sent successfully.');
        // Clear the form
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Have a project in mind? We'd love to hear from you.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your full name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email address"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Write your query here..."
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

}

export default Contact;