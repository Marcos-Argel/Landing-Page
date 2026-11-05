import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Contact from "../components/sections/Contact";
import Services from "../components/sections/Services";
import ProjectGallery from "../components/sections/ProjectGallery";
import Team from "../components/sections/Team";
import FAQ from "../components/sections/FAQ";
import WhatsAppButton from "../components/ui/WhatsAppButton";

// Página principal: junta todas las secciones en orden
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProjectGallery />
        <Features />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
