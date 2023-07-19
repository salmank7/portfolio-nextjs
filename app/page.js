import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/about";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
