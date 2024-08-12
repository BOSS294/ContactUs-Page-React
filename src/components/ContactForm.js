// src/components/ContactForm.js
import React, { useState } from 'react';
import '.././ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to send the message (Assuming you have set up the API)
      setNotification('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form data
      setTimeout(() => setNotification(''), 5000); // Hide notification after 5 seconds
    } catch (error) {
      setNotification('Failed to send message.');
      setTimeout(() => setNotification(''), 5000); // Hide notification after 5 seconds
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {notification && <div className={`notification ${notification.includes('successfully') ? 'success' : 'error'}`}>{notification}</div>}
    </div>
  );
};

export default ContactForm;
