import React, { useState } from 'react';
import './IndustrySolutions.css';

const IndustrySolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: 1,
      title: 'Schools & Educational Institutions',
      icon: '🏫',
      shortDesc: 'Safe learning environments for students',
      applications: ['Classroom Windows', 'Dormitory Windows', 'Cafeteria Areas', 'Administrative Offices'],
      benefits: [
        'Prevents accidental falls from windows',
        'Allows fresh air and natural light',
        'International safety standard compliance',
        'Creates psychological freedom for students',
        'Zero incidents in 5+ years across installations',
        'Parent confidence increase',
        'Enhanced institutional reputation'
      ],
      features: [
        'Special child-safe cable spacing (8-10cm)',
        'Load-bearing capacity verified by authorities',
        'Fire safety evacuation routes clear',
        'Professional installation with certification',
        '15-year structural warranty'
      ],
      caseStudy: 'A premium school in Chennai with 400+ students installed invisible grills across 150+ windows. Result: Zero safety incidents, significant increase in parent trust, and enhanced building aesthetics.',
      investment: '₹50,000 - ₹200,000 per institution'
    },
    {
      id: 2,
      title: 'Commercial Buildings & Offices',
      icon: '🏢',
      shortDesc: 'Professional security for corporate spaces',
      applications: ['Office Buildings', 'IT Parks', 'Retail Stores', 'Conference Rooms'],
      benefits: [
        'Enhanced security without prison-bar appearance',
        'Professional aesthetic maintained',
        'Property value enhancement',
        'Reduced liability insurance premiums',
        'Theft prevention with beautiful design',
        'Employee safety perception increase',
        'Rental rate justification'
      ],
      features: [
        'Premium 316 Marine-Grade Stainless Steel',
        'Customizable designs for corporate aesthetics',
        'Multi-floor coordination capability',
        'Minimal business disruption during installation',
        'After-hours installation options available'
      ],
      caseStudy: 'An IT company in Bangalore installed invisible grills in executive offices and server rooms. Result: Zero burglaries since installation, enhanced professional image, and positive customer feedback.',
      investment: '₹100,000 - ₹300,000+ for multi-floor buildings'
    },
    {
      id: 3,
      title: 'Hospitals & Healthcare Facilities',
      icon: '🏥',
      shortDesc: 'Patient safety in medical environments',
      applications: ['Patient Windows', 'Mental Health Units', 'Pediatric Wards', 'Psychiatric Care'],
      benefits: [
        'Prevents patient falls from windows',
        'Maintains sterile environment compatibility',
        'No interference with medical equipment',
        'Invisible to patients (psychological benefit)',
        'Allows natural light for healing',
        'Infection control standards maintained',
        'Emergency evacuation routes safe'
      ],
      features: [
        'Chemical-free, medical-grade materials',
        'Non-magnetic for MRI compatibility',
        'Easy disinfection surfaces',
        'Structural integrity for patient safety',
        'International healthcare standards compliance'
      ],
      caseStudy: 'A 200-bed hospital in Hyderabad installed invisible grills in psychiatric and pediatric wards. Result: Significant reduction in window-related incidents, improved patient mental health outcomes, and enhanced hospital reputation.',
      investment: '₹80,000 - ₹250,000 depending on facility size'
    },
    {
      id: 4,
      title: 'Retail & Shopping Malls',
      icon: '🛍️',
      shortDesc: 'Security and elegance for retail spaces',
      applications: ['High-End Retail Stores', 'Shopping Malls', 'Jewelry Shops', 'Electronics Retailers'],
      benefits: [
        'Prevention of burglaries and theft',
        'Merchandise security maintained',
        'Customer safety perception enhanced',
        'Store aesthetics preserved (no visible bars)',
        'Professional upscale appearance',
        'Insurance premium optimization',
        'After-hours protection'
      ],
      features: [
        'Premium 316 stainless steel for durability',
        'Customizable cable spacing for unique needs',
        'Seamless integration with storefront design',
        'Easy access from inside for emergency exit',
        'Professional installation with certifications'
      ],
      caseStudy: 'A luxury retail store in Vizag installed invisible grills in display windows and storage areas. Result: Zero burglaries, enhanced store prestige, increased customer confidence, and improved sales.',
      investment: '₹40,000 - ₹150,000 per store location'
    },
    {
      id: 5,
      title: 'Hotels & Hospitality',
      icon: '🏨',
      shortDesc: 'Guest safety and luxury ambiance',
      applications: ['Guest Rooms', 'Suite Balconies', 'Executive Floors', 'Premium Accommodations'],
      benefits: [
        'Guest safety from accidental falls',
        'Balcony security without visible bars',
        'Maintains room aesthetic and view',
        'Luxury property image enhancement',
        'Guest satisfaction increase',
        'Insurance liability reduction',
        'International standards compliance'
      ],
      features: [
        'Elegant design that complements interiors',
        'Custom sizing for various room types',
        'Silent, invisible operation',
        'Premium finishes available',
        'Minimal maintenance required'
      ],
      caseStudy: 'A 5-star resort in Bangalore installed invisible grills in all 150 rooms. Result: Enhanced guest safety feeling, increased repeat customer bookings, 15% increase in occupancy rates.',
      investment: '₹200,000 - ₹500,000+ for multi-room installations'
    },
    {
      id: 6,
      title: 'Residential High-Rises',
      icon: '🏙️',
      shortDesc: 'Family safety in apartment buildings',
      applications: ['Residential Apartments', 'Family Units', 'Balconies', 'Multi-Unit Buildings'],
      benefits: [
        'Child and pet safety priority',
        'Maintains open, spacious feeling',
        'Unobstructed scenic views',
        'Property value enhancement',
        'Modern aesthetic appeal',
        'No maintenance burden',
        'Long-term investment security'
      ],
      features: [
        '20-25 year lifespan',
        'No repainting ever required',
        'Child-safe cable spacing options',
        'Professional installation included',
        '15-year comprehensive warranty'
      ],
      caseStudy: 'A residential complex in Chennai with 500+ units retrofitted with invisible grills. Result: 100% resident satisfaction, enhanced building value, reduced insurance claims, increased new lease applications.',
      investment: '₹8,000 - ₹25,000 per residential unit'
    }
  ];

  return (
    <section className="industry-solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className="section-title">Industry Solutions</h2>
          <p className="section-subtitle">
            Customized invisible grill solutions for schools, commercial buildings, healthcare, and more
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="solution-card"
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-desc">{solution.shortDesc}</p>
              <button className="details-btn">View Details →</button>
            </div>
          ))}
        </div>
      </div>

      {selectedSolution && (
        <div className="solution-modal-overlay" onClick={() => setSelectedSolution(null)}>
          <div className="solution-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSolution(null)}>✕</button>
            
            <div className="solution-modal-content">
              <div className="solution-modal-header">
                <span className="solution-modal-icon">{selectedSolution.icon}</span>
                <h1>{selectedSolution.title}</h1>
                <p className="solution-tagline">{selectedSolution.shortDesc}</p>
              </div>

              <div className="solution-modal-body">
                <div className="solution-section">
                  <h3>Applications</h3>
                  <ul className="applications-list">
                    {selectedSolution.applications.map((app, idx) => (
                      <li key={idx}>✓ {app}</li>
                    ))}
                  </ul>
                </div>

                <div className="solution-section">
                  <h3>Key Benefits</h3>
                  <ul className="benefits-list">
                    {selectedSolution.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="solution-section">
                  <h3>Technical Features</h3>
                  <ul className="features-list">
                    {selectedSolution.features.map((feature, idx) => (
                      <li key={idx}>⚙️ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="solution-section">
                  <h3>Real-World Success Story</h3>
                  <p className="case-study">{selectedSolution.caseStudy}</p>
                </div>

                <div className="solution-section investment">
                  <h3>Investment Range</h3>
                  <p className="investment-amount">{selectedSolution.investment}</p>
                </div>
              </div>

              <div className="solution-cta">
                <p>Ready to implement invisible grills for your facility?</p>
                <button className="solution-cta-btn">
                  <a href="tel:+919000888367">Get Free Consultation Today</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustrySolutions;
