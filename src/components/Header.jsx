import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
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
            <li><Link to="/invisible-grills-chennai" onClick={() => setMenuOpen(false)}>Chennai</Link></li>
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
