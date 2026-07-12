import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { engineeringProjects, researchProjects } from '../data'

function ProjectsSection() {
  const [category, setCategory] = useState('engineering')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const projects = useMemo(
    () => (category === 'engineering' ? engineeringProjects : researchProjects),
    [category],
  )
  const selectedProject = projects[selectedIndex] ?? projects[0]

  const changeCategory = (value) => {
    setCategory(value)
    setSelectedIndex(0)
  }

  return (
    <section id="projects" className="section projects-section observed-section">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="04"
            english="Projects"
            title="代表性项目"
            description="在国家级科研任务与大型桥梁工程中，推进模型、方法与设计决策的相互验证。"
          />
          <div className="project-tabs" role="tablist" aria-label="项目类别">
            <button
              role="tab"
              aria-selected={category === 'engineering'}
              className={category === 'engineering' ? 'is-active' : ''}
              onClick={() => changeCategory('engineering')}
            >
              工程项目
            </button>
            <button
              role="tab"
              aria-selected={category === 'research'}
              className={category === 'research' ? 'is-active' : ''}
              onClick={() => changeCategory('research')}
            >
              科研项目
            </button>
          </div>
        </div>

        <div className="project-explorer">
          <div className="project-list" role="tablist" aria-label="项目列表">
            {projects.map((project, index) => (
              <button
                key={project.title}
                role="tab"
                aria-selected={selectedIndex === index}
                className={selectedIndex === index ? 'is-active' : ''}
                onClick={() => setSelectedIndex(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{project.title}</strong>
                  <small>{project.period}</small>
                </div>
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>

          <article className="project-detail" key={selectedProject.title} role="tabpanel">
            <div className="project-detail-top">
              <span>{selectedProject.period}</span>
              <span>{selectedProject.role}</span>
            </div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="project-facts">
              {selectedProject.facts.map((fact) => (
                <div key={fact}>{fact}</div>
              ))}
            </div>
            <div className="project-geometry" aria-hidden="true">
              <svg viewBox="0 0 620 170" preserveAspectRatio="none">
                <path d="M20 136 H600" />
                <path d="M115 136 V72 M505 136 V72" />
                <path d="M115 72 L310 22 L505 72" />
                <path d="M115 72 L178 136 M115 72 L240 136 M115 72 L310 136 M505 72 L442 136 M505 72 L380 136 M505 72 L310 136" />
                <circle cx="310" cy="22" r="4" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
