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
    { id: 1, src: AestheticView, title: 'Aesthetic Design', alt: 'Modern invisible grill installation with aesthetic design maintaining unobstructed views' },
    { id: 2, src: Durability, title: 'Durability & Low Maintenance', alt: 'Durable invisible grills with low maintenance requirements lasting 25+ years' },
    { id: 3, src: EcoFriendly, title: 'Eco Friendly', alt: 'Eco-friendly invisible grill system made from sustainable materials' },
    { id: 4, src: EnhancedSafety, title: 'Enhanced Safety', alt: 'Enhanced safety invisible grill protecting family from falls and intrusions' },
    { id: 5, src: PetProtection, title: 'Pet Protection', alt: 'Pet safety invisible grill protecting cats and dogs while maintaining views' },
    { id: 6, src: UnobstructedViews, title: 'Unobstructed Views', alt: 'Premium invisible grill providing unobstructed views impossible to see from outside' }
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
      <div className="hero-carousel-background">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide-bg ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
            title={image.alt}
            aria-label={image.alt}
          ></div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">🚀 Premium Safety Solution</span>
          <h1>Invisible Grills for<br />Premium Protection</h1>
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
    </section>
  );
}
