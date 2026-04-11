import React, { useState } from 'react';
import './PricingTiers.css';

const PricingTiers = () => {
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    {
      id: 1,
      name: 'Standard Quality',
      price: '₹300-400/sqft',
      color: '#64B5F6',
      features: [
        { label: 'Wire Thickness', value: '2mm Stainless Steel' },
        { label: 'Cable Coating', value: 'Standard (No nylon)' },
        { label: 'Platform', value: '2mm Standard' },
        { label: 'Gap Between Cables', value: '2 inch (5cm)' },
        { label: 'Weight Capacity', value: '200kg' },
        { label: 'Warranty', value: '2 Year Warranty' },
        { label: 'Installation', value: 'Free Professional Installation' },
        { label: 'Maintenance', value: 'Annual cleaning recommended' }
      ],
      bestFor: 'Budget-conscious customers, rental properties',
      ideal: 'Standard residential use'
    },
    {
      id: 2,
      name: 'Premium Quality',
      price: '₹500-650/sqft',
      color: '#d4af37',
      features: [
        { label: 'Wire Thickness', value: '3mm 316 Stainless Steel' },
        { label: 'Cable Coating', value: 'Premium Nylon Coated' },
        { label: 'Platform', value: '3mm Powder Coated' },
        { label: 'Gap Between Cables', value: '2 inch (5cm)' },
        { label: 'Weight Capacity', value: '400kg' },
        { label: 'Warranty', value: '15 Year Warranty' },
        { label: 'Installation', value: 'Free 48-Hour Installation' },
        { label: 'Maintenance', value: 'Free first year maintenance' }
      ],
      bestFor: 'Most homeowners, apartments, villas',
      ideal: 'Best value & durability',
      recommended: true
    },
    {
      id: 3,
      name: 'Luxury Quality',
      price: '₹700-850/sqft',
      color: '#FFD700',
      features: [
        { label: 'Wire Thickness', value: '4mm Premium 316L Stainless' },
        { label: 'Cable Coating', value: 'Advanced UV-Resistant Coating' },
        { label: 'Platform', value: '4mm Reinforced Powder Coat' },
        { label: 'Gap Between Cables', value: '1.5 inch (4cm) - Extra Safe' },
        { label: 'Weight Capacity', value: '600kg' },
        { label: 'Warranty', value: 'Lifetime Warranty' },
        { label: 'Installation', value: 'Free 24-Hour Premium Installation' },
        { label: 'Maintenance', value: 'Free lifetime maintenance' }
      ],
      bestFor: 'Premium homes, high-rise buildings, commercial spaces',
      ideal: 'Maximum durability & prestige'
    }
  ];

  const selectedTierData = tiers.find(tier => tier.id === selectedTier);

  return (
    <section className="pricing-tiers">
      <div className="tiers-container">
        <div className="tiers-header">
          <h2 className="section-title">Invisible Grills Quality Tiers - Choose Your Price & Quality</h2>
          <p className="section-subtitle">
            Select from three quality levels with detailed specifications. All include professional installation, warranty, and free consultation.
          </p>
        </div>

        {/* Tier Selection Buttons */}
        <div className="tier-buttons">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              className={`tier-btn ${selectedTier === tier.id ? 'active' : ''}`}
              onClick={() => setSelectedTier(tier.id)}
              style={selectedTier === tier.id ? { borderColor: tier.color, backgroundColor: `${tier.color}15` } : {}}
            >
              <span className="tier-name">{tier.name}</span>
              <span className="tier-price">{tier.price}</span>
            </button>
          ))}
        </div>

        {/* Detailed Tier Information */}
        {selectedTierData && (
          <div className="tier-details">
            <div className="tier-header-info" style={{ borderTopColor: selectedTierData.color }}>
              <div className="tier-title-section">
                <h3 style={{ color: selectedTierData.color }}>{selectedTierData.name}</h3>
                {selectedTierData.recommended && (
                  <span className="recommended-badge">🌟 Most Popular</span>
                )}
              </div>
              <div className="tier-price-section">
                <span className="price-label">Starting From</span>
                <span className="price-value" style={{ color: selectedTierData.color }}>
                  {selectedTierData.price}
                </span>
              </div>
            </div>

            <div className="tier-benefits">
              <div className="benefits-info">
                <p><strong>Best For:</strong> {selectedTierData.bestFor}</p>
                <p><strong>Ideal For:</strong> {selectedTierData.ideal}</p>
              </div>

              <div className="specifications-grid">
                {selectedTierData.features.map((feature, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="spec-label">{feature.label}</span>
                    <span className="spec-value">{feature.value}</span>
                  </div>
                ))}
              </div>

              <div className="tier-cta">
                <button className="btn-quote" style={{ backgroundColor: selectedTierData.color }}>
                  Get Quote for {selectedTierData.name}
                </button>
                <button className="btn-whatsapp">
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="comparison-section">
          <h3>Quick Comparison</h3>
          <div className="comparison-table">
            <div className="comp-row header">
              <div className="comp-cell">Feature</div>
              {tiers.map(tier => (
                <div key={tier.id} className="comp-cell">{tier.name}</div>
              ))}
            </div>
            
            {[
              { label: 'Wire Thickness', values: ['2mm', '3mm', '4mm'] },
              { label: 'Coating Type', values: ['Standard', 'Nylon Coated', 'UV Resistant'] },
              { label: 'Weight Capacity', values: ['200kg', '400kg', '600kg'] },
              { label: 'Price Range', values: ['₹300-400/sqft', '₹500-650/sqft', '₹700-850/sqft'] },
              { label: 'Warranty', values: ['2 Years', '15 Years', 'Lifetime'] },
              { label: 'Installation', values: ['Free', 'Free 48H', 'Free 24H'] },
            ].map((row, idx) => (
              <div key={idx} className="comp-row">
                <div className="comp-cell label">{row.label}</div>
                {row.values.map((value, vidx) => (
                  <div key={vidx} className="comp-cell">✓ {value}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
