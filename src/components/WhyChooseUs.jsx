import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '⭐',
      title: 'Best Invisible Grills Price',
      description: 'Invisible window grills from ₹400/sqft, balcony invisible grills at lowest cost. Best invisible grill price guaranteed!'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges. Get free invisible grill price quote with on-site measurement'
    },
    {
      id: 3,
      icon: '⚡',
      title: '48-Hour Installation',
      description: 'Professional installation of invisible grills in just 48 hours from confirmation'
    },
    {
      id: 4,
      icon: '🛡️',
      title: '15-Year Warranty',
      description: 'Lifetime support with 15-year warranty on all invisible grills and transparent designs'
    },
    {
      id: 5,
      icon: '✅',
      title: 'Safety Certified',
      description: 'Child-safe invisible grills certified by international safety standards'
    },
    {
      id: 6,
      icon: '🚀',
      title: '15+ Years Experience',
      description: '4500+ happy customers with 4.9/5 rating. Experts in invisible grills installation'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <h2 className="section-title">Why Choose Falcon Invisible Grills?</h2>
          <p className="section-subtitle">
            Best Invisible Grills in Chennai, Bangalore, Vizag. Buy Invisible Window Grills from ₹400/sqft, Balcony Invisible Grills at lowest price. Trusted by 4500+ customers.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="why-cta">
          <p>Ready to experience the Falcon difference?</p>
          <button className="cta-button">Book Free Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
