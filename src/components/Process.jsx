import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      days: 'Day 1-2',
      title: 'Consultation & Measurement',
      description: 'Expert assessment of your space and security needs',
      icon: '📋'
    },
    {
      id: 2,
      days: 'Day 3-5',
      title: 'Custom Manufacturing',
      description: 'Tailored design matching your architectural style',
      icon: '🔧'
    },
    {
      id: 3,
      days: 'Day 6-7',
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians',
      icon: '👷'
    },
    {
      id: 4,
      days: 'Day 8',
      title: 'Final Inspection & Handover',
      description: 'Quality check and dedication to your satisfaction',
      icon: '✅'
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            Simple, transparent, and hassle-free installation journey
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={step.id} className="timeline-item" style={{ '--index': index }}>
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  <span className="timeline-icon">{step.icon}</span>
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                  <div className="timeline-card">
                    <div className="timeline-days">{step.days}</div>
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-description">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Connector */}
                {index < steps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
