import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotificationPopup from './components/NotificationPopup';
import WhatsAppChat from './components/WhatsAppChat';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Products from './components/Products';
import IndustrySolutions from './components/IndustrySolutions';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChennaiLanding from './components/ChennaiLanding';
import BangaloreLanding from './components/BangaloreLanding';
import VizagLanding from './components/VizagLanding';
import GenericBlogArticles from './components/GenericBlogArticles';
import './App.css';

// Main Home Page
function HomePage() {
  return (
    <div className='app'>
      <Header />
      <NotificationPopup />
      <WhatsAppChat />
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
        <section id='products'>
          <Products />
        </section>
        <section id='industries'>
          <IndustrySolutions />
        </section>
        <section id='blog'>
          <Blog />
        </section>
        <section id='certifications'>
          <Certifications />
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
        
        {/* City Landing Pages */}
        <Route path="/invisible-grills-chennai" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <ChennaiLanding />
            <Footer />
          </>
        } />
        <Route path="/chennai" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <ChennaiLanding />
            <Footer />
          </>
        } />
        
        <Route path="/invisible-grills-bangalore" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <BangaloreLanding />
            <Footer />
          </>
        } />
        <Route path="/bangalore" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <BangaloreLanding />
            <Footer />
          </>
        } />

        <Route path="/invisible-grills-vizag" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <VizagLanding />
            <Footer />
          </>
        } />
        <Route path="/vizag" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <VizagLanding />
            <Footer />
          </>
        } />

        {/* Generic Blog Articles (targets "invisible grill in [city]") */}
        <Route path="/invisible-grill-guides" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <GenericBlogArticles />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
