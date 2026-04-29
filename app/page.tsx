import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

import FadeIn from "@/components/ui/FadeIn";


export default function Home() {
  return (
    <>
      <FadeIn delay={0}>
        <Hero />
      </FadeIn>

      <FadeIn delay={150}>
        <About />
      </FadeIn>

      <FadeIn delay={300}>
        <Projects />
      </FadeIn>

      <FadeIn delay={450}>
        <Skills />
      </FadeIn>

      <FadeIn delay={600}>
        <Contact />
      </FadeIn>
    </>
  );
}