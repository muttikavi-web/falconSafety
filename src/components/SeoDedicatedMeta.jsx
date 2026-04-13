import { Helmet } from 'react-helmet-async';

/**
 * SEO Dedicated Meta Component
 * Provides comprehensive meta tags for "invisible grill in chennai" keyword
 * with home hyperlink for link juice distribution
 */
export default function SeoDedicatedMeta() {
  return (
    <Helmet>
      {/* Additional Primary Meta Tags for SEO */}
      <meta name="title" content="Invisible Grill in Chennai - Premium Quality | Falcon Grills" />
      <meta name="description" content="Looking for invisible grill in Chennai? Falcon offers best quality invisible grills at ₹400-800/sqft. 24 years experience, 4500+ installations, 4.9/5 rating. Free consultation & 48-hour installation." />
      
      {/* Additional Keywords - Comprehensive */}
      <meta name="keywords" content="invisible grill in chennai, invisible grill, invisible grills, invisible grill price in chennai, best invisible grill, invisible window grill, invisible balcony grill, transparent grill, safety grill, child safety grill, pet safety grill, invisible grill installation, invisible grill cost, invisible grill warranty, invisible grill bangalore, invisible grill vizag" />
      
      {/* Additional Structured Data */}
      <meta property="article:published_time" content="2024-01-01T00:00:00+05:30" />
      <meta property="article:modified_time" content="2026-04-13T00:00:00+05:30" />
      <meta property="article:author" content="Falcon Invisible Grills" />
      
      {/* Geographical Meta Tags */}
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Falcon Invisible Grills" />
      
      {/* Twitter Card - Extended */}
      <meta name="twitter:creator" content="@FalconGrills" />
      <meta name="twitter:site" content="@FalconGrills" />
      
      {/* Additional Search Engine Meta Tags */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Revisit After */}
      <meta name="revisit-after" content="7 days" />
      
      {/* Content Type */}
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta http-equiv="content-language" content="en-IN" />

      {/* Home Hyperlink for Link Juice Distribution */}
      <link rel="home" href="https://falconinvisiblegrill.com/" title="Falcon Invisible Grills - Home" />
    </Helmet>
  );
}
