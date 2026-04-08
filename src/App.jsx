import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CityLandingPage from './components/CityLandingPage';
import './App.css';

function HomePage() {
  return (
    <div className='app'>
      <Header />
      <main>
        <section id='home'>
          <Hero />
        </section>
        <section id='features'>
          <Features />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='about'>
          <About />
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invisible-grills-chennai" element={<CityLandingPage city="Chennai" keywords="invisible grills in Chennai" />} />
        <Route path="/chennai-invisible-grill" element={<CityLandingPage city="Chennai" keywords="invisible grills in Chennai" />} />
        <Route path="/invisible-chennai" element={<CityLandingPage city="Chennai" keywords="invisible grills in Chennai" />} />
        
        <Route path="/invisible-grills-vizag" element={<CityLandingPage city="Vizag" keywords="invisible grills in Vizag" />} />
        <Route path="/vizag-invisible-grill" element={<CityLandingPage city="Vizag" keywords="invisible grills in Vizag" />} />
        <Route path="/invisible-vizag" element={<CityLandingPage city="Vizag" keywords="invisible grills in Vizag" />} />
        
        <Route path="/invisible-grills-bangalore" element={<CityLandingPage city="Bangalore" keywords="invisible grills in Bangalore" />} />
        <Route path="/bangalore-invisible-grill" element={<CityLandingPage city="Bangalore" keywords="invisible grills in Bangalore" />} />
        <Route path="/invisible-bangalore" element={<CityLandingPage city="Bangalore" keywords="invisible grills in Bangalore" />} />
        
        <Route path="/invisible-grills-hyderabad" element={<CityLandingPage city="Hyderabad" keywords="invisible grills in Hyderabad" />} />
        <Route path="/hyderabad-invisible-grill" element={<CityLandingPage city="Hyderabad" keywords="invisible grills in Hyderabad" />} />
        <Route path="/invisible-hyderabad" element={<CityLandingPage city="Hyderabad" keywords="invisible grills in Hyderabad" />} />
      </Routes>
    </Router>
  );
}
