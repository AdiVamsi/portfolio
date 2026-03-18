import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FlagshipProject from '@/components/FlagshipProject';
import AgentHub from '@/components/AgentHub';
import TechExpertise from '@/components/TechExpertise';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageAtmosphere from '@/components/ui/PageAtmosphere';

export default function Home() {
  return (
    <main id="main-content" className="relative isolate overflow-hidden">
      <PageAtmosphere />
      <Navbar />
      <Hero />
      <About />
      <TechExpertise />
      <Experience />
      <Education />
      <FlagshipProject />
      <AgentHub />
      <Contact />
      <Footer />
    </main>
  );
}
