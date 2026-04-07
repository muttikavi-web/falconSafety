import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Apartment Owner',
      content: 'Falcon\'s invisible grills have been a game-changer for our family. Perfect security without compromising the view!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Villa Owner',
      content: 'Excellent craftsmanship and professional installation. Highly recommended to anyone looking for quality and aesthetics.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Arjun Patel',
      role: 'Residential Complex Manager',
      content: 'Installed in 50+ apartments. Customer satisfaction has been outstanding. Great value for investment.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Trusted by thousands of satisfied customers across the region
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card" style={{ '--index': index }}>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Join Our Happy Customers</h3>
          <p>Experience the Falcon difference with premium invisible grills</p>
          <button className="cta-button">Get Your Free Quote Today</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
