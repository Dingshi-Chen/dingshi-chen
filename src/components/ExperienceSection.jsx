import { Award, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, honors, workExperience } from '../data'

function Timeline({ items, icon: Icon, label, lang }) {
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
            <h4>{item.institution[lang]}</h4>
            <strong>{item.degree[lang]}</strong>
            <p>{item.detail[lang]}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

function ExperienceSection({ lang }) {
  return (
    <section id="experience" className="section experience-section observed-section">
      <div className="container">
        <SectionHeading
          number="03"
          english="Journey"
          title={lang === 'en' ? 'Education & experience' : '教育与工作经历'}
          description={lang === 'en' ? 'An integrated path through engineering education, bridge design practice and durability research, grounded in real infrastructure challenges.' : '工程教育、桥梁设计实践与耐久性科研相互贯通，形成面向真实基础设施问题的研究路径。'}
        />

        <div className="timeline-layout">
          <Timeline items={education} icon={GraduationCap} label={lang === 'en' ? 'Education' : '教育经历'} lang={lang} />
          <Timeline items={workExperience} icon={BriefcaseBusiness} label={lang === 'en' ? 'Professional experience' : '专业经历'} lang={lang} />
        </div>

        <div className="honors-band reveal">
          <div className="honors-intro">
            <Award size={25} strokeWidth={1.6} />
            <div>
              <span>Recognition</span>
              <h3>{lang === 'en' ? 'Honours & recognition' : '荣誉与认可'}</h3>
            </div>
          </div>
          <ul>
            {honors.map((honor) => (
              <li key={honor.en}>{honor[lang]}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
