"use client";
import { ThemeProvider } from "../contexts/theme-context";
import { Layout } from "../components/layout";
import { HomeSection } from "../components/sections/home-section";
import { AboutSection } from "../components/sections/about-section";
import { SkillsSection } from "../components/sections/skills-section";
import { ProjectsSection } from "../components/sections/projects-section";
import { ContactSection } from "../components/sections/contact-section";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}
