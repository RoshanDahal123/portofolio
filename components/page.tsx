"use client"

import { BlogSection } from "./sections/blog-section"
import { HomeSection } from "./sections/home-section"
import { AboutSection } from "./sections/about-section"
import { SkillsSection } from "./sections/skills-section"
import { ProjectsSection } from "./sections/projects-section"
import { ContactSection } from "./sections/contact-section"
import dynamic from "next/dynamic"



export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <BlogSection />
    </>
  )
}
