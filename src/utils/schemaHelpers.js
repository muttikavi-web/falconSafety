/**
 * SEO Schema Helpers
 * Using schema-org package for type-safe schema generation
 * Reduces manual JSON-LD code by 50%+
 */

import {
  LocalBusiness,
  Service,
  BreadcrumbList,
  FAQPage,
  Question,
  Answer,
  AggregateRating,
  AggregateOffer
} from 'schema-org';

/**
 * Create LocalBusiness schema for location-based pages
 * @param {Object} config - Business configuration
 */
export function createLocalBusinessSchema(config) {
  const {
    name,
    description,
    url,
    telephone = '+919000888367',
    location = 'Chennai',
    region = 'IN-TN',
    installations = '2000',
    rating = '4.9',
    reviews = '2000',
    priceRange = '₹400-₹800',
    areaServed = ['Chennai']
  } = config;

  const schema = new LocalBusiness()
    .setName(name)
    .setDescription(description)
    .setUrl(url)
    .setTelephone(telephone)
    .setImage('https://falconinvisiblegrill.com/logo.png')
    .setAggregateRating(
      new AggregateRating()
        .setRatingValue(rating)
        .setReviewCount(reviews)
        .setBestRating('5')
        .setWorstRating('1')
    )
    .setAggregateOffer(
      new AggregateOffer()
        .setPriceCurrency('INR')
        .setLowPrice('400')
        .setHighPrice(priceRange.split('-')[1].trim().replace('₹', ''))
    );

  if (areaServed && Array.isArray(areaServed)) {
    schema.setAreaServed(areaServed);
  }

  return schema;
}

/**
 * Create Service schema
 * @param {Object} config - Service configuration
 */
export function createServiceSchema(config) {
  const {
    name = 'Invisible Grills Installation',
    description = 'Professional installation of invisible grills for windows and balconies',
    areaServed = 'Chennai',
    serviceType = 'Installation'
  } = config;

  return new Service()
    .setName(name)
    .setDescription(description)
    .setServiceType(serviceType)
    .setAreaServed(areaServed)
    .setProvider(
      new LocalBusiness()
        .setName('Falcon Invisible Grills')
        .setUrl('https://falconinvisiblegrill.com')
    );
}

/**
 * Create BreadcrumbList schema
 * @param {Array} breadcrumbs - Array of breadcrumb items {name, url}
 */
export function createBreadcrumbSchema(breadcrumbs) {
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }));

  return new BreadcrumbList()
    .setItemListElement(itemListElement);
}

/**
 * Create FAQPage schema
 * @param {Array} faqs - Array of {question, answer}
 */
export function createFAQSchema(faqs) {
  const mainEntity = faqs.map(faq => {
    const question = new Question()
      .setName(faq.question);

    const answer = new Answer()
      .setText(faq.answer);

    return {
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    };
  });

  return new FAQPage()
    .setMainEntity(mainEntity);
}

/**
 * Create Organization schema (for homepage)
 */
export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Falcon Invisible Grills',
    url: 'https://falconinvisiblegrill.com',
    logo: 'https://falconinvisiblegrill.com/logo.png',
    description: 'Best invisible grills with 24 years of excellence',
    sameAs: [
      'https://www.facebook.com/falconvisiblegrill',
      'https://www.instagram.com/falconvisiblegrill'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+919000888367'
    }
  };
}

/**
 * Helper to render schema as JSON-LD script tag
 * @param {Object} schema - Schema object
 */
export function renderSchema(schema) {
  return JSON.stringify(schema);
}
