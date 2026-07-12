import { Menu, X } from 'lucide-react'
import { navigation } from '../data'

function Header({ activeSection, menuOpen, setMenuOpen }) {
  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => navigateTo('home')} aria-label="返回首页">
          <span className="brand-mark">陈</span>
          <span className="brand-name">
            <strong>Dingshi Chen</strong>
            <small>Academic Profile</small>
          </span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="主导航">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'is-active' : ''}
              onClick={() => navigateTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
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
