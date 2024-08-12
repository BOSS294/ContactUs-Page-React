// src/components/ContactDetails.js
import React from 'react';
import '../ContanctDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="details-item">
        <h3>Support Emails</h3>
        <p>support@example.com</p>
        <p>helpdesk@example.com</p>
        <p>info@example.com</p>
      </div>
      <div className="details-item">
        <h3>Contact Numbers</h3>
        <p>+1 234 567 890</p>
        <p>+1 987 654 321</p>
        <p>+1 555 666 777</p>
      </div>
      <div className="details-item">
        <h3>Address</h3>
        <p>123 Tech Street</p>
        <p>Silicon Valley, CA 94043</p>
        <p>United States</p>
      </div>
    </div>
  );
};

export default ContactDetails;
