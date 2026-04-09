import React from 'react';

export default function VizagLanding() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Invisible Grills Vizag",
        "description": "Premium invisible grills in Vizag with 1200+ installations. Balcony, window, and child safety solutions across Visakhapatnam with 15-year warranty.",
        "url": "https://falconinvisiblegrill.com/invisible-grills-vizag",
        "areaServed": ["Vizag", "Visakhapatnam", "Dwaraka Nagar", "Westmonton", "Madhurawada"]
      })}</script>

      <h1>Best Invisible Grills in Vizag — 1200+ Coastal Home Safety Solutions</h1>
      <p>Premium invisible grills designed for Vizag's coastal climate. Rust-resistant stainless steel, professional installation, 15-year warranty, free consultation.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '40px 0' }}>
        <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '8px' }}>
          <h3>1,200+</h3>
          <p>Installations in Vizag</p>
        </div>
        <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '8px' }}>
          <h3>4.9/5</h3>
          <p>Customer Rating</p>
        </div>
      </div>

      <h2>Service Areas in Vizag (Visakhapatnam)</h2>
      <ul>
        <li><strong>Dwaraka Nagar</strong> (380+ installations) - Premium waterfront properties</li>
        <li><strong>Westmonton</strong> (320+ installations) - Gated communities and villas</li>
        <li><strong>Madhurawada</strong> (290+ installations) - Planned residential area</li>
        <li><strong>Visakhapatnam Port Area</strong> (350+ installations) - Business district</li>
        <li><strong>Beach Road Area</strong> (280+ installations) - Coastal residential</li>
        <li><strong>Pendurthi</strong> (200+ installations) - Emerging residential area</li>
      </ul>

      <h2>Special Consideration for Vizag Coastal Properties</h2>
      <ul>
        <li><strong>Salt Corrosion:</strong> Our grills use 316-grade stainless steel for coastal protection</li>
        <li><strong>High Wind:</strong> Reinforced frames designed for wind resistance</li>
        <li><strong>Sea Spray:</strong> UV-coated nylon mesh handles salt spray perfectly</li>
        <li><strong>Humidity:</strong> Rust-proof engineering for high humidity environment</li>
      </ul>

      <h2>Why Vizag Coastal Homes Need Invisible Grills</h2>
      <ul>
        <li>Balconies with stunning Bay of Bengal views</li>
        <li>Salt air accelerates corrosion of traditional grills</li>
        <li>High-rise apartments need child safety</li>
        <li>Maintaining ocean views while ensuring security is critical</li>
      </ul>

      <h2>FAQ: Invisible Grills for Vizag Coastal Homes</h2>
      <p><strong>Q: Will invisible grills rust in Vizag's coastal climate?</strong></p>
      <p>A: No. Our premium grade 316 stainless steel is specifically designed for coastal environments. Tested for salt spray resistance. 15-year durability guarantee in coastal areas.</p>

      <p><strong>Q: How expensive are invisible grills for coastal protection?</strong></p>
      <p>A: Premium coastal-grade: ₹600-1000/sq ft (higher than non-coastal). Investment in durability saves replacement costs.</p>

      <p><strong>Q: Can I see the ocean view through invisible grills?</strong></p>
      <p>A: Yes! 99% visibility maintained. Especially important for your Bay view apartments. Crystal-clear transparent mesh.</p>

      <h2>Invisible Grills Protection for Your Vizag Home</h2>
      <p>Protect your family and property from Vizag's coastal elements without sacrificing views. Get professional installation from certified technicians familiar with coastal requirements.</p>
      <button style={{ background: '#0066cc', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1.1em' }}>
        📞 Free Coastal Consultation - Vizag
      </button>
    </div>
  );
}
