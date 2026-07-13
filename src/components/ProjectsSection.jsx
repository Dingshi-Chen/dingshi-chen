import { useState } from 'react'
import { ArrowUpRight, Building2, Camera, ChevronDown, FlaskConical, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { engineeringProjects, researchProjects } from '../archiveData'

function BridgeVisual({ type, lang }) {
  return <div className={`bridge-placeholder bridge-${type}`}>
    <div className="placeholder-label"><Camera size={15} />{lang === 'en' ? 'Project image placeholder' : '项目图片预留位'}</div>
    <svg viewBox="0 0 520 160" aria-hidden="true"><path className="water" d="M0 142H520"/><path className="deck" d="M18 110H502"/><path className="tower" d="M120 110V38M400 110V38"/><path className="archline" d="M70 110Q260 8 450 110"/><path className="mainline" d="M120 38Q260 -5 400 38"/><path className="cables" d="M120 38L70 110M120 38L170 110M120 38L230 110M400 38L450 110M400 38L350 110M400 38L290 110"/></svg>
  </div>
}

function EngineeringCard({ project, index, lang }) {
  const [open, setOpen] = useState(false)
  return <article className={`engineering-card reveal ${open ? 'is-open' : ''}`}>
    <BridgeVisual type={project.visual} lang={lang} />
    <div className="engineering-card-body">
      <div className="project-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.phase[lang]}</span></div>
      <h3>{project.title[lang]}</h3>
      <div className="project-location"><MapPin size={14}/>{project.location[lang]} · {project.period}</div>
      <div className="project-specs"><span>{project.type[lang]}</span><strong>{project.span[lang]}</strong></div>
      <p>{project.scope[lang]}</p>
      <button className="project-expand" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? (lang === 'en' ? 'Hide details' : '收起详情') : (lang === 'en' ? 'View responsibilities' : '查看职责与亮点')}<ChevronDown size={16}/></button>
      {open && <div className="project-extra"><div><b>{lang === 'en' ? 'Role' : '本人角色'}</b><span>{project.role[lang]}</span></div>{project.highlights.map((item) => <div key={item.en}><b>{lang === 'en' ? 'Highlight' : '技术亮点'}</b><span>{item[lang]}</span></div>)}<div className="photo-note">{lang === 'en' ? 'A project photograph can be added here later without changing the layout.' : '后期可直接替换为对应项目照片，无需调整版式。'}</div></div>}
    </div>
  </article>
}

function ResearchCard({ project, index, lang }) {
  return <article className="research-project-card reveal">
    <div className="research-project-number">R{String(index + 1).padStart(2, '0')}</div>
    <div className="research-project-icon"><FlaskConical size={22}/></div>
    <time>{project.period}</time><h3>{project.title[lang]}</h3><p className="programme-name">{project.programme[lang]}</p>
    <div className="research-metadata"><span>{project.role[lang]}</span><span>{project.budget[lang]}</span><span>{typeof project.code === 'string' ? project.code : project.code[lang]}</span></div>
    <p>{project.description[lang]}</p><div className="research-contribution"><b>{lang === 'en' ? 'Contribution' : '本人贡献'}</b>{project.contributions[lang]}</div>
  </article>
}

function ProjectsSection({ lang }) {
  const [category, setCategory] = useState('engineering')
  const projects = category === 'engineering' ? engineeringProjects : researchProjects
  return <section id="projects" className="section projects-section observed-section"><div className="container">
    <div className="section-topline"><SectionHeading number="04" english="Project Archive" title={lang === 'en' ? 'Engineering & research projects' : '工程与科研项目档案'} description={lang === 'en' ? 'A detailed record of construction-document design, design consultancy and funded research. Bridge cards are ready for project photographs.' : '完整呈现施工图设计、设计咨询及科研项目；桥梁卡片已为后期项目照片预留位置。'} />
      <div className="project-tabs" role="tablist"><button className={category === 'engineering' ? 'is-active' : ''} onClick={() => setCategory('engineering')}><Building2 size={15}/>{lang === 'en' ? `Engineering (${engineeringProjects.length})` : `工程项目（${engineeringProjects.length}）`}</button><button className={category === 'research' ? 'is-active' : ''} onClick={() => setCategory('research')}><FlaskConical size={15}/>{lang === 'en' ? `Research (${researchProjects.length})` : `科研项目（${researchProjects.length}）`}</button></div>
    </div>
    <div className={category === 'engineering' ? 'engineering-grid' : 'research-project-grid'}>{projects.map((project, index) => category === 'engineering' ? <EngineeringCard key={project.id} project={project} index={index} lang={lang}/> : <ResearchCard key={project.id} project={project} index={index} lang={lang}/>)}</div>
    <div className="archive-footnote"><ArrowUpRight size={16}/>{lang === 'en' ? 'Project facts are based on the supplied CV. Missing span or image information is explicitly marked for later completion.' : '项目资料依据所提供简历整理；缺少的跨径或图片信息已明确标注，后续可继续补充。'}</div>
  </div></section>
}

export default ProjectsSection
