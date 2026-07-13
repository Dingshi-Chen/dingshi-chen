import { Menu, X } from 'lucide-react'
import { navigation } from '../data'

function Header({ activeSection, menuOpen, setMenuOpen, lang, setLang }) {
  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => navigateTo('home')} aria-label={lang === 'en' ? 'Back to home' : '返回首页'}>
          <span className="brand-mark">陈</span>
          <span className="brand-name">
            <strong>Dingshi Chen</strong>
          <small>{lang === 'en' ? 'Academic Profile' : '个人学术主页'}</small>
          </span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={lang === 'en' ? 'Main navigation' : '主导航'}>
          {navigation.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              onClick={() => navigateTo(item.id)}
            >
              {item.label[lang]}
            </button>
          ))}
        </nav>

        <button className="language-toggle" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} aria-label={lang === 'en' ? '切换至中文' : 'Switch to English'}>
          <span className={lang === 'en' ? 'is-active' : ''}>EN</span><i>/</i><span className={lang === 'zh' ? 'is-active' : ''}>中</span>
        </button>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? (lang === 'en' ? 'Close menu' : '关闭导航菜单') : (lang === 'en' ? 'Open menu' : '打开导航菜单')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Header
