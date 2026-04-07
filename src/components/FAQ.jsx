import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What are invisible grills?',
      answer: 'Invisible grills are high-strength stainless steel wires or nylon grills installed on windows and balconies that provide security without obstructing the view. They are transparent and maintain the aesthetic appeal of your space.'
    },
    {
      id: 2,
      question: 'How long does installation take?',
      answer: 'Typical installation takes 2-3 days depending on the number of windows and balconies. Our expert team works efficiently to minimize disruption to your daily routine.'
    },
    {
      id: 3,
      question: 'What is the warranty period?',
      answer: 'We provide a comprehensive 5-year warranty on all our invisible grills covering manufacturing defects and installation issues. Extended warranties are available upon request.'
    },
    {
      id: 4,
      question: 'Are invisible grills safe for children and pets?',
      answer: 'Yes! Our grills are designed with safety in mind. The stainless steel wires are too strong to break and the installation is secure. They protect children and pets from accidental falls.'
    },
    {
      id: 5,
      question: 'Can invisible grills be installed on all window types?',
      answer: 'Invisible grills can be installed on most window types including sliding, casement, and fixed windows. We provide a free consultation to assess your specific requirements.'
    },
    {
      id: 6,
      question: 'How much maintenance is required?',
      answer: 'Minimal maintenance is needed! Simply clean with soap and water occasionally. We provide free maintenance service for the first year, and our team can assist with any concerns.'
    },
    {
      id: 7,
      question: 'What is the cost range?',
      answer: 'Pricing depends on window size, material choice, and quantity. We offer competitive rates with flexible payment options. Contact us for a free quote tailored to your needs.'
    },
    {
      id: 8,
      question: 'Do you offer customization options?',
      answer: 'Absolutely! We offer various materials (stainless steel, nylon), colors, and designs. Our team can customize solutions to match your home\'s aesthetic while meeting security needs.'
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
