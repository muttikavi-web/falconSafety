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
import SEOBlogArticles from './components/SEOBlogArticles';
import WindowGrillsLanding from './components/WindowGrillsLanding';
import BalconyGrillsLanding from './components/BalconyGrillsLanding';
import ChildSafetyGrillsLanding from './components/ChildSafetyGrillsLanding';
import CostLanding from './components/CostLanding';
import InstallationLanding from './components/InstallationLanding';
import BestGrillsLanding from './components/BestGrillsLanding';
import TransparentGrillsLanding from './components/TransparentGrillsLanding';
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

        {/* Hyderabad Routes - Using VizagLanding component (same content, different route for diversity) */}
        <Route path="/invisible-grills-hyderabad" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <VizagLanding />
            <Footer />
          </>
        } />
        <Route path="/hyderabad" element={
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

        {/* SEO Blog Articles (comprehensive guides - targets generic keywords) */}
        <Route path="/invisible-grill-information" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <SEOBlogArticles />
            <Contact />
            <Footer />
          </>
        } />

        {/* Window Grills Landing - targets "window grills" keyword */}
        <Route path="/window-grills-chennai" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <WindowGrillsLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Balcony Grills Landing - targets "balcony grills" keyword */}
        <Route path="/balcony-grills-chennai" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <BalconyGrillsLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Child Safety Grills Landing - targets "child safety" keyword */}
        <Route path="/child-safety-grills" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <ChildSafetyGrillsLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Cost Landing - targets "invisible grill cost", "price" keyword */}
        <Route path="/invisible-grill-cost" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <CostLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Installation Landing - targets "invisible grill installation" keyword */}
        <Route path="/invisible-grill-installation-process" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <InstallationLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Best Grills Landing - targets "best invisible grill" & "best quality" keywords */}
        <Route path="/best-invisible-grill" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <BestGrillsLanding />
            <Contact />
            <Footer />
          </>
        } />

        {/* Transparent Safety Grills Landing - targets "transparent grills", "safety grills" keywords */}
        <Route path="/transparent-safety-grills" element={
          <>
            <Header />
            <NotificationPopup />
            <WhatsAppChat />
            <TransparentGrillsLanding />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
