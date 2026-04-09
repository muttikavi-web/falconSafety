import React, { useState } from 'react';
import './WhatsAppChat.css';

const WhatsAppChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumber = '918008430800';
  const defaultMessage = 'Hello! I\'m interested in your invisible grills service.';
  
  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* WhatsApp Chat Container */}
      <div className={`whatsapp-chat ${isExpanded ? 'expanded' : ''}`}>
        {/* Message Box (shows when expanded) */}
        {isExpanded && (
          <div className="whatsapp-message-box">
            <div className="message-header">
              <div className="message-header-content">
                <div className="company-name">Falcon Invisible Grills</div>
                <div className="online-status">
                  <span className="status-dot"></span> Online
                </div>
              </div>
              <button 
                className="message-close"
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </button>
            </div>

            <div className="message-body">
              <div className="welcome-message">
                <p>👋 Hi there!</p>
                <p>Welcome to Falcon Invisible Grills. How can we help you today?</p>
              </div>
              
              <div className="quick-options">
                <button className="quick-option" onClick={handleWhatsAppClick}>
                  <span>📐</span> Get Installation Quote
                </button>
                <button className="quick-option" onClick={handleWhatsAppClick}>
                  <span>❓</span> Ask a Question
                </button>
                <button className="quick-option" onClick={handleWhatsAppClick}>
                  <span>🛍️</span> View Products
                </button>
                <button className="quick-option" onClick={handleWhatsAppClick}>
                  <span>📞</span> Call Support
                </button>
              </div>
            </div>

            <div className="message-footer">
              <p>Typically replies instantly</p>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button 
          className="whatsapp-fab"
          onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}
          title="Chat with us on WhatsApp"
        >
          {isExpanded ? '✕' : '💬'}
        </button>

        {/* Floating Info Bubble */}
        {!isExpanded && (
          <div className="whatsapp-bubble">
            <span>💬</span>
            <p>Chat with our selling team</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;
