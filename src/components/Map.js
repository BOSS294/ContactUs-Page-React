// src/components/Map.js
import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096646!2d144.9537353153158!3d-37.8162793797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f8a8ff%3A0x5045675218ce7e33!2s123%20Tech%20Street%2C%20Silicon%20Valley%2C%20CA%2094043%2C%20United%20States!5e0!3m2!1sen!2sin!4v1626948477616!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
