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
          <h2 className="about-title">About Falcon Invisible Grills - Buy at Best Price</h2>
          
          <p className="about-description">
            Falcon Invisible Grills is the #1 provider of premium Invisible Grills in Chennai, Bangalore, Vizag, and Hyderabad. 
            We specialize in <strong>Invisible Window Grills</strong> and <strong>Balcony Invisible Grills</strong> with transparent design. 
            Our invisible grill price starts from just ₹400/sqft - the most affordable invisible grills in the market. 
            For over 15 years, we've been protecting families with our innovative transparent security solutions across South India. 
            Trusted by 4500+ satisfied customers with 4.9/5 rating. Get your invisible grill price quote today - completely free!
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Expert Craftsmanship in Invisible Grills</h4>
                <p>Precision engineering with transparent design and attention to every detail</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Customer Focused Service</h4>
                <p>Your satisfaction is our highest priority. Professional installation within 48 hours</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Innovative Safety Solutions</h4>
                <p>Latest transparent netting technology for balcony, window, and child safety applications</p>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">✓</div>
              <div>
                <h4>Trusted by Thousands</h4>
                <p>Over 4500 satisfied customers across Chennai, Bangalore, Vizag, and Hyderabad</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">15+</span>
              <span className="about-stat-label">Years Excellence</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">4500+</span>
              <span className="about-stat-label">Happy Families</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">4.9/5</span>
              <span className="about-stat-label">Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
