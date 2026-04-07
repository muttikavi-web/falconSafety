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
import './App.css';

function App() {
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

export default App;
