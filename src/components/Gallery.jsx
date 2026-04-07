import React, { useState, useEffect } from 'react';
import './Gallery.css';
import AestheticView from '../assets/AestheticView.jpg';
import balconyview from '../assets/balconyview.jpg';
import Durability from '../assets/DurabilityAndLowMaaintanece.jpg';
import EcoFriendly from '../assets/EcoFriendly.png';
import EnhancedSafety from '../assets/Enhancedsafety.jpeg';
import PetProtection from '../assets/petsProtection.jpeg';
import UnobstructedViews from '../assets/unObstructedViews.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      title: 'Aesthetic View',
      category: 'Design',
      description: 'Beautiful invisible grills that blend seamlessly with your home decor',
      fullDescription: 'Our aesthetic invisible grills are specifically designed to enhance the beauty of your living space. With premium stainless steel construction and sleek design, these grills provide complete security while maintaining unobstructed views. Perfect for modern homes where style matters as much as safety.',
      src: AestheticView
    },
    {
      id: 2,
      title: 'Balcony View',
      category: 'Installation',
      description: 'Professional installation on balconies for unobstructed city views',
      fullDescription: 'Transform your balcony into a secure yet open space. Our expert installation team ensures perfect fitting and alignment on all balcony configurations. The transparent design keeps your panoramic city views intact while protecting your family from accidental falls and unauthorized access.',
      src: balconyview
    },
    {
      id: 3,
      title: 'Durability & Low Maintenance',
      category: 'Features',
      description: 'High-strength materials built to last for decades with minimal upkeep',
      fullDescription: 'Built to last! Our invisible grills are crafted from premium stainless steel that withstands harsh weather conditions and doesn\'t rust. Minimal maintenance is required - just occasional cleaning with soap and water. Enjoy 5+ years of worry-free protection without degradation or fading.',
      src: Durability
    },
    {
      id: 4,
      title: 'Eco Friendly',
      category: 'Sustainability',
      description: 'Environmentally conscious solutions for modern homes',
      fullDescription: 'We\'re committed to sustainability! Our invisible grills use eco-friendly materials and manufacturing processes. The long lifespan means less replacement waste, and the transparent design maximizes natural light, reducing your energy consumption. Make a responsible choice for your family and the environment.',
      src: EcoFriendly
    },
    {
      id: 5,
      title: 'Enhanced Safety',
      category: 'Safety',
      description: 'Advanced safety features to protect your family and loved ones',
      fullDescription: 'Safety is paramount! Our grills are certified by international safety standards and tested for strength and durability. High-tensile stainless steel wires can support weight without breaking. Perfect for homes with children, seniors, and pets - providing peace of mind 24/7.',
      src: EnhancedSafety
    },
    {
      id: 6,
      title: 'Pet Protection',
      category: 'Safety',
      description: 'Safe and secure protection for your beloved pets',
      fullDescription: 'Keep your furry friends safe! These grills prevent pets from escaping or falling from heights while maintaining ventilation and light. The transparent design allows pets to see outside while staying protected. Safe spacing ensures no small pets can squeeze through.',
      src: PetProtection
    },
    {
      id: 7,
      title: 'Unobstructed Views',
      category: 'Design',
      description: 'Enjoy clear, panoramic views without any visual barriers',
      fullDescription: 'Experience true transparency! Unlike traditional bars or grilles, our invisible grills are virtually see-through. Enjoy stunning city views, natural scenery, and beautiful sunsets from your windows and balconies without any visual obstruction. Security doesn\'t mean sacrificing your view!',
      src: UnobstructedViews
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Showcase of our finest invisible grill installations
          </p>
        </div>

        {/* Main Carousel */}
        <div className="gallery-carousel">
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={prevSlide}>
              ❮
            </button>
            <div className="carousel-main">
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].title}
                className="carousel-image"
                onClick={() => setSelectedImage(images[currentSlide])}
              />
              <div className="carousel-info">
                <h3>{images[currentSlide].title}</h3>
                <span className="carousel-category">{images[currentSlide].category}</span>
              </div>
            </div>
            <button className="carousel-button next" onClick={nextSlide}>
              ❯
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              style={{ '--index': index }}
            >
              <div className="gallery-image">
                <img src={image.src} alt={image.title} />
              </div>
              <div className="gallery-info">
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full-size Image */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p className="modal-category">{selectedImage.category}</p>
              <p className="modal-description">{selectedImage.description}</p>
              <p className="modal-full-description">{selectedImage.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
