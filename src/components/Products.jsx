import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Balcony Invisible Grills',
      icon: '🏢',
      price: '₹8,000 - ₹25,000',
      description: 'Premium protection for balconies with unobstructed views',
      features: [
        'Crystal-clear views without obstruction',
        'High-tensile stainless steel cables',
        'UV resistant and weather-proof',
        'Prevents accidental falls',
        'Professional installation included',
        'Free 1-year service warranty',
        'Low maintenance & easy cleaning',
        'Customizable for any balcony size'
      ],
      benefits: [
        'Enjoy panoramic city views safely',
        'Perfect for high-rise apartments',
        'Modern aesthetic appeal',
        'Safe for children and pets',
        'Long lifespan (25+ years)',
        'Affordable long-term investment'
      ],
      suitableFor: 'Apartments, Villas, Penthouses, High-rise Buildings'
    },
    {
      id: 2,
      name: 'Window Invisible Grills',
      icon: '🪟',
      price: '₹5,000 - ₹15,000',
      description: 'Safety grills for windows maintaining natural light and view',
      features: [
        'Maintains natural light and ventilation',
        'Prevents burglary and break-ins',
        'Child safety certified',
        'Pet-proof design available',
        'Easy to clean and maintain',
        'Corrosion-resistant materials',
        'Custom fit for any window size',
        'Professional installation with warranty'
      ],
      benefits: [
        'Enhanced home security',
        'Invisible to outside viewers',
        'Keeps pests out',
        'No obstruction of views',
        'Complies with safety standards',
        'Peace of mind for families'
      ],
      suitableFor: 'Residential Homes, Offices, Educational Institutions, Commercial Spaces'
    },
    {
      id: 3,
      name: 'Child Safety Grills',
      icon: '👶',
      price: '₹6,000 - ₹18,000',
      description: 'Specialized grills designed to prevent child falls and accidents',
      features: [
        'Safety certified by international standards',
        'Narrow cable spacing (8-10cm)',
        'Soft, rounded components',
        'No sharp edges or pinch points',
        'Super strong yet gentle design',
        'Tested for durability and safety',
        'Meets child safety regulations',
        'Easy to install and maintain'
      ],
      benefits: [
        'Your child\'s safety is guaranteed',
        'Peace of mind for parents',
        'Proven effective against accidents',
        'Modern and aesthetic design',
        'Complies with all safety norms',
        'Recommended by pediatricians'
      ],
      suitableFor: 'Family Homes, Nurseries, Daycare Centers, Multi-story Residences'
    },
    {
      id: 4,
      name: 'Pet Safety Grills',
      icon: '🐾',
      price: '₹6,500 - ₹16,000',
      description: 'Secure enclosures for pets without restricting their view',
      features: [
        'Prevents pet escapes',
        'Stops birds and pests from entering',
        'Allows natural light and air flow',
        'Pets can see outside freely',
        'Durable mesh construction',
        'Easy to clean after pet contact',
        'Safe for cats, dogs, and birds',
        'Custom sizing available'
      ],
      benefits: [
        'Keep your pets safe and contained',
        'They can enjoy views and fresh air',
        'Prevents neighborhood nuisances',
        'Reduces veterinary risks',
        'Pet-friendly while secure',
        'No animal cruelty concerns'
      ],
      suitableFor: 'Pet Owners, Apartments with Pets, Villas, Pet Shelters'
    },
    {
      id: 5,
      name: 'Professional Installation Service',
      icon: '🔧',
      price: '₹2,000 - ₹5,000',
      description: 'Expert installation by certified technicians ensuring perfect fit',
      features: [
        'Free site consultation',
        'Accurate measurements',
        'Professional mounting',
        'Safety testing included',
        'Complete cleanup after work',
        'Installation warranty provided',
        '24/7 customer support',
        'Flexible scheduling'
      ],
      benefits: [
        'Installation done by experts',
        'Perfect alignment and tension',
        'Safety standards guaranteed',
        'No hidden costs',
        'Quick turnaround time',
        'Long-term support included'
      ],
      suitableFor: 'All invisible grill installations across Chennai, Hyderabad, Vizag, Bangalore'
    },
    {
      id: 6,
      name: 'Custom Design Solutions',
      icon: '🎨',
      price: 'Custom Quote',
      description: 'Tailored invisible grills designed specifically for your needs',
      features: [
        'Design consultation included',
        'Custom measurements',
        'Material selection guidance',
        'Unique design options',
        'Flexible pricing',
        'Special requirements handled',
        'Timeline planning',
        'Ongoing support'
      ],
      benefits: [
        'Perfect fit for any space',
        'Matches your specific needs',
        'Unique and personalized solutions',
        'Expert recommendations',
        'Quality assured',
        'Long-term satisfaction guaranteed'
      ],
      suitableFor: 'Complex Installations, Irregular Shapes, Special Requirements, Premium Projects'
    }
  ];

  return (
    <section className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="section-title">Our Products & Services</h2>
          <p className="section-subtitle">
            Comprehensive invisible grill solutions for every need across Chennai, Hyderabad, Vizag, and Bangalore
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="product-btn">View Details →</button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>✕</button>

            <div className="product-modal-content">
              <div className="product-modal-header">
                <span className="product-modal-icon">{selectedProduct.icon}</span>
                <h1>{selectedProduct.name}</h1>
                <p className="product-modal-price">{selectedProduct.price}</p>
              </div>

              <div className="product-modal-body">
                <p className="product-modal-description">{selectedProduct.description}</p>

                <div className="product-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-section">
                  <h3>Benefits</h3>
                  <ul className="benefits-list">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-section">
                  <h3>Suitable For</h3>
                  <p className="suitable-for">{selectedProduct.suitableFor}</p>
                </div>

                <div className="product-cta">
                  <p>Ready to get this product? Contact us for a free consultation!</p>
                  <button className="cta-btn">
                    <a href="tel:+919000888367">Get Free Quote</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
