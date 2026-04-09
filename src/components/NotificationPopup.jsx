import React, { useState, useEffect } from 'react';
import './NotificationPopup.css';

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after 1 second of app load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    // WhatsApp link format: https://wa.me/{country_code}{phone_number}
    window.open('https://wa.me/918008430800', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="notification-overlay">
      <div className="notification-popup">
        <button className="notification-close" onClick={handleClose}>✕</button>
        
        <div className="notification-content">
          <div className="notification-icon">👋</div>
          
          <h3 className="notification-title">Welcome to Falcon Invisible Grills!</h3>
          
          <p className="notification-message">
            Get instantly in touch with our team. Ask about our premium invisible grills, 
            installation services, and special offers.
          </p>

          <div className="notification-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Instant Response</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span>Expert Guidance</span>
            </div>
          </div>

          <div className="notification-buttons">
            <button className="whatsapp-cta" onClick={handleWhatsApp}>
              <span className="whatsapp-icon">💬</span>
              Chat on WhatsApp Now
            </button>
            <button className="dismiss-btn" onClick={handleClose}>
              Maybe Later
            </button>
          </div>

          <p className="notification-footer">
            📱 WhatsApp: +91 8008430800 | Always available
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
