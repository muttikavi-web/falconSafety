import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Balcony Grills',
      icon: '🏢',
      description: 'Premium invisible grills for balconies',
      details: 'Protect your loved ones with our sleek balcony grills that are virtually invisible. Engineered with high-strength steel, these grills provide maximum security while maintaining unobstructed views. Perfect for high-rise apartments and villas.',
      features: ['UV resistant', 'Corrosion proof', '10-year warranty', 'Easy installation'],
      price: '$299-$599'
    },
    {
      id: 2,
      title: 'Window Grills',
      icon: '🪟',
      description: 'Elegant protection for windows',
      details: 'Our window grills combine security with elegance. The invisible design seamlessly integrates with any architectural style while providing comprehensive protection. Ideal for homes and offices.',
      features: ['Custom sizing', 'Weather resistant', 'Low maintenance', 'Professional fitting'],
      price: '$199-$399'
    },
    {
      id: 3,
      title: 'Child Safety Grills',
      icon: '👶',
      description: 'Specialized protection for children',
      details: 'Give peace of mind with our certified child safety grills. Designed specifically to prevent falls while remaining virtually invisible. Meets all international safety standards.',
      features: ['Safety certified', 'Soft touch design', 'Easy cleaning', 'Aesthetic appeal'],
      price: '$249-$449'
    },
    {
      id: 4,
      title: 'Pet Safety Grills',
      icon: '🐾',
      description: 'Keep pets safe and secure',
      details: 'Designed to keep your beloved pets safe without restricting their view. The durable mesh construction prevents escape while maintaining the visual clarity of your space.',
      features: ['Durable mesh', 'Pet friendly', 'Escape proof', 'Easy to install'],
      price: '$199-$349'
    },
    {
      id: 5,
      title: 'Professional Installation',
      icon: '🔧',
      description: 'Expert installation service',
      details: 'Our certified technicians ensure perfect installation. We handle everything from measurement to mounting, guaranteeing a flawless finish and optimal performance.',
      features: ['Free consultation', 'Skilled technicians', '24/7 support', '1-year service warranty'],
      price: 'From $49'
    },
    {
      id: 6,
      title: 'Custom Designs',
      icon: '🎨',
      description: 'Tailored solutions for your needs',
      details: 'Every space is unique. We offer custom design solutions to perfectly match your requirements and architectural style. Let us create the perfect invisible grill system for you.',
      features: ['Custom measurements', 'Design consultation', 'Material options', 'Flexible pricing'],
      price: 'Custom quote'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive invisible grill solutions in Chennai, Vizag, Bangalore & Hyderabad for every security need
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
              style={{ '--index': index }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
            
            <div className="modal-header">
              <span className="modal-icon">{selectedService.icon}</span>
              <h2>{selectedService.title}</h2>
            </div>

            <div className="modal-content">
              <p className="modal-description">{selectedService.details}</p>

              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-pricing">
                <span>Starting Price:</span>
                <p>{selectedService.price}</p>
              </div>

              <div className="modal-actions">
                <button className="btn-cta">Get Quote Now</button>
                <button className="btn-secondary" onClick={() => setSelectedService(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
