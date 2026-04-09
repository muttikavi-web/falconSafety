import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      icon: '🏅',
      title: '15-Year Master Warranty',
      description: 'Comprehensive structural warranty covering all materials and workmanship',
      details: ['15-year coverage', 'Parts replacement included', 'Professional labor covered', 'Easy claim process']
    },
    {
      icon: '✅',
      title: 'International Standards Compliance',
      description: 'Meets all major international safety and quality standards',
      details: ['ASTM certified', 'ISO certified', 'IBC compliant', 'BIS approved (India)']
    },
    {
      icon: '🔬',
      title: '10-Year Rust Guarantee',
      description: '316 Marine-Grade Stainless Steel with rust-free assurance',
      details: ['Zero rust promise', 'Coastal area tested', 'Marine environment proven', 'Salt-spray resistant']
    },
    {
      icon: '🛡️',
      title: 'Safety Certifications',
      description: 'Verified safety standards for child & pet protection',
      details: ['Child safety certified', 'Pet safety approved', 'Load-bearing tested', 'Emergency evacuation compliant']
    }
  ];

  const awards = [
    { year: '2024', award: 'Best Invisible Grill Brand - South India', issuer: 'Home Safety Alliance' },
    { year: '2023', award: '5-Star Customer Satisfaction Rating', issuer: 'Customer Review Platform' },
    { year: '2023', award: 'Premium Quality Award', issuer: 'Indian Stainless Steel Association' },
    { year: '2022', award: 'Innovation in Home Safety', issuer: 'National Construction Council' },
    { year: '2022', award: 'Excellence in Customer Service', issuer: 'Service Industry Board' },
    { year: '2021', award: 'Top Rated Installation Service', issuer: 'Professional Contractors Association' }
  ];

  const stats = [
    { number: '5,000+', label: 'Successful Installations' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '20+', label: 'Years Average Lifespan' },
    { number: '0.5%', label: 'Warranty Claim Rate' },
    { number: '4', label: 'States Covered' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const features = [
    {
      title: 'Premium Materials',
      items: ['316 Marine-Grade Stainless Steel', 'Aerospace-grade cables', 'Premium hardware & fasteners', 'Imported components']
    },
    {
      title: 'Expert Installation',
      items: ['Certified technicians (5+ years experience)', 'Precision equipment used', 'Government-approved installation', 'Safety inspection included']
    },
    {
      title: 'Exceptional Warranty',
      items: ['15-year structural warranty', '10-year rust guarantee', 'Parts replacement included', 'Free annual maintenance check']
    },
    {
      title: 'Professional Support',
      items: ['24/7 customer support hotline', 'Rapid response team', 'Dedicated account manager', 'Proactive maintenance reminders']
    }
  ];

  return (
    <section className="certifications">
      <div className="certifications-container">
        {/* Header */}
        <div className="certifications-header">
          <h2 className="section-title">Certifications, Awards & Trust</h2>
          <p className="section-subtitle">
            Falcon Invisible Grills is trusted by thousands of families because of our commitment to quality, safety, and customer satisfaction
          </p>
        </div>

        {/* Trust Stats */}
        <div className="trust-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="certification-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
              <ul className="cert-details">
                {cert.details.map((detail, i) => (
                  <li key={i}>✓ {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="awards-section">
          <h3 className="awards-title">Recognition & Awards</h3>
          <div className="awards-grid">
            {awards.map((award, idx) => (
              <div key={idx} className="award-card">
                <div className="award-year">{award.year}</div>
                <div className="award-name">{award.award}</div>
                <div className="award-issuer">by {award.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-box">
              <h4 className="feature-title">{feature.title}</h4>
              <ul className="feature-list">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Falcon */}
        <div className="why-falcon">
          <h3>Why Choose Falcon Invisible Grills?</h3>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">🎯</div>
              <h4>Proven Track Record</h4>
              <p>5,000+ successful installations across 4 states with 98% customer satisfaction</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">💎</div>
              <h4>Premium Quality</h4>
              <p>316 Marine-Grade Stainless Steel with aerospace-grade components</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">🛡️</div>
              <h4>Complete Protection</h4>
              <p>15-year warranty, 10-year rust guarantee, and comprehensive safety certifications</p>
            </div>
            <div className="reason-item">
              <div className="reason-icon">👥</div>
              <h4>Expert Team</h4>
              <p>Certified technicians with 5+ years experience and 24/7 customer support</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cert-cta">
          <h3>Invest in Quality. Invest in Safety. Invest in Falcon.</h3>
          <button className="cta-button">
            <a href="tel:+919000888367">Get Your Free Consultation Today</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
