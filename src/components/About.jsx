import React from 'react';
import './About.css';
import OwnerProfile from '../assets/OwnerProfile.jpeg';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-wrapper">
            <img src={OwnerProfile} alt="Falcon Invisible Grills team and founder - 15+ years of expertise in invisible grill installation" title="Falcon Invisible Grills Expert Team" />
          </div>
        </div>

        <div className="about-content">
          <h2 className="about-title">About Falcon Invisible Grills</h2>
          
          <p className="about-description">
            At Falcon, we redefine security with invisible elegance. For over 15 years, we've been 
            crafting premium invisible grills that protect what matters most without compromising 
            the beauty of your space.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Expert Craftsmanship</h4>
                <p>Precision engineering with attention to every detail</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Customer Focused</h4>
                <p>Your satisfaction is our highest priority and commitment</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Innovative Solutions</h4>
                <p>Latest technology integrated into timeless designs</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Trusted by Thousands</h4>
                <p>Over 10,000 satisfied customers across the region</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">15+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">10K+</span>
              <span className="about-stat-label">Happy Customers</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">99.9%</span>
              <span className="about-stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
