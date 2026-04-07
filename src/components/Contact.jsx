import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', address: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions? We're here to help. Contact us for a free consultation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! We'll contact you shortly.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Phone</h4>
              <p>+91 9000 888 367</p>
              <p>+91 9876 543 210</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h4>Email</h4>
              <p>info@falconinvisiblegrills.com</p>
              <p>support@falconinvisiblegrills.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Address</h4>
              <p>123 Premium Street</p>
              <p>Tech City, TC 123456</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h4>Hours</h4>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
