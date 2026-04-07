import React from 'react';
import './TrustBadges.css';

const TrustBadges = () => {
  const badges = [
    {
      id: 1,
      icon: '🏅',
      title: '5-Year Warranty',
      subtitle: 'Complete Protection'
    },
    {
      id: 2,
      icon: '✅',
      title: 'ISO Certified',
      subtitle: 'Quality Assured'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Safety Approved',
      subtitle: 'Standards Compliant'
    },
    {
      id: 4,
      icon: '💯',
      title: '99.9% Satisfaction',
      subtitle: 'Customer Rated'
    },
    {
      id: 5,
      icon: '🚚',
      title: 'Free Installation',
      subtitle: 'No Hidden Charges'
    },
    {
      id: 6,
      icon: '🔧',
      title: '24/7 Support',
      subtitle: 'Expert Assistance'
    }
  ];

  return (
    <section className="trust-badges">
      <div className="badges-container">
        <div className="badges-grid">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-item">
              <div className="badge-icon">{badge.icon}</div>
              <h4 className="badge-title">{badge.title}</h4>
              <p className="badge-subtitle">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="trust-promise">
          <h3>Our Promise to You</h3>
          <p>We stand behind every product with our comprehensive guarantee. Your satisfaction is our guarantee.</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
