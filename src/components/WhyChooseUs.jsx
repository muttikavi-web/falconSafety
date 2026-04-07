import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: '⭐',
      title: 'Premium Quality',
      description: 'Highest grade materials and expert craftsmanship ensure your grills last for decades'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Best Value',
      description: 'Competitive pricing without compromising on quality or durability'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Fast Installation',
      description: 'Professional team completes installation in just 2-3 days'
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Lifetime Support',
      description: 'Free maintenance and support for the lifetime of your product'
    },
    {
      id: 5,
      icon: '✅',
      title: 'Certified Safe',
      description: 'ISO certified and approved by safety standards authorities'
    },
    {
      id: 6,
      icon: '🚀',
      title: 'Expert Team',
      description: '15+ years of experience with trained and certified professionals'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <h2 className="section-title">Why Choose Falcon?</h2>
          <p className="section-subtitle">
            The most trusted invisible grills brand in the region
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
