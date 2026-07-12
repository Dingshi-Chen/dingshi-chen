import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, honors, workExperience } from '../data'

function Timeline({ items, icon: Icon, label }) {
  return (
    <div className="timeline-column">
      <div className="timeline-title">
        <Icon size={20} strokeWidth={1.7} />
        <h3>{label}</h3>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item reveal" key={`${item.period}-${item.institution}`}>
            <time>{item.period}</time>
            <h4>{item.institution}</h4>
            <strong>{item.degree}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section observed-section">
      <div className="container">
        <SectionHeading
          number="03"
          english="Journey"
          title="教育与工作经历"
          description="工程教育、桥梁设计实践与耐久性科研相互贯通，形成面向真实基础设施问题的研究路径。"
        />

        <div className="timeline-layout">
          <Timeline items={education} icon={GraduationCap} label="教育经历" />
          <Timeline items={workExperience} icon={BriefcaseBusiness} label="专业经历" />
        </div>

        <div className="honors-band reveal">
          <div className="honors-intro">
            <Award size={25} strokeWidth={1.6} />
            <div>
              <span>Recognition</span>
              <h3>荣誉与认可</h3>
            </div>
          </div>
          <ul>
            {honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
