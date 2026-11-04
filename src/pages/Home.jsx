import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Contact from "../components/sections/Contact";
import Services from "../components/sections/Services";

// Página principal: junta todas las secciones en orden
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
