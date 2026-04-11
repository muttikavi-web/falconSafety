import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false);
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <span className="logo-icon">🦅</span>
            <div className="logo-text">
              <h1>Falcon</h1>
              <p>Invisible Grills</p>
            </div>
          </div>
        </Link>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
            <li className="dropdown">
              <a href="#cities" onClick={(e) => { e.preventDefault(); }}>Cities ▼</a>
              <ul className="dropdown-menu">
                <li><Link to="/invisible-grills-chennai" title="Best invisible grills in Chennai">Chennai Grills</Link></li>
                <li><Link to="/invisible-grills-bangalore" title="Premium invisible grills Bangalore">Bangalore Grills</Link></li>
                <li><Link to="/invisible-grills-vizag" title="Transparent grills Vizag">Vizag Grills</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#products" onClick={(e) => { e.preventDefault(); }}>Products ▼</a>
              <ul className="dropdown-menu">
                <li><Link to="/balcony-grills-chennai" title="Balcony safety grills">Balcony Grills</Link></li>
                <li><Link to="/window-grills-chennai" title="Window security grills">Window Grills</Link></li>
                <li><Link to="/child-safety-grills" title="Child safe protective grills">Child Safety</Link></li>
              </ul>
            </li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </nav>

        <button className="cta-button">
          <a href="tel:+919000888367">Get Quote</a>
        </button>
      </div>
    </header>
  );
}
