import { ArrowUpRight } from 'lucide-react'
import projectOneImage from '../asserts/Project1.avif'
import projectTwoImage from '../asserts/project2.webp'
import projectThreeImage from '../asserts/project3.jpg'

const projects = [
  { title: 'Blog website', description: 'A clean, responsive publishing experience built around readable stories and a focused interface.', technologies: ['HTML', 'CSS', 'JavaScript',], image: projectOneImage, link: 'https://akshithauyyala.github.io/Blog-website/' },
  { title: 'AI chatbot', description: 'A Python-powered conversational assistant designed to make intelligent interaction feel natural.', technologies: ['Python', 'AI',], image: projectTwoImage, link: 'https://akshithauyyala.github.io/AI-chatbot/' },
  { title: 'URL shortener', description: 'A lightweight utility for turning long links into simple, shareable URLs with a clear workflow.', technologies: ['HTML', 'CSS', 'JavaScript'], image: projectThreeImage, link: 'https://akshithauyyala.github.io/URL-shortener/' },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
      </div>
      <div className="project-content">
        <p className="project-category">Selected project</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies" aria-label={`Technologies used for ${project.title}`}>
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
          <span>View project</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-heading">
        <p className="section-kicker">Selected work</p>
        <h2 id="projects-title">My projects</h2>
        <p>A selection of projects where data, technology, and creative problem-solving come together to build meaningful digital experiences.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}