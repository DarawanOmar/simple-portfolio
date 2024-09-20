import Navbar from "./navbar";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

export function PortfolioComponent() {
  return (
    <div className="min-h-screen  bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
