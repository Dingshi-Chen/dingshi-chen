import { useMemo, useState } from 'react'
import { Check, Copy, ExternalLink, Search } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { publications } from '../archiveData'

function PublicationsSection({ lang }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('all')
  const [copied, setCopied] = useState(null)
  const years = [...new Set(publications.map((item) => item.year))]
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return publications.filter((item) => (year === 'all' || item.year === year) && (!term || `${item.title} ${item.authors} ${item.journal} ${item.doi ?? ''}`.toLowerCase().includes(term)))
  }, [query, year])

  const copyCitation = async (item, index) => {
    const citation = `${item.authors} ${item.title}. ${item.journal}, ${item.year}, ${item.volume}.${item.doi ? ` https://doi.org/${item.doi}` : ''}`
    try { await navigator.clipboard.writeText(citation); setCopied(index); window.setTimeout(() => setCopied(null), 1600) } catch { setCopied(null) }
  }

  return (
    <section id="publications" className="section publications-section observed-section">
      <div className="container">
        <div className="section-topline">
          <SectionHeading number="02" english="Publication Archive" title={lang === 'en' ? 'Publications & research outputs' : '论文与研究成果'} description={lang === 'en' ? 'A searchable publication archive. Titles remain in their original language; verified DOI records link directly to the publisher.' : '可检索的论文档案。论文题目保持原始语言，已核验 DOI 可直接访问出版页面。'} />
          <div className="output-summary"><span>{lang === 'en' ? 'Listed' : '已上线'}</span><strong>{publications.length}</strong><small>{lang === 'en' ? 'publications' : '篇论文'}</small></div>
        </div>

        <div className="publication-toolbar">
          <label className="publication-search"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={lang === 'en' ? 'Search title, author, journal or DOI' : '检索题目、作者、期刊或 DOI'} /></label>
          <div className="year-filter" aria-label={lang === 'en' ? 'Filter by year' : '按年份筛选'}>
            <button className={year === 'all' ? 'is-active' : ''} onClick={() => setYear('all')}>{lang === 'en' ? 'All' : '全部'}</button>
            {years.map((item) => <button key={item} className={year === item ? 'is-active' : ''} onClick={() => setYear(item)}>{item}</button>)}
          </div>
        </div>

        <div className="publication-archive">
          {filtered.map((item, index) => (
            <article className="publication-entry reveal" key={`${item.title}-${item.year}`}>
              <div className="publication-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="publication-main">
                <div className="publication-meta"><span>{item.year}</span><span>{item.journal}</span><span>{item.role[lang]}</span></div>
                <h3>{item.title}</h3>
                <p>{item.authors} <i>{item.journal}</i>, {item.year}, {item.volume}.</p>
                <div className="publication-links">
                  {item.doi ? <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer"><ExternalLink size={14} /> DOI: {item.doi}</a> : <span>{lang === 'en' ? 'DOI not assigned / to be confirmed' : '未分配 DOI / 待确认'}</span>}
                  <button onClick={() => copyCitation(item, index)}>{copied === index ? <Check size={14} /> : <Copy size={14} />}{copied === index ? (lang === 'en' ? 'Copied' : '已复制') : (lang === 'en' ? 'Copy citation' : '复制引用')}</button>
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <p className="archive-empty">{lang === 'en' ? 'No matching publications.' : '没有匹配的论文。'}</p>}
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection
