import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Balcony Grills',
      icon: '🏢',
      description: 'Premium invisible grills for balconies',
      details: 'Protect your loved ones with our sleek balcony safety grills that are virtually invisible. Engineered with high-strength steel, these grill systems provide maximum security while maintaining unobstructed views. Perfect for high-rise apartments and villas. Our best-selling balcony grill solution with professional installation.',
      features: ['UV resistant', 'Corrosion proof', '15-year warranty', 'Easy installation', 'Transparent design'],
      price: '₹5,000-₹15,000',
      link: '/balcony-grills-chennai'
    },
    {
      id: 2,
      title: 'Window Grills',
      icon: '🪟',
      description: 'Elegant protection for windows',
      details: 'Our premium window safety grills combine security with elegance. The invisible grill design seamlessly integrates with any architectural style while providing comprehensive protection. Ideal for homes and offices. Best transparent window protection solution available.',
      features: ['Custom sizing', 'Weather resistant', 'Low maintenance', 'Professional fitting', 'Child safe'],
      price: '₹3,000-₹10,000',
      link: '/window-grills-chennai'
    },
    {
      id: 3,
      title: 'Child Safety Grills',
      icon: '👶',
      description: 'Specialized protection for children',
      details: 'Give peace of mind with our certified child safety grills. Designed specifically to prevent falls while remaining virtually invisible. Meets all international safety standards. Our safety-certified invisible grill system protects children without visual obstruction.',
      features: ['Safety certified', 'Soft touch design', 'Easy cleaning', 'Aesthetic appeal', 'Fall prevention'],
      price: '₹4,000-₹12,000',
      link: '/child-safety-grills'
    },
    {
      id: 4,
      title: 'Pet Safety Grills',
      icon: '🐾',
      description: 'Keep pets safe and secure',
      details: 'Designed to keep your beloved pets safe without restricting their view. The durable mesh construction prevents escape while maintaining the visual clarity of your space. Pet-friendly invisible grills that are virtually transparent.',
      features: ['Durable mesh', 'Pet friendly', 'Escape proof', 'Easy to install', 'Transparent view'],
      price: '₹3,000-₹9,000',
      link: '/#services'
    },
    {
      id: 5,
      title: 'Professional Installation',
      icon: '🔧',
      description: 'Expert installation service',
      details: 'Our certified technicians ensure perfect installation. We handle everything from measurement to mounting, guaranteeing a flawless finish and optimal performance. 48-hour professional service with free consultation.',
      features: ['Free consultation', 'Skilled technicians', '24/7 support', '1-year service warranty', '48-hr installation'],
      price: 'Starting ₹500',
      link: '/invisible-grill-installation-process'
    },
    {
      id: 6,
      title: 'Custom Designs',
      icon: '🎨',
      description: 'Tailored solutions for your needs',
      details: 'Every space is unique. We offer custom design solutions for invisible grill systems to perfectly match your requirements and architectural style. Premium custom invisible grill solutions.',
      features: ['Custom measurements', 'Design consultation', 'Material options', 'Flexible pricing', 'Demo available'],
      price: 'Custom quote',
      link: '/#contact'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Invisible Grill Services</h2>
          <p className="section-subtitle">
            Comprehensive invisible grill solutions in Chennai, Bangalore, Vizag & Hyderabad. Premium balcony grills, window grills, child safety grills, and professional transparent grill installation.
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
                {selectedService.link.startsWith('/') ? (
                  <Link to={selectedService.link} className="btn-cta" onClick={() => setSelectedService(null)}>
                    Learn More & Get Quote
                  </Link>
                ) : (
                  <a href={selectedService.link} className="btn-cta" onClick={() => setSelectedService(null)}>
                    Learn More & Get Quote
                  </a>
                )}
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
