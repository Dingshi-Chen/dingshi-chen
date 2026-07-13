import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import Header from './components/Header'
import ResearchSection from './components/ResearchSection'
import PublicationsSection from './components/PublicationsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import { metrics, navigation } from './data'
import portrait from './assets/dingshi-chen.webp'

function HeroBridge() {
  return (
    <svg className="hero-bridge" viewBox="0 0 760 620" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="bridge-deck" d="M18 510 H748" />
      <path className="bridge-tower" d="M150 510 V160 M610 510 V160" />
      <path className="bridge-main" d="M150 160 Q380 18 610 160" />
      <path className="bridge-cable" d="M150 160 L232 510 M150 160 L310 510 M150 160 L380 510 M610 160 L528 510 M610 160 L450 510 M610 160 L380 510" />
      <path className="bridge-foundation" d="M112 510 V542 H188 V510 M572 510 V542 H648 V510" />
    </svg>
  )
}

function App() {
  const [lang, setLang] = useState('en')
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'
  }, [lang])

  useEffect(() => {
    const observed = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -62% 0px', threshold: [0, 0.1, 0.4] },
    )

    observed.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )
    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        lang={lang}
        setLang={setLang}
      />

      <main>
        <section id="home" className="hero observed-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="hero-kicker">{lang === 'en' ? 'Civil & Bridge Engineering' : '土木与桥梁工程'}</div>
              <h1>{lang === 'en' ? 'Dingshi Chen' : '陈定市'}</h1>
              <div className="english-name">{lang === 'en' ? 'PhD · Researcher · Bridge Engineer' : 'DINGSHI CHEN'}</div>
              <p className="hero-role">{lang === 'en' ? 'Researcher in bridge engineering and concrete durability' : '土木工程博士 · 桥梁工程与混凝土耐久性研究者'}</p>
              <p className="hero-description">
                {lang === 'en' ? 'My work connects concrete durability in harsh environments, life-cycle assessment of bridges and multiscale numerical modelling with the practice of major infrastructure engineering.' : '聚焦复杂环境下混凝土结构耐久性、桥梁全寿命评估与多尺度数值模拟，连接科学研究与重大工程实践。'}
              </p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollTo('publications')}>
                  {lang === 'en' ? 'Explore publications' : '查看研究成果'} <ArrowRight size={18} />
                </button>
                <a className="secondary-button" href="mailto:scholar_cds@163.com">
                  {lang === 'en' ? 'Contact me' : '联系我'} <Mail size={18} />
                </a>
              </div>
              <div className="metric-row">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="portrait-stage" aria-label={lang === 'en' ? 'Portrait of Dingshi Chen' : '陈定市个人照片'}>
              <HeroBridge />
              <div className="portrait-frame">
                <div className="portrait-corner" aria-hidden="true" />
                <img src={portrait} alt="陈定市" />
              </div>
              <div className="portrait-caption">
                <span>Researcher</span>
                <strong>Civil &amp; Bridge Engineering</strong>
              </div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('research')} aria-label="向下浏览研究方向">
            <span>Scroll to explore</span>
            <ArrowDown size={18} />
          </button>
        </section>

        <ResearchSection lang={lang} />
        <PublicationsSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
      </main>

      <ContactSection lang={lang} />
    </>
  )
}

export default App
