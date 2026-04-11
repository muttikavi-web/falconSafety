import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What is the price of invisible grills?',
      answer: 'Invisible grill price starts from ₹400-800 per square foot depending on material and quality. Window invisible grills cost ₹400-700/sqft, balcony invisible grills cost ₹400-800/sqft. Get a free invisible grill price quote - we\'ll visit your site and give exact pricing based on your requirements.'
    },
    {
      id: 2,
      question: 'How much does invisible window grills cost?',
      answer: 'Invisible window grills typically cost between ₹400-700 per sq.ft for standard installations. A small window (10 sqft) costs ₹4,000-7,000, medium windows (15-20 sqft) cost ₹6,000-14,000. We provide the best invisible grill price with free consultation and on-site measurement.'
    },
    {
      id: 3,
      question: 'What is the cost of balcony invisible grills?',
      answer: 'Balcony invisible grills cost ₹400-800 per sq.ft depending on size and material. A typical 1 BHK balcony (30-50 sqft) costs ₹12,000-40,000. We offer the best price for balcony invisible grills in Chennai, Bangalore, and Vizag with professional installation.'
    },
    {
      id: 4,
      question: 'Are invisible grills safe for children and pets?',
      answer: 'Yes! Our child-safe invisible grills are specifically designed to prevent falls. Our pet-safe invisible grills are durable and escape-proof. Both are certified to international safety standards and trusted by thousands of families. Transparent design maintains visibility while providing complete safety.'
    },
    {
      id: 5,
      question: 'Can invisible window grills be installed on all windows?',
      answer: 'Our invisible window grills can be installed on virtually all window types - sliding, casement, fixed, awning windows, and more. We handle curved, corner windows, and special shapes too. Free consultation to assess your specific window requirements.'
    },
    {
      id: 6,
      question: 'How much maintenance for invisible grills?',
      answer: 'Minimal maintenance needed! Invisible grills just need occasional cleaning with mild soap and water every 3-6 months. No rust treatment, no repainting required. We provide free maintenance for the first year.' 
    },
    {
      id: 7,
      question: 'What is best invisible grill material?',
      answer: 'Best invisible grills are made from 304 or 316 stainless steel for maximum durability. 316-grade is superior for coastal areas. Both are corrosion-resistant and last 25+ years. We offer premium nylon options too. Choose based on your location and budget.'
    },
    {
      id: 8,
      question: 'Do you offer custom invisible grill designs?',
      answer: 'Absolutely! We customize invisible grills with different materials (304/316 stainless), cable colors, spacing options for children/pets, and unique designs. Our team creates custom solutions matching your home\'s style while meeting your security needs.'
    },
    {
      id: 9,
      question: 'Can invisible grills withstand extreme weather?',
      answer: 'Yes! Our invisible grills withstand heavy rains, strong winds, and coastal salt spray. Premium 316-grade stainless steel provides superior corrosion resistance. Invisible grills maintain integrity for 25+ years even in challenging environments like Chennai and Vizag.'
    },
    {
      id: 10,
      question: 'Do invisible grills prevent burglaries?',
      answer: 'Yes! High-tensile stainless steel cables in invisible grills cannot be easily cut. Secure installation prevents prying and entry. Burglars face significant noise and damage attempting to bypass invisible grills. Insurance companies often offer discounts.'
    },
    {
      id: 11,
      question: 'Are transparent invisible grills better than metal grills?',
      answer: 'Yes! Invisible grills offer major advantages: they maintain unobstructed views (traditional grills block views), require zero maintenance (traditional need regular painting), last 25+ years (traditional grills 8-10 years), are weather-resistant (traditional rust easily), and look modern (traditional look old-fashioned). Though initial cost is higher, long-term value is superior.'
    },
    {
      id: 12,
      question: 'Can invisible grills be removed or replaced?',
      answer: 'Yes, invisible grills can be removed or replaced if needed. The installation uses minimal damage to window frames. Removal is simple and the grills can be reinstalled elsewhere. This flexibility makes them ideal for rental properties or if you plan to relocate.'
    },
    {
      id: 13,
      question: 'What material options are available?',
      answer: 'We offer Stainless Steel 304 (good corrosion resistance, cost-effective) and Stainless Steel 316 (premium, superior corrosion resistance, ideal for coastal areas). Both come with professional installation, warranty, and free maintenance. We recommend 316 for Chennai and Vizag due to salt spray environment.'
    },
    {
      id: 14,
      question: 'Are invisible grills visible from outside?',
      answer: 'No! The thin stainless steel wires are virtually invisible from both inside and outside. From a distance, they are impossible to detect. This maintains your home\'s aesthetic appeal while providing maximum security. The discrete design doesn\'t announce security measures to potential burglars.'
    },
    {
      id: 15,
      question: 'Do you serve all areas of Chennai, Hyderabad, Vizag, and Bangalore?',
      answer: 'Yes! We provide professional installation services across all major areas and suburbs of Chennai, Hyderabad, Visakhapatnam (Vizag), and Bangalore. This includes old city areas, new developments, suburbs, and outlying regions. We also serve smaller towns in TN, AP, KA, and TS states. Contact us for your specific location.'
    },
    {
      id: 16,
      question: 'What is the installation process like?',
      answer: 'Process: 1) Free consultation and measurement, 2) Design approval, 3) Material sourcing, 4) Professional installation (2-3 hours), 5) Safety testing, 6) Quality inspection, 7) Documentation and warranty registration. Our team handles everything - you just relax and enjoy your new secure space!'
    },
    {
      id: 17,
      question: 'Do invisible grills affect views or natural light?',
      answer: 'Not at all! That\'s the biggest advantage. Unlike traditional metal grills that block views and reduce light by 20-30%, invisible grills are completely transparent. You get 100% of the natural light and unobstructed panoramic views while enjoying maximum security.'
    },
    {
      id: 18,
      question: 'How are invisible grills superior for pet owners?',
      answer: 'Invisible grills keep pets safely contained while they enjoy views and fresh air. Unlike cages or confined spaces, pets can see outside, reducing anxiety. The durable mesh prevents escapes and keeps wild animals out. It\'s the perfect solution for cat lovers and dog owners who want freedom without risk.'
    },
    {
      id: 19,
      question: 'What payment options are available?',
      answer: 'We offer flexible payment options: Full payment upfront (on free quote), 50% advance + balance on completion, EMI schemes (12, 24, 36 months), credit card, net banking, and digital payments. Discounts available for multiple installations. Transparent pricing with no hidden charges.'
    },
    {
      id: 20,
      question: 'What if I have concerns after installation?',
      answer: '24/7 Customer Support: Call us anytime with questions or concerns. Free maintenance visits for the first year. Regular inspection service available. Any defects are fixed promptly under warranty. We stand behind our work and ensure complete customer satisfaction. Our team is always ready to help!'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="section-title">Invisible Grills Price & FAQ - Buy at Best Price</h2>
          <p className="section-subtitle">
            Find answers about invisible grills cost, invisible window grills price, balcony invisible grills pricing, and more
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                style={{ '--index': index }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-toggle">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div className="faq-card">
              <h3>Still Have Questions?</h3>
              <p>Can't find what you're looking for? Our team is here to help!</p>
              <button className="faq-contact-btn">Contact Us Now</button>
            </div>

            <div className="faq-card benefits">
              <h4>Our Guarantee</h4>
              <ul>
                <li>✓ 5-Year Warranty</li>
                <li>✓ Free Installation</li>
                <li>✓ Free Maintenance (1 Year)</li>
                <li>✓ 30-Day Money Back</li>
                <li>✓ Expert Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
