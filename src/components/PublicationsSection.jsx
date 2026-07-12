import { useState } from 'react'
import { Check, Copy, Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { publications } from '../data'

function PublicationsSection() {
  const [expanded, setExpanded] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const visiblePublications = expanded ? publications : publications.slice(0, 7)

  const copyCitation = async (citation, index) => {
    try {
      await navigator.clipboard.writeText(citation)
      setCopiedIndex(index)
      window.setTimeout(() => setCopiedIndex(null), 1800)
    } catch {
      setCopiedIndex(null)
    }
  }

  return (
    <section id="publications" className="section publications-section observed-section">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            number="02"
            english="Selected Work"
            title="代表性成果"
            description="聚焦多场耦合侵蚀、细观不确定性、寿命预测与桥梁可靠度。"
          />
          <div className="output-summary" aria-label="学术成果概况">
            <span>代表作</span>
            <strong>{publications.length}</strong>
            <small>篇论文</small>
          </div>
        </div>

        <div className="publication-table">
          <div className="publication-head" aria-hidden="true">
            <span>年份</span>
            <span>论文</span>
            <span>期刊</span>
            <span>贡献</span>
            <span></span>
          </div>
          {visiblePublications.map((publication, index) => (
            <article className="publication-row reveal" key={`${publication.title}-${publication.year}`}>
              <div className="publication-year">{publication.year}</div>
              <h3>{publication.title}</h3>
              <p className="publication-journal">{publication.journal}</p>
              <span className="publication-role">{publication.role}</span>
              <button
                className="copy-button"
                onClick={() => copyCitation(publication.citation, index)}
                aria-label={`复制论文引用：${publication.title}`}
                title="复制引用"
              >
                {copiedIndex === index ? <Check size={17} /> : <Copy size={17} />}
                <span>{copiedIndex === index ? '已复制' : '引用'}</span>
              </button>
            </article>
          ))}
        </div>

        <button className="text-action publication-toggle" onClick={() => setExpanded((value) => !value)}>
          <Plus className={expanded ? 'rotated' : ''} size={18} />
          {expanded ? '收起论文列表' : `查看全部 ${publications.length} 篇代表作`}
        </button>
      </div>
    </section>
  )
}

export default PublicationsSection
