import React, { useEffect } from 'react';

function SafetyGrillsSEO() {
  useEffect(() => {
    document.title = 'Transparent Safety Grills | Best Modern Security Solutions | Falcon';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Transparent safety grills for windows, balconies, doors. Modern security solution with 99% visibility. Child-safe, pet-proof. Better than traditional iron bars. Free consultation.');
    document.querySelector('meta[name="keywords"]').setAttribute('content', 'transparent safety grills, safety nets, transparent grills, modern security grills, window safety, balcony protection');
    
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
          "name": "Transparent Safety Grills",
          "item": "https://falconinvisiblegrill.com/transparent-safety-grills"
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

export default function SafetyGrillsLanding() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <SafetyGrillsSEO />
      
      <h1>Transparent Safety Grills | Modern Window, Balcony & Door Security Solutions</h1>
      <p style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>Modern transparent safety grills that provide complete security without blocking light or views. 99% visibility maintained. Better than traditional iron bars. Falcon offers the best transparent safety grade.</p>

      <div style={{ background: '#e8f5e9', padding: '30px', borderRadius: '8px', marginBottom: '40px', border: '2px solid #4caf50' }}>
        <h2 style={{ color: '#2e7d32', marginTop: '0' }}>Why Choose Transparent Safety Grills?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>👁️ Crystal Clear Views</h4>
            <p>99% transparency maintained. You don't see the grills - only the view outside.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>☀️ Natural Light</h4>
            <p>No light blocking. Windows remain bright. Perfect for rooms that need brightness.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>🏠 Modern Aesthetic</h4>
            <p>Invisible design. Homes look modern, premium, and uncluttered - not like a cage.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>🔒 Complete Security</h4>
            <p>Invisible doesn't mean weak. Tested with 200+ kg force per sq inch. Burglar-proof.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>👶 Child & Pet Safe</h4>
            <p>Prevents falls & escapes. Perfect for families with children and pets.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4 style={{ marginTop: '0', color: '#4caf50' }}>💨 Air Circulation</h4>
            <p>Mesh allows full air flow. No stuffiness. Breathable design.</p>
          </div>
        </div>
      </div>

      <h2>How Transparent Grills Work</h2>
      <div style={{ background: '#f5f5f5', padding: '25px', borderRadius: '8px', marginBottom: '40px' }}>
        <p style={{ marginTop: '0', fontSize: '1.05em' }}>Transparent safety grills use ultra-fine stainless steel wires coated with UV-resistant nylon. The wires are so thin (0.5mm) they're nearly invisible:</p>
        
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h4 style={{ marginTop: '0' }}>The Science Behind Invisibility</h4>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Wire Diameter:</strong> 0.5mm (thinner than human hair 0.07mm)</li>
            <li><strong>Mesh Gaps:</strong> Wires spaced to blend with background</li>
            <li><strong>Nylon Coating:</strong> Transparent UV-resistant polymer</li>
            <li><strong>Stainless Frame:</strong> Minimal visibility from distance</li>
            <li><strong>Result:</strong> 99% of view unobstructed, 100% safety maintained</li>
          </ul>
        </div>
      </div>

      <h2>Transparent Grills vs Traditional Security Solutions</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
        <thead>
          <tr style={{ background: '#0066cc', color: 'white' }}>
            <th style={{ padding: '15px', textAlign: 'left' }}>Feature</th>
            <th style={{ padding: '15px', textAlign: 'left' }}>Transparent Grills</th>
            <th style={{ padding: '15px', textAlign: 'left' }}>Iron Bars</th>
            <th style={{ padding: '15px', textAlign: 'left' }}>Roller Shutters</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Visibility</td>
            <td style={{ padding: '15px', color: '#4caf50' }}><strong>99%</strong></td>
            <td style={{ padding: '15px' }}>20-30%</td>
            <td style={{ padding: '15px' }}>0% (blocks view)</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Light Entry</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Full</td>
            <td style={{ padding: '15px' }}>~60%</td>
            <td style={{ padding: '15px' }}>❌ Blocked</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Aesthetics</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Premium Modern</td>
            <td style={{ padding: '15px' }}>Industrial/Dated</td>
            <td style={{ padding: '15px' }}>Blocks facade</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Air Circulation</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Full</td>
            <td style={{ padding: '15px' }}>~80%</td>
            <td style={{ padding: '15px' }}>Restricted</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Child Safety</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Perfect</td>
            <td style={{ padding: '15px' }}>Good but looks caged</td>
            <td style={{ padding: '15px' }}>No safety benefit</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '15px' }}>Maintenance</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Minimal</td>
            <td style={{ padding: '15px' }}>High (painting, rust)</td>
            <td style={{ padding: '15px' }}>Moderate (lubrication)</td>
          </tr>
          <tr>
            <td style={{ padding: '15px' }}>Property Value Impact</td>
            <td style={{ padding: '15px', color: '#4caf50' }}>✅ Increases</td>
            <td style={{ padding: '15px' }}>Decreases</td>
            <td style={{ padding: '15px' }}>Neutral/Decreases</td>
          </tr>
        </tbody>
      </table>

      <h2>Applications for Transparent Safety Grills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
          <h4 style={{ marginTop: '0' }}>🏠 Residential</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>High-rise apartments</li>
            <li>Sea-facing balconies</li>
            <li>City view apartments</li>
            <li>Independent houses</li>
          </ul>
        </div>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
          <h4 style={{ marginTop: '0' }}>🏢 Commercial</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Office buildings</li>
            <li>Retail shops</li>
            <li>Show rooms</li>
            <li>Restaurants</li>
          </ul>
        </div>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
          <h4 style={{ marginTop: '0' }}>🎓 Education</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Schools</li>
            <li>Colleges</li>
            <li>Daycare centers</li>
            <li>Kindergartens</li>
          </ul>
        </div>
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066cc' }}>
          <h4 style={{ marginTop: '0' }}>🏥 Specialized</h4>
          <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
            <li>Hospitals</li>
            <li>Senior care homes</li>
            <li>Pet facilities</li>
            <li>Server rooms</li>
          </ul>
        </div>
      </div>

      <h2>Transparent Grills for Every Space</h2>
      <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '8px', marginBottom: '40px' }}>
        <h4 style={{ marginTop: '0', color: '#856404' }}>Windows</h4>
        <p>Perfect for windows with outdoor views, gardens, or scenery. Maintains sightlines while protecting from falls and breaks.</p>
      </div>

      <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '8px', marginBottom: '40px' }}>
        <h4 style={{ marginTop: '0', color: '#856404' }}>Balconies</h4>
        <p>Ideal for balconies with premium views (ocean, city, mountains). Keep the stunning view while ensuring safety and security.</p>
      </div>

      <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '8px', marginBottom: '40px' }}>
        <h4 style={{ marginTop: '0', color: '#856404' }}>Doors</h4>
        <p>Great for glass doors accessing balconies or gardens. Maintain open feel while preventing unauthorized entry.</p>
      </div>

      <h2>Safety Testing & Certifications</h2>
      <ul style={{ fontSize: '1.05em', lineHeight: '1.8', marginBottom: '40px' }}>
        <li>✅ IS 6792:2016 (Indian Safety Standard)</li>
        <li>✅ 200+ kg force per sq inch (5-6x adult weight)</li>
        <li>✅ Break & tear resistant</li>
        <li>✅ Fire safety certified</li>
        <li>✅ UV stability tested</li>
        <li>✅ Non-toxic materials (FDA approved nylon)</li>
        <li>✅ Child-safe design (no sharp edges)</li>
      </ul>

      <h2>FAQ: Transparent Safety Grills</h2>
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Are transparent grills actually invisible?</h4>
          <p>A: "Invisible" means nearly imperceptible from normal distance. The 0.5mm wires blend into the background, maintaining 99% view clarity.</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: How transparent grills compare to safety nets?</h4>
          <p>A: Both are transparent solutions. Transparent grills use stainless steel wires (stronger) while safety nets use nylon cord. Grills are more permanent; nets are removable.</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Can I see clearly through transparent grills?</h4>
          <p>A: Yes - 99% clarity maintained. After a few days, you'll forget the grills are there. They truly become "invisible".</p>
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
          <h4>Q: Do transparent grills yellow or discolor over time?</h4>
          <p>A: No - UV-resistant nylon coating prevents yellowing. Quality grills (like Falcon) maintain clarity for 15+ years.</p>
        </div>
      </div>

      <div style={{ background: '#4caf50', color: 'white', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Get Transparent Safety Grills Today</h2>
        <p style={{ fontSize: '1.1em', marginBottom: '25px' }}>99% visibility • 100% security • Modern design • 15-year warranty</p>
        <button style={{ background: 'white', color: '#4caf50', padding: '15px 40px', fontSize: '1.1em', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}>
          📞 Free Design Consultation
        </button>
      </div>
    </div>
  );
}
