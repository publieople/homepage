"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { ResumeSection } from "@/components/sections/resume-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SectionNav } from "@/components/sections/section-nav";

const SECTION_VARIANTS = {
  about: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  projects: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  blog: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  resume: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  contact: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function SectionWrapper({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: (typeof SECTION_VARIANTS)[keyof typeof SECTION_VARIANTS];
}) {
  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={variants.transition}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionWrapper variants={SECTION_VARIANTS.about}>
          <About />
        </SectionWrapper>
        <SectionWrapper variants={SECTION_VARIANTS.projects}>
          <Projects />
        </SectionWrapper>
        <SectionWrapper variants={SECTION_VARIANTS.blog}>
          <Blog />
        </SectionWrapper>
        <SectionWrapper variants={SECTION_VARIANTS.resume}>
          <ResumeSection />
        </SectionWrapper>
        <SectionWrapper variants={SECTION_VARIANTS.contact}>
          <Contact />
        </SectionWrapper>
      </main>
      <SectionNav />
      <Footer />
    </>
  );
}
