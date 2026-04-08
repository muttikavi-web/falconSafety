import { useEffect } from 'react';
import Header from './Header';
import Features from './Features';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Gallery from './Gallery';
import TrustBadges from './TrustBadges';
import Testimonials from './Testimonials';
import Process from './Process';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import './CityLandingPage.css';

const CityLandingPage = ({ city, keywords }) => {
  const cityData = {
    Chennai: {
      title: `Invisible Grills in Chennai | Premium Safety Solutions`,
      description: `Premium invisible grills installation in Chennai - balcony grills, window grills, and child safety solutions. Expert installation with free consultation.`,
      heroBadge: `🚀 Serving Chennai & South India`,
      heroTitle: `Premium Invisible Grills in ${city}`,
      heroSubtitle: `Trusted by thousands of families in Chennai for invisible grill installations with crystal-clear views and maximum security.`,
      locationBenefit: `Available throughout Chennai - Old City, New City, Suburbs and all areas.`
    },
    Vizag: {
      title: `Invisible Grills in Vizag | Premium Safety Solutions`,
      description: `Premium invisible grills installation in Vizag - balcony grills, window grills, and child safety solutions. Expert installation with free consultation.`,
      heroBadge: `🚀 Serving Vizag & South India`,
      heroTitle: `Premium Invisible Grills in ${city}`,
      heroSubtitle: `Trusted safety solution for Vizag residents. Invisible grills with unobstructed views perfect for balconies and windows.`,
      locationBenefit: `Available throughout Vizag - Beach City to Suburbs.`
    },
    Bangalore: {
      title: `Invisible Grills in Bangalore | Premium Safety Solutions`,
      description: `Premium invisible grills installation in Bangalore - balcony grills, window grills, and child safety solutions. Expert installation with free consultation.`,
      heroBadge: `🚀 Serving Bangalore & South India`,
      heroTitle: `Premium Invisible Grills in ${city}`,
      heroSubtitle: `Bangalore's trusted invisible grill provider. Protect your family with modern, invisible protection for apartments and villas.`,
      locationBenefit: `Available in all Bangalore locations - Whitefield, Indiranagar, HSR Layout, Koramangala and more.`
    },
    Hyderabad: {
      title: `Invisible Grills in Hyderabad | Premium Safety Solutions`,
      description: `Premium invisible grills installation in Hyderabad - balcony grills, window grills, and child safety solutions. Expert installation with free consultation.`,
      heroBadge: `🚀 Serving Hyderabad & South India`,
      heroTitle: `Premium Invisible Grills in ${city}`,
      heroSubtitle: `Hyderabad's leading invisible grill specialist. Combining modern design with maximum security for your home.`,
      locationBenefit: `Available across Hyderabad - Old City, HITEC City, Jubilee Hills and residential areas.`
    }
  };

  const data = cityData[city] || cityData.Chennai;

  // Update document title and meta tags
  useEffect(() => {
    document.title = data.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', `invisible grills in ${city}, invisible grill ${city}, ${city} invisible grills, balcony grills, window grills, child safety grills, premium safety solutions`);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = `invisible grills in ${city}, invisible grill ${city}, ${city} invisible grills, balcony grills, window grills, child safety grills, premium safety solutions`;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', data.title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = data.title;
      document.head.appendChild(meta);
    }

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', data.title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'twitter:title');
      meta.content = data.title;
      document.head.appendChild(meta);
    }

    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', data.description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'twitter:description');
      meta.content = data.description;
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://falconinvisiblegrill.com${window.location.pathname}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://falconinvisiblegrill.com${window.location.pathname}`;
      document.head.appendChild(link);
    }
  }, [city, data]);

  return (
    <div className='app'>
      <Header />
      <main>
        {/* City-Specific Hero Section */}
        <section id='city-hero' className='city-hero'>
          <div className='city-hero-overlay'></div>
          <div className='city-hero-content'>
            <span className='city-hero-badge'>{data.heroBadge}</span>
            <h1>{data.heroTitle}</h1>
            <p className='city-hero-description'>{data.heroSubtitle}</p>
            <p className='city-location-benefit'>{data.locationBenefit}</p>
            
            <div className='city-cta'>
              <button className='city-btn-primary'>
                <a href='tel:+919000888367'>Get Free Consultation in {city}</a>
              </button>
              <button className='city-btn-secondary'>View {city} Projects</button>
            </div>
          </div>
        </section>

        <section id='features'>
          <Features />
        </section>

        <section id='services'>
          <Services />
        </section>

        <section id='why-us'>
          <WhyChooseUs />
        </section>

        <section id='gallery'>
          <Gallery />
        </section>

        <TrustBadges />

        <section id='testimonials'>
          <Testimonials />
        </section>

        <section id='process'>
          <Process />
        </section>

        <section id='faq'>
          <FAQ />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityLandingPage;
