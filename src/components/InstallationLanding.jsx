import React, { useEffect } from 'react';

function InstallationSEO() {
  useEffect(() => {
    document.title = 'Invisible Grill Installation Process | Step-by-Step Guide | Professional Installation';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Invisible grill installation process in Chennai - complete step-by-step guide. Professional installation in 2-5 days. Zero structural damage. Free consultation included.');
    document.querySelector('meta[name="keywords"]').setAttribute('content', 'invisible grill installation, installation process, how to install invisible grills, professional installation, installation guide');
    
    // Add BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://falconinvisiblegrill.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Installation Guide",
          "item": "https://falconinvisiblegrill.com/invisible-grill-installation-process"
        }
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);
  return null;
}

export default function InstallationLanding() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <InstallationSEO />
      
      <h1>Invisible Grill Installation Process | Step-by-Step Professional Guide</h1>
      <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>Complete invisible grill installation process explained. From free consultation to final testing - understand exactly what happens during each step. Professional installation in 2-5 days with zero structural damage.</p>

      <div style={{ background: '#e8f5e9', padding: '30px', borderRadius: '8px', marginBottom: '40px', border: '2px solid #4caf50' }}>
        <h2 style={{ color: '#2e7d32', marginTop: '0' }}>Installation Timeline</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>Day 1: Consultation</h4>
            <p>Free on-site visit, measurement, quote</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>Days 2-4: Fabrication</h4>
            <p>Custom frame manufacturing</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>Days 5-9: Installation</h4>
            <p>Professional installation work</p>
          </div>
          <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>Day 10: Final Inspection</h4>
            <p>Quality check & handover</p>
          </div>
        </div>
      </div>

      <h2>Phase 1: Pre-Installation (Day 1)</h2>
      <div style={{ background: '#f5f5f5', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
        <h3 style={{ marginTop: '0', color: '#0066cc' }}>Free On-Site Consultation</h3>
        <ol style={{ lineHeight: '1.8', fontSize: '1.05em' }}>
          <li><strong>Expert Visit:</strong> Our technician visits your home with measurement tools</li>
          <li><strong>Precise Measurements:</strong> Each window & balcony measured to exact dimensions</li>
          <li><strong>Design Discussion:</strong> Understand your preferences (color, frame type, safety needs)</li>
          <li><strong>Structural Assessment:</strong> Check if building allows installation (rarely an issue)</li>
          <li><strong>Instant Quote:</strong> Detailed pricing based on materials & size</li>
          <li><strong>Timeline Confirmation:</strong> Exact dates for installation scheduled</li>
        </ol>
        <p style={{ background: '#e3f2fd', padding: '15px', borderRadius: '6px' }}>✅ <strong>Cost:</strong> FREE - No obligation, no pressure</p>
      </div>

      <h2>Phase 2: Order & Customization (Days 2-4)</h2>
      <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
        <h3 style={{ marginTop: '0', color: '#856404' }}>Material Fabrication</h3>
        <ol style={{ lineHeight: '1.8', fontSize: '1.05em' }}>
          <li><strong>50% Advance Payment:</strong> Secures your slot & starts fabrication</li>
          <li><strong>Frame Customization:</strong> Aluminum or stainless steel frames cut to exact dimensions</li>
          <li><strong>Nylon Mesh Sourcing:</strong> Premium UV-resistant nylon coated with stainless steel</li>
          <li><strong>Quality Inspection:</strong> Each component inspected for defects before delivery</li>
          <li><strong>Delivery Preparation:</strong> All materials packed safely with protective covering</li>
        </ol>
        <p style={{ fontSize: '0.95em', color: '#666' }}><strong>Timeline:</strong> 3-5 days typically (can be expedited for rush orders)</p>
      </div>

      <h2>Phase 3: Installation (Days 5-9)</h2>
      <div style={{ background: '#e3f2fd', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
        <h3 style={{ marginTop: '0', color: '#0066cc' }}>Professional Installation Process</h3>

        <h4>Day 1-2: Frame Installation</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✓ Clean windows/balcony thoroughly</li>
          <li>✓ Mark frame positions using laser level</li>
          <li>✓ Drill minimal holes (wall anchors, no structural damage)</li>
          <li>✓ Install aluminum/stainless steel frame securely</li>
          <li>✓ Test frame for levelness & stability</li>
          <li>✓ Seal frame joints with weatherproof sealant</li>
        </ul>

        <h4>Day 3-4: Mesh Installation & Tensioning</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✓ Cut nylon mesh to exact frame dimensions</li>
          <li>✓ Attach mesh to frame using stainless steel fasteners</li>
          <li>✓ Tension mesh evenly for optimal tautness</li>
          <li>✓ Ensure no sagging or loose areas</li>
          <li>✓ Final tightening & adjustments</li>
        </ul>

        <h4>Day 5: Quality Inspection & Cleanup</h4>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✓ Full functionality test of all installations</li>
          <li>✓ Clean installation area thoroughly</li>
          <li>✓ Remove all protective coverings</li>
          <li>✓ Customer walk-through & approval</li>
          <li>✓ Provide care instructions documentation</li>
        </ul>
      </div>

      <h2>What to Expect During Installation</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
        <thead>
          <tr style={{ background: '#0066cc', color: 'white' }}>
            <th style={{ padding: '15px', textAlign: 'left' }}>Aspect</th>
            <th style={{ padding: '15px', textAlign: 'left' }}>What Happens</th>
            <th style={{ padding: '15px', textAlign: 'left' }}>Impact on You</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Noise Level</td>
            <td style={{ padding: '15px' }}>Moderate (drilling 2-3 hrs/day)</td>
            <td style={{ padding: '15px' }}>Minimal disruption - can go out</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Dust</td>
            <td style={{ padding: '15px' }}>Minimal with dust sheets</td>
            <td style={{ padding: '15px' }}>Cleaning done daily</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Window Access</td>
            <td style={{ padding: '15px' }}>Can't use for 1-2 days</td>
            <td style={{ padding: '15px' }}>Minor inconvenience</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Balcony Usage</td>
            <td style={{ padding: '15px' }}>Available after day 2-3</td>
            <td style={{ padding: '15px' }}>Can use 48 hours in</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Wall Damage</td>
            <td style={{ padding: '15px' }}>Minimal - small anchor holes</td>
            <td style={{ padding: '15px' }}>Can be removed later</td>
          </tr>
          <tr>
            <td style={{ padding: '15px' }}>Curing Time</td>
            <td style={{ padding: '15px' }}>24 hours for adhesives</td>
            <td style={{ padding: '15px' }}>Fully usable day 2</td>
          </tr>
        </tbody>
      </table>

      <h2>Post-Installation Care</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h4 style={{ marginTop: '0' }}>First Week</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Avoid leaning hard on mesh</li>
            <li>Don't wet installation area</li>
            <li>Let sealants cure fully</li>
            <li>Verify proper functioning</li>
          </ul>
        </div>
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h4 style={{ marginTop: '0' }}>First Month</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Minimal cleaning only</li>
            <li>Let frame settle</li>
            <li>Monitor for adjustments</li>
            <li>Report issues immediately</li>
          </ul>
        </div>
        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <h4 style={{ marginTop: '0' }}>Ongoing (Yearly)</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Light visual inspection</li>
            <li>Gentle cleaning if needed</li>
            <li>Check fastener tightness</li>
            <li>Professional service optional</li>
          </ul>
        </div>
      </div>

      <h2>Common Installation FAQs</h2>
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Will installation damage my walls?</h4>
          <p>A: No. We use wall anchors - minimal drilling required. No structural modification. Only small anchor holes remain (easily concealed if removed later).</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Can I remove grills after installation?</h4>
          <p>A: Yes. Frame removes cleanly. Wall anchors leave small holes fillable with patching compound. No permanent damage.</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Is meshstrong enough for impact?</h4>
          <p>A: Yes. Tested with 200+ kg force. Won't break from impact, jumping, or running into it. Designed to flex safely.</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Can I have windows cleaned with grills installed?</h4>
          <p>A: Yes. Grills can be temporarily removed if needed. Takes 20-30 minutes for professional cleaning, then reinstalled.</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: What if my building needs society approval?</h4>
          <p>A: We handle compliance documentation. Most building societies approve installation (non-structural, internal, improves safety). We provide necessary certificates.</p>
        </div>
      </div>

      <div style={{ background: '#4caf50', color: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Schedule Your Installation Today</h2>
        <p style={{ fontSize: '1.1em', marginBottom: '25px' }}>Free consultation • Professional installation • 2-5 days • 15-year warranty</p>
        <button style={{ background: 'white', color: '#4caf50', padding: '15px 40px', fontSize: '1.1em', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}>
          📞 Book Free Consultation
        </button>
      </div>
    </div>
  );
}
