import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { ResumeSection } from "@/components/sections/resume-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
