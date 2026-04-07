import './Hero.css';
import { useState, useEffect } from 'react';
import AestheticView from '../assets/AestheticView.jpg';
import Durability from '../assets/DurabilityAndLowMaaintanece.jpg';
import EcoFriendly from '../assets/EcoFriendly.png';
import EnhancedSafety from '../assets/Enhancedsafety.jpeg';
import PetProtection from '../assets/petsProtection.jpeg';
import UnobstructedViews from '../assets/unObstructedViews.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { id: 1, src: AestheticView, title: 'Aesthetic Design' },
    { id: 2, src: Durability, title: 'Durability & Low Maintenance' },
    { id: 3, src: EcoFriendly, title: 'Eco Friendly' },
    { id: 4, src: EnhancedSafety, title: 'Enhanced Safety' },
    { id: 5, src: PetProtection, title: 'Pet Protection' },
    { id: 6, src: UnobstructedViews, title: 'Unobstructed Views' }
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">🚀 Premium Safety Solution</span>
          <h1>Invisible Grills for Premium Protection</h1>
          <p>Experience ultimate safety without compromising on views. Our advanced invisible netting technology protects your family while maintaining crystal-clear visibility.</p>
          
          <div className="hero-cta">
            <button className="btn-primary">
              <a href="tel:+919000888367">Get Free Estimate</a>
            </button>
            <button className="btn-secondary">Watch Demo</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Installations</p>
            </div>
            <div className="stat">
              <h3>99.9%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Years Warranty</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-carousel">
            <div className="carousel-wrapper">
              {heroImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="carousel-title">{image.title}</div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators">
              {heroImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
