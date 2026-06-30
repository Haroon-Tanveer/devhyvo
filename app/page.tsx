import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Games from '@/components/sections/Games';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Technologies from '@/components/sections/Technologies';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Services />
      <Process />
      <WhyUs />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
