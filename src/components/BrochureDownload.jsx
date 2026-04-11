import React, { useState } from 'react';
import './BrochureDownload.css';

const BrochureDownload = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to backend or WhatsApp
    const message = `Hi! I'm interested in invisible grills. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}, City: ${formData.city}`;
    window.open(`https://wa.me/919000888367?text=${encodeURIComponent(message)}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: '', message: '' });
    }, 3000);
  };

  return (
    <section className="brochure-download">
      <div className="brochure-container">
        <div className="brochure-content">
          <div className="brochure-left">
            <div className="brochure-icon">📄</div>
            <h2>Download Free Invisible Grills Brochure</h2>
            <p className="brochure-subtitle">
              Complete pricing guide, product specifications, quality tiers, and installation details
            </p>
            
            <ul className="brochure-features">
              <li>✓ Detailed Pricing Breakdown</li>
              <li>✓ Quality Tiers Comparison</li>
              <li>✓ Technical Specifications</li>
              <li>✓ Installation Process</li>
              <li>✓ Warranty Information</li>
              <li>✓ Free Consultation Offer</li>
              <li>✓ Before & After Photos</li>
              <li>✓ Customer Testimonials</li>
            </ul>

            <div className="brochure-stats">
              <div className="stat">
                <strong>4500+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="stat">
                <strong>4.9/5</strong>
                <span>Customer Rating</span>
              </div>
              <div className="stat">
                <strong>₹300-850/sqft</strong>
                <span>Price Range</span>
              </div>
            </div>
          </div>

          <div className="brochure-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We'll send the brochure to your WhatsApp shortly!</p>
                <p>You can also check your email for the PDF brochure.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="brochure-form">
                <h3>Get Your Free Brochure Now</h3>
                <p>Fill in your details to download the complete pricing & specifications guide</p>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Vizag">Vizag</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your questions or requirements (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                <button type="submit" className="btn-download">
                  📥 Download Brochure on WhatsApp
                </button>

                <p className="form-note">
                  We'll send the brochure via WhatsApp + email. No spam, just valuable information!
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
