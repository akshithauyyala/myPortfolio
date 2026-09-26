import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import FooterSection from './components/FooterSection'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <ProjectsSection />
    <SkillsSection />
    <EducationSection />
    <FooterSection />
  </StrictMode>,
)