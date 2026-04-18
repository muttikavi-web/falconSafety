/**
 * EXAMPLE: How to use schemaHelpers.js in your landing pages
 * This reduces schema code by 50%+
 * 
 * BEFORE (Manual JSON-LD - 50+ lines):
 */

// BEFORE - Manual schema (lots of repetition)
const manualSchema = `
<script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Falcon Invisible Grills - Chennai",
  "description": "Premium invisible grills...",
  "url": "https://falconinvisiblegrill.com",
  "telephone": "+919000888367",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "400",
    "highPrice": "800"
  }
})}</script>
`;

/**
 * AFTER (Using schemaHelpers - Much cleaner!)
 */

import { createLocalBusinessSchema, renderSchema } from '../utils/schemaHelpers';

// One simple function call!
const schema = createLocalBusinessSchema({
  name: 'Falcon Invisible Grills - Chennai',
  description: 'Premium invisible grills installation...',
  url: 'https://falconinvisiblegrill.com/invisible-grills-chennai',
  location: 'Chennai',
  installations: '2000',
  rating: '4.9',
  reviews: '2000',
  priceRange: '₹400-₹800',
  areaServed: ['Thiruvanmiyur', 'Besant Nagar', 'T. Nagar', 'Anna Nagar']
});

// Use in JSX
export default function ChennaiLanding() {
  return (
    <div>
      <script type="application/ld+json">{renderSchema(schema)}</script>
      
      {/* Rest of component */}
    </div>
  );
}

/**
 * BENEFITS OF THIS APPROACH:
 * ✅ Cleaner, more readable code
 * ✅ Type-safe (autocomplete suggestions)
 * ✅ Less repetition across files
 * ✅ Easier to update schema structure
 * ✅ Automatic validation
 * ✅ DRY principle (Don't Repeat Yourself)
 */

/**
 * HOW TO USE IN YOUR FILES:
 * 
 * 1. ChennaiLanding.jsx
 * import { createLocalBusinessSchema, createBreadcrumbSchema } from '../utils/schemaHelpers';
 * 
 * 2. In component:
 * const chennaiBusiness = createLocalBusinessSchema({...});
 * const breadcrumbs = createBreadcrumbSchema([
 *   { name: 'Home', url: 'https://falconinvisiblegrill.com' },
 *   { name: 'Chennai', url: 'https://falconinvisiblegrill.com/invisible-grills-chennai' }
 * ]);
 * 
 * 3. Render:
 * <script type="application/ld+json">{renderSchema(chennaiBusiness)}</script>
 * <script type="application/ld+json">{renderSchema(breadcrumbs)}</script>
 */

/**
 * AVAILABLE FUNCTIONS:
 * 
 * 1. createLocalBusinessSchema(config)
 *    - Creates LocalBusiness schema
 *    - Auto-generates rating and offer fields
 * 
 * 2. createServiceSchema(config)
 *    - Creates Service schema for offerings
 * 
 * 3. createBreadcrumbSchema(breadcrumbs)
 *    - Creates BreadcrumbList
 *    - Takes array of {name, url}
 * 
 * 4. createFAQSchema(faqs)
 *    - Creates FAQPage schema
 *    - Takes array of {question, answer}
 * 
 * 5. createOrganizationSchema()
 *    - For homepage Organization schema
 * 
 * 6. renderSchema(schema)
 *    - Converts to JSON string for script tag
 */
