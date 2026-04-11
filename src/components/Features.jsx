import React from 'react';
import './Features.css';
import EnhancedSafety from '../assets/Enhancedsafety.jpeg';
import UnobstructedViews from '../assets/unObstructedViews.png';
import PetProtection from '../assets/petsProtection.jpeg';
import EcoFriendly from '../assets/EcoFriendly.png';
import Durability from '../assets/DurabilityAndLowMaaintanece.jpg';
import AestheticView from '../assets/AestheticView.jpg';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Maximum Security',
      description: 'High-strength materials engineered for ultimate protection and durability',
      image: EnhancedSafety,
      alt: 'Maximum security invisible grill protecting home from intruders and falls'
    },
    {
      id: 2,
      icon: '✨',
      title: 'Invisible Design',
      description: 'Seamlessly blends with architecture - modern protection without compromise',
      image: UnobstructedViews,
      alt: 'Invisible grill design providing crystal clear unobstructed views'
    },
    {
      id: 3,
      icon: '🐾',
      title: 'Pet Safe',
      description: 'Perfect for protecting pets while maintaining a clear, unobstructed view',
      image: PetProtection,
      alt: 'Pet safety invisible grill system protecting dogs and cats'
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Eco Friendly',
      description: 'Sustainable materials that are environmentally conscious and durable',
      image: EcoFriendly,
      alt: 'Eco-friendly sustainable invisible grill materials'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Low Maintenance',
      description: 'Durable construction requires minimal upkeep and maintenance over years',
      image: Durability,
      alt: 'Low maintenance invisible grill with minimal care requirements'
    },
    {
      id: 6,
      icon: '💎',
      title: 'Premium Quality',
      description: 'Best-in-class materials and craftsmanship for lasting performance',
      image: AestheticView,
      alt: 'Premium quality invisible grill with best-in-class craftsmanship'
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Why Choose Falcon Invisible Grills?</h2>
          <p className="section-subtitle">
            Buy Invisible Grills at best price - Invisible Window Grills from ₹400/sqft, Balcony Invisible Grills from ₹400/sqft. Premium transparent design with 4500+ installations across Chennai, Bangalore, Vizag, and Hyderabad.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={feature.id} className="feature-card" style={{ '--index': index }}>
              <div className="feature-image">
                <img src={feature.image} alt={feature.alt} title={feature.alt} />
              </div>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
