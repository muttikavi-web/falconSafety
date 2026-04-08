import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What are invisible grills?',
      answer: 'Invisible grills are high-strength stainless steel or nylon wires installed on windows and balconies that provide security without obstructing the view. They are transparent, virtually invisible, and maintain the aesthetic appeal of your space while protecting your family from falls and intrusions.'
    },
    {
      id: 2,
      question: 'How long does installation take?',
      answer: 'Typical installation takes 2-3 hours per location (balcony or windows). Our expert team works efficiently to minimize disruption. The entire process including preparation, installation, testing, and cleanup is usually completed within a single day for most homes.'
    },
    {
      id: 3,
      question: 'What is the warranty period?',
      answer: 'We provide a comprehensive 1-year free service warranty on all installations and a 25-year product warranty on the invisible grills themselves. This covers manufacturing defects, cable issues, and installation concerns. Extended warranties are available upon request.'
    },
    {
      id: 4,
      question: 'Are invisible grills safe for children and pets?',
      answer: 'Yes! Our grills are specifically designed with child and pet safety in mind. The strong stainless steel cables are tested to prevent falls, the spacing prevents entanglement, and there are no sharp edges. They meet international safety standards and are trusted by thousands of families.'
    },
    {
      id: 5,
      question: 'Can invisible grills be installed on all window types?',
      answer: 'Invisible grills can be installed on virtually all window types including sliding windows, casement windows, fixed windows, awning windows, and more. We also handle curved windows, corner installations, and special shapes. We provide a free consultation to assess your specific requirements.'
    },
    {
      id: 6,
      question: 'How much maintenance is required?',
      answer: 'Minimal maintenance is needed! Simply clean with mild soap and water once every 3-6 months. No repainting, rust treatment, or special care required. The high-quality stainless steel resists corrosion naturally. We provide free maintenance service for the first year.'
    },
    {
      id: 7,
      question: 'What is the cost range?',
      answer: 'Pricing depends on window/balcony size, material choice (304 or 316 stainless steel), and quantity. Basic window grills start at ₹5,000, balcony grills from ₹8,000. We offer competitive rates with flexible payment options and EMI facilities. Contact us for a free quote tailored to your needs.'
    },
    {
      id: 8,
      question: 'Do you offer customization options?',
      answer: 'Absolutely! We offer various materials (304/316 stainless steel, premium nylon), cable colors (stainless steel, black, bronze), spacing options for children or pets, and custom designs. Our team can customize solutions to match your home\'s aesthetic while meeting your specific security needs.'
    },
    {
      id: 9,
      question: 'Can invisible grills withstand extreme weather?',
      answer: 'Yes! Our grills are engineered to withstand harsh weather conditions including heavy rains, strong winds, and coastal salt spray. Premium 316-grade stainless steel provides superior corrosion resistance. They maintain their integrity for 25+ years even in challenging environments like Chennai and coastal Vizag.'
    },
    {
      id: 10,
      question: 'How do invisible grills prevent home burglaries?',
      answer: 'The high-tensile stainless steel cables are extremely strong and cannot be easily cut or broken. The secure installation on window frames and balconies prevents prying. Burglars cannot gain entry without causing significant noise and damage. Many insurance companies offer discounts for homes with invisible grills.'
    },
    {
      id: 11,
      question: 'Are invisible grills better than traditional metal grills?',
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
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our invisible grills
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
