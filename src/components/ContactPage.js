// src/components/ContactPage.js
import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

import '.././ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <ContactDetails />
        <ContactForm />

      </div>
    </div>
  );
};

export default ContactPage;
