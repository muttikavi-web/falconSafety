import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Balcony Invisible Grills',
      icon: '🏢',
      description: 'Premium invisible balcony grills - transparent & safe',
      details: 'Buy Balcony Invisible Grills with premium high-strength steel and transparent design. Our invisible grills provide maximum security while maintaining unobstructed views. Perfect for high-rise apartments and villas. Invisible grill price starts from ₹400/sqft.',
      features: ['UV resistant', 'Transparent mesh', '15-year warranty', 'Easy maintenance', 'Professional installation'],
      price: '₹400-₹800/sqft',
      link: '/balcony-grills-chennai'
    },
    {
      id: 2,
      title: 'Invisible Window Grills',
      icon: '🪟',
      description: 'Invisible window grills - secure & beautiful',
      details: 'Buy Invisible Window Grills that combine security with elegance. Our transparent window grills seamlessly integrate with any architectural style while protecting your home. Best invisible grill price for windows starts at ₹400/sqft.',
      features: ['Custom sizing', 'Weather resistant', 'Transparent view', 'Low maintenance', 'Child safe design'],
      price: '₹400-₹700/sqft',
      link: '/window-grills-chennai'
    },
    {
      id: 3,
      title: 'Child Safety Invisible Grills',
      icon: '👶',
      description: 'Child-safe invisible grills - certified protection',
      details: 'Get Child Safety Invisible Grills that prevent falls while remaining virtually invisible. Safety-certified transparent design. Best invisible grill solution for families with kids. Invisible grill price for child safety starts from ₹450/sqft.',
      features: ['Safety certified', 'Soft touch design', 'Easy to clean', 'Transparent mesh', 'Fall prevention'],
      price: '₹450-₹800/sqft',
      link: '/child-safety-grills'
    },
    {
      id: 4,
      title: 'Pet Safety Invisible Grills',
      icon: '🐾',
      description: 'Pet-safe invisible grills - escape-proof design',
      details: 'Buy Pet Safety Invisible Grills that keep your pets secure without blocking their view. Durable transparent mesh construction prevents escape. Invisible grill price for pets starts from ₹400/sqft.',
      features: ['Durable mesh', 'Pet friendly', 'Escape proof', 'Transparent design', 'Easy installation'],
      price: '₹400-₹700/sqft',
      link: '/#services'
    },
    {
      id: 5,
      title: 'Professional Invisible Grill Installation',
      icon: '🔧',
      description: 'Expert invisible grill installation service',
      details: 'Get professional installation for your invisible grills. Our certified technicians ensure perfect fitting and optimal performance. Free consultation and measurement. Installation completed within 48 hours.',
      features: ['Free consultation', 'Expert technicians', '24/7 support', '1-year warranty', '48-hr installation'],
      price: 'Starting ₹500',
      link: '/invisible-grill-installation-process'
    },
    {
      id: 6,
      title: 'Custom Invisible Grill Design',
      icon: '🎨',
      description: 'Customized invisible grill solutions',
      details: 'Get custom invisible grill solutions designed for your specific needs. We create personalized transparent grill designs for unique spaces. Free design consultation and competitive pricing.',
      features: ['Custom measurements', 'Design consultation', 'Material options', 'Flexible pricing', 'Demo available'],
      price: 'Custom quote',
      link: '/#contact'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Invisible Grills Services - Buy at Best Price</h2>
          <p className="section-subtitle">
            Buy Invisible Window Grills & Balcony Invisible Grills from ₹400-800/sqft in Chennai, Bangalore, Vizag. Premium invisible grill installation with transparent design and lifetime warranty.
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
