import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Falcon Invisible Grills</h4>
            <p>
              Premium invisible grill solutions combining security, elegance, and innovation 
              for modern homes and commercial spaces. Serving Chennai, Bangalore, Vizag, and Hyderabad.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/falconvisiblegrill" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/falconvisiblegrill" aria-label="Instagram">📷</a>
              <a href="https://www.youtube.com/falconvisiblegrill" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>City & Location Pages</h4>
            <ul>
              <li><Link to="/invisible-grills-chennai" title="Best invisible grills in Chennai">Invisible Grills Chennai</Link></li>
              <li><Link to="/invisible-grills-bangalore" title="Transparent safety grills Bangalore">Invisible Grills Bangalore</Link></li>
              <li><Link to="/invisible-grills-vizag" title="Premium invisible grills Vizag">Invisible Grills Vizag</Link></li>
              <li><Link to="/invisible-grills-hyderabad" title="Child safe grills Hyderabad">Invisible Grills Hyderabad</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Product Pages</h4>
            <ul>
              <li><Link to="/balcony-grills-chennai" title="Balcony safety grills">Balcony Grills</Link></li>
              <li><Link to="/window-grills-chennai" title="Window protection grills">Window Grills</Link></li>
              <li><Link to="/child-safety-grills" title="Child safe protective grills">Child Safety Grills</Link></li>
              <li><Link to="/transparent-safety-grills" title="Transparent invisible grills">Transparent Grills</Link></li>
              <li><a href="/#services" title="See all grill services">Pet Safety Grills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Invisible Grills Price & Keywords</h4>
            <ul>
              <li><Link to="/invisible-grill-cost" title="Invisible grill price and cost">Invisible Grill Price</Link></li>
              <li><a href="/#services" title="Check invisible window grills">Invisible Window Grills</a></li>
              <li><a href="/#services" title="View balcony invisible grills">Balcony Invisible Grills</a></li>
              <li><Link to="/invisible-grills-chennai" title="Invisible grills in Chennai">Invisible Grills Chennai</Link></li>
              <li><a href="/#services" title="See transparent grills">Transparent Grills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact & Support</h4>
            <p className="footer-contact">
              <span>📞 +91 9000 888 367</span>
              <span>📧 info@falconvisiblegrill.com</span>
              <span>📍 Service Areas: Chennai, Bangalore, Vizag, Hyderabad</span>
            </p>
            <div className="footer-features">
              <span>🏆 15-Year Warranty</span>
              <span>⚡ 48-Hour Installation</span>
              <span>✓ Free Consultation</span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Falcon Invisible Grills. All rights reserved. | Best invisible grills in India | Premium safety solutions
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
