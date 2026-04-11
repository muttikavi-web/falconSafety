import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    propertyType: '',
    budget: '',
    urgency: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send lead data to backend for tracking and WhatsApp
      const leadData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'website_contact_form'
      };

      // Log to API or send to WhatsApp
      await fetch('/api/track-visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...leadData,
          type: 'lead_submission'
        })
      }).catch(err => console.log('Lead tracking:', err));

      // Show success message
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        city: '',
        propertyType: '',
        budget: '',
        urgency: '',
        message: '' 
      });

    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in invisible grills. Name: ${formData.name}, Phone: ${formData.phone}, City: ${formData.city}`;
    window.open(`https://wa.me/918008430800?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get Free Invisible Grill Price Quote</h2>
          <p className="section-subtitle">
            Get free invisible grills price quote. Buy invisible window grills & balcony invisible grills at best price. Professional consultation & 48-hour installation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
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
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
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
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Vizag">Vizag</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="">Property Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Educational">Educational</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Budget Range</option>
                    <option value="Below 10K">₹Below 10,000</option>
                    <option value="10K-25K">₹10,000 - 25,000</option>
                    <option value="25K-50K">₹25,000 - 50,000</option>
                    <option value="50K+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="">When do you need it?</option>
                  <option value="Immediate">Immediate (within a week)</option>
                  <option value="Soon">Soon (within a month)</option>
                  <option value="Planning">Planning (3+ months)</option>
                  <option value="Just Exploring">Just Exploring</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements (optional)"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="form-submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Get Free Consultation'}
                </button>
                <button 
                  type="button" 
                  className="whatsapp-direct"
                  onClick={handleWhatsAppClick}
                >
                  💬 Chat on WhatsApp
                </button>
              </div>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! We'll contact you shortly or chat on WhatsApp.
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
              <p>info@falconvisiblegrill.com</p>
              <p>support@falconvisiblegrill.com</p>
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
