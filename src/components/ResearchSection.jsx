import SectionHeading from './SectionHeading'
import { researchAreas } from '../data'

function ResearchSection() {
  return (
    <section id="research" className="section research-section observed-section">
      <div className="container">
        <SectionHeading
          number="01"
          english="Research"
          title="研究方向"
          description="从材料细观机理出发，连接结构性能、全寿命可靠度与重大工程决策。"
        />

        <div className="research-grid">
          {researchAreas.map(({ icon: Icon, ...area }) => (
            <article className="research-item reveal" key={area.title}>
              <div className="research-icon" aria-hidden="true">
                <Icon size={26} strokeWidth={1.65} />
              </div>
              <div className="research-number">{area.index}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul aria-label={`${area.title}关键词`}>
                {area.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
