import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;