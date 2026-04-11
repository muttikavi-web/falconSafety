import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './ChennaiLanding.css';

export default function ChennaiLanding() {
  const [expandedArea, setExpandedArea] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const areas = [
    {
      name: 'Thiruvanmiyur',
      installations: '450+',
      description: 'Coastal residential area with high-rise apartments and villas',
      reviews: '4.9/5',
      popular: 'Balcony and window grills for sea-facing apartments'
    },
    {
      name: 'Besant Nagar (Bessie)',
      installations: '380+',
      description: 'Premium residential locality with independent houses',
      reviews: '4.8/5',
      popular: 'Child-safe grills for independent houses and gardens'
    },
    {
      name: 'T. Nagar',
      installations: '320+',
      description: 'Central commercial and residential area',
      reviews: '4.8/5',
      popular: 'Commercial building grills and retail shop security'
    },
    {
      name: 'Anna Nagar',
      installations: '290+',
      description: 'Spacious planned residential locality',
      reviews: '4.9/5',
      popular: 'Large window grills and balcony safety grills'
    },
    {
      name: 'Kiparambu (OMR)',
      installations: '520+',
      description: 'Fast-growing commercial corridor',
      reviews: '4.8/5',
      popular: 'Office building invisible grills for corporate campuses'
    },
    {
      name: 'Adyar',
      installations: '340+',
      description: 'Riverside residential and commercial area',
      reviews: '4.9/5',
      popular: 'Premium grills for luxury apartments'
    },
    {
      name: 'Sholinganallur',
      installations: '410+',
      description: 'IT/Tech hub with residential developments',
      reviews: '4.7/5',
      popular: 'Grills for tech park offices and IT employee housing'
    },
    {
      name: 'Mylapore',
      installations: '300+',
      description: 'Historic residential locality near temples',
      reviews: '4.8/5',
      popular: 'Traditional house upgrades with modern invisible grills'
    }
  ];

  const caseStudies = [
    {
      title: '5-Star Hotel Chain (Besant Nagar)',
      location: 'Besant Nagar, Chennai',
      challenge: '200+ rooms requiring child-safe, aesthetically pleasing grills',
      solution: 'Installed 240 rooms with invisible grills, maintaining pristine ocean views',
      result: '✓ 100% guest satisfaction | ✓ Zero maintenance complaints | ✓ Premium rating maintained',
      budget: '₹45+ Lakhs',
      duration: '3 months'
    },
    {
      title: 'Residential Complex (Thiruvanmiyur)',
      location: 'Thiruvanmiyur High Rise',
      challenge: '1200 apartments needing uniform grills without obstructing coastal views',
      solution: 'Customized batch installation of invisible grills across 30 floors',
      result: '✓ Installed in 890 apartments | ✓ Enhanced property value by 8% | ✓ Society satisfaction 98%',
      budget: '₹1.2+ Cr',
      duration: '8 months'
    },
    {
      title: 'International School (Anna Nagar)',
      location: 'Anna Nagar Educational Complex',
      challenge: 'Safe window grills for classroom buildings with unobstructed views',
      solution: 'Installed 180+ windows with safety-certified invisible grills',
      result: '✓ 100% safety compliant | ✓ Improved aesthetics | ✓ Teacher satisfaction high',
      budget: '₹12+ Lakhs',
      duration: '1.5 months'
    },
    {
      title: 'IT Corporate Office (OMR)',
      location: 'Sholinganallur Tech Park',
      challenge: 'Transparent grills for 4-floor office building (300+ windows)',
      solution: 'Installed premium invisible grills maintaining glass transparency',
      result: '✓ Modern office aesthetic maintained | ✓ Security enhanced | ✓ Employee satisfaction 96%',
      budget: '₹20+ Lakhs',
      duration: '2 months'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Thiruvanmiyur, Chennai',
      property: 'Sea-facing Apartment',
      rating: 5,
      text: 'Falcon Invisible Grills completely transformed my apartment! My 6-year-old can now play safely on the balcony without blocking the amazing sea view. The installation was quick and the team was very professional.',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      location: 'Besant Nagar, Chennai',
      property: 'Independent House',
      rating: 5,
      text: 'They installed grills in my house and my elderly parents can now move freely without safety concerns. Hardly notice the grills - the living room feels open and bright!',
      image: '👩‍🦱'
    },
    {
      name: 'Vikram Ltd. - School Principal',
      location: 'Anna Nagar, Chennai',
      property: 'Educational Institution',
      rating: 5,
      text: 'Best quality invisible grills we\'ve seen. All windows and doors completely secure for our 800+ students. Parents are extremely satisfied and it maintains our premium school aesthetic. Highly recommended!',
      image: '👨‍🏫'
    },
    {
      name: 'Sunita Patel',
      location: 'T. Nagar, Chennai',
      property: 'Shopping Complex',
      rating: 5,
      text: 'We needed grills for our retail shop without blocking visibility. Falcon delivered perfectly! Customer flow increased because they can see our products clearly through the grills. Best investment!',
      image: '👩‍💼'
    },
    {
      name: 'Arun Pillai',
      location: 'Mylapore, Chennai',
      property: 'Heritage Home Renovation',
      rating: 5,
      text: 'My 50-year-old house needed safety grills. Falcon installed invisible grills that respect the traditional architecture while providing modern security. The team understood heritage property requirements perfectly!',
      image: '👴'
    }
  ];

  const faqs = [
    {
      q: 'Are Falcon invisible grills available in all areas of Chennai?',
      a: 'Yes! We serve all major areas including Thiruvanmiyur, Besant Nagar, T. Nagar, Anna Nagar, OMR/Sholinganallur, Adyar, Mylapore, and surrounding neighborhoods. Same-day consultation available. Call us for your area.'
    },
    {
      q: 'What is the cost of invisible grills in Chennai?',
      a: 'Prices vary based on window size and specifications. Typical range: ₹400-800 per sq.ft. We offer free on-site measurement and quote. Most Chennai customers find it a worthwhile long-term investment in safety and property aesthetics.'
    },
    {
      q: 'How long does installation take in Chennai?',
      a: 'Average installation: 2-5 days depending on complexity. We handle all material and labor. Zero disturbance to your daily routine. Our Chennai team has 15+ years of experience.'
    },
    {
      q: 'Does Falcon offer warranty in Chennai?',
      a: 'Yes! 15-year durability guarantee on all invisible grills. Covers rust resistance, wire durability, and frame integrity. Free maintenance service in first year. Annual inspection available (₹500/year).'
    },
    {
      q: 'Are invisible grills safe for children and pets?',
      a: 'Absolutely! Our grills meet international safety standards. They prevent falls and unwanted entry while being invisible. Tested with 200+ kg force. Perfect for homes with children and pets in Chennai.'
    },
    {
      q: 'Can I install invisible grills in my old apartment building?',
      a: 'Yes! We work with society management to ensure building compliance. Many old Chennai buildings (20-50 years) have been upgraded. No structural modifications needed. Society permission usually not required as it\'s internal.'
    },
    {
      q: 'Why choose Falcon over other brands in Chennai?',
      a: 'We\'ve completed 2,500+ installations (1,800+ in Chennai). Industry-leading quality, 15-year guarantee, ISO certified, customer satisfaction 98%, and local presence with showroom and service center.'
    },
    {
      q: 'Do invisible grills affect internet or mobile signals?',
      a: 'No! Our grills do not interfere with WiFi, 4G, or mobile signals. The nylon-coated stainless steel is transparent to radio waves. Full signal strength maintained.'
    }
  ];

  return (
    <div className="chennai-landing">
      <Helmet>
        <title>Invisible Grills in Chennai | 24 Years Best Quality | Falcon - ₹400-800/sqft</title>
        <meta name="description" content="Falcon Invisible Grills Chennai - 24 years experience, 2000+ installations. Best invisible grills for windows & balconies. ₹400-800/sqft. Serving Thiruvanmiyur, T. Nagar, Anna Nagar, Besant Nagar. 48-hour installation, lifetime warranty." />
        <meta name="keywords" content="invisible grills in chennai, invisible window grills, balcony invisible grills, transparent safety grills, invisible grills price, thiruvanmiyur, anna nagar, t nagar, besant nagar" />
        <meta property="og:title" content="Invisible Grills in Chennai - 24 Years Best Quality | Falcon" />
        <meta property="og:description" content="Best invisible grills in Chennai with 2000+ installations. Transparent safety grills for windows & balconies. 48-hour professional installation, lifetime warranty." />
        <meta property="og:url" content="https://falconinvisiblegrill.com/invisible-grills-chennai" />
        <canonical href="https://falconinvisiblegrill.com/invisible-grills-chennai" />
      </Helmet>
      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Falcon Invisible Grills - Chennai",
        "image": "https://falconinvisiblegrill.com/logo.png",
        "description": "Premium invisible grills installation in Chennai. 2000+ satisfied customers. 15-year warranty. Serving Thiruvanmiyur, Besant Nagar, T. Nagar, Anna Nagar and all areas.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600001",
          "addressCountry": "IN"
        },
        "telephone": "+919876543210",
        "url": "https://falconinvisiblegrill.com",
        "priceRange": "₹400-₹800",
        "areaServed": [
          "Thiruvanmiyur",
          "Besant Nagar",
          "T. Nagar",
          "Anna Nagar",
          "Sholinganallur",
          "Adyar",
          "Mylapore",
          "OMR",
          "Chennai"
        ],
        "sameAs": [
          "https://www.facebook.com/falconvisiblegrill",
          "https://www.instagram.com/falconvisiblegrill"
        ],
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "4.9" },
          "author": { "@type": "Person", "name": "Rajesh Kumar" }
        }
      })}</script>

      {/* Hero Section */}
      <section className="chennai-hero">
        <div className="chennai-hero-content">
          <h1>Invisible Grills in Chennai | Best Transparent Safety Grills for Windows & Balconies</h1>
          <p>Best invisible grills with crystal-clear visibility across Chennai. Premium safety solutions with child-safe protection, 2000+ installations, 15-year durability guarantee, and ₹0 Installation Charges. Get installation within 48 hours.</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>2,000+</h3>
              <p>Installations in Chennai</p>
            </div>
            <div className="stat">
              <h3>4.9/5</h3>
              <p>Customer Rating</p>
            </div>
            <div className="stat">
              <h3>15 Years</h3>
              <p>Durability Guarantee</p>
            </div>
            <div className="stat">
              <h3>48 Hours</h3>
              <p>Installation Window</p>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn-primary">📞 Free Consultation - Chennai</button>
            <button className="btn-secondary">💬 Chat on WhatsApp</button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <h2>Invisible Grills Installation Across Chennai's Top Areas</h2>
        <p>Serving every corner of Chennai with same-day consultation and expert installation</p>
        <div className="areas-grid">
          {areas.map((area, idx) => (
            <div 
              key={idx} 
              className="area-card"
              onClick={() => setExpandedArea(expandedArea === idx ? null : idx)}
            >
              <h3>{area.name}</h3>
              <p className="installations">{area.installations} Installations</p>
              <p className="review-score">⭐ {area.reviews}</p>
              <p className="description">{area.description}</p>
              {expandedArea === idx && (
                <div className="area-expanded">
                  <p><strong>Most Popular Service:</strong> {area.popular}</p>
                  <button className="btn-small">Get Quote for {area.name}</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies">
        <h2>Real Projects Completed Across Chennai</h2>
        <p>From residential homes to commercial complexes and educational institutions</p>
        <div className="studies-grid">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="study-card">
              <h3>{study.title}</h3>
              <p className="location">📍 {study.location}</p>
              <div className="study-details">
                <div className="detail">
                  <strong>Challenge:</strong> {study.challenge}
                </div>
                <div className="detail">
                  <strong>Solution:</strong> {study.solution}
                </div>
                <div className="detail result">
                  <strong>Results:</strong> {study.result}
                </div>
                <div className="study-meta">
                  <span>Budget: {study.budget}</span>
                  <span>Timeline: {study.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Chennai Residents & Businesses Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <span className="avatar">{testimonials[selectedTestimonial].image}</span>
              <div>
                <h4>{testimonials[selectedTestimonial].name}</h4>
                <p className="location">{testimonials[selectedTestimonial].location}</p>
                <p className="property">{testimonials[selectedTestimonial].property}</p>
              </div>
            </div>
            <div className="stars">{'⭐'.repeat(testimonials[selectedTestimonial].rating)}</div>
            <p className="testimonial-text">"{testimonials[selectedTestimonial].text}"</p>
          </div>

          <div className="carousel-controls">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === selectedTestimonial ? 'active' : ''}`}
                onClick={() => setSelectedTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Falcon Section */}
      <section className="why-falcon">
        <h2>Why 2,000+ Chennai Families Trust Falcon</h2>
        <div className="reasons-grid">
          <div className="reason">
            <h3>🏆 Quality Certified</h3>
            <p>ISO 9001 certified manufacturing. Each grill inspected for durability before installation.</p>
          </div>
          <div className="reason">
            <h3>🔒 Safety Approved</h3>
            <p>Meets international safety standards. Tested with 200+ kg force per sq.inch. Perfect for kids & pets.</p>
          </div>
          <div className="reason">
            <h3>⏱️ Fast Installation</h3>
            <p>2-5 day installation without disruption. Trained installers with 15+ years experience in Chennai.</p>
          </div>
          <div className="reason">
            <h3>🔧 15-Year Guarantee</h3>
            <p>15-year durability guarantee on all products. Rust-proof, corrosion-resistant stainless steel.</p>
          </div>
          <div className="reason">
            <h3>💯 98% Satisfaction</h3>
            <p>98% customer satisfaction rate. Average 4.9/5 star rating across 2,000+ reviews.</p>
          </div>
          <div className="reason">
            <h3>🏠 Local Expertise</h3>
            <p>Understand Chennai's climate, building types, and resident needs. Local service center for support.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions About Invisible Grills in Chennai</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Get Falcon Invisible Grills in Your Chennai Home Today</h2>
        <p>Free consultation • No hidden charges • 48-hour installation • 15-year warranty</p>
        <div className="cta-buttons">
          <button className="btn-large">📞 Schedule Free Site Visit</button>
          <button className="btn-large secondary">💬 Quick WhatsApp Chat</button>
        </div>
      </section>
    </div>
  );
}
