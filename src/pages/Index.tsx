import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import DeveloperConsole from "@/components/sections/DeveloperConsole";
import DebugGame from "@/components/sections/DebugGame";
import EngineeringPhilosophy from "@/components/sections/EngineeringPhilosophy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <DeveloperConsole />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringPhilosophy />
        <DebugGame />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
