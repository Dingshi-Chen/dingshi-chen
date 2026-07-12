import { useState } from 'react'
import { ArrowUp, Check, Copy, Mail, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'

const email = 'scholar_cds@163.com'

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer id="contact" className="contact-section observed-section">
      <div className="contact-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 480" preserveAspectRatio="none">
          <path d="M0 375 H1440" />
          <path d="M245 375 V215 M1195 375 V215" />
          <path d="M245 215 Q720 18 1195 215" />
          <path d="M245 215 L370 375 M245 215 L500 375 M245 215 L635 375 M1195 215 L1070 375 M1195 215 L940 375 M1195 215 L805 375" />
        </svg>
      </div>
      <div className="container contact-content">
        <SectionHeading
          number="05"
          english="Contact"
          title="欢迎交流与合作"
          description="期待围绕混凝土结构耐久性、桥梁全寿命评估与多尺度建模开展学术讨论和项目合作。"
          inverse
        />

        <div className="contact-layout">
          <a className="email-link" href={`mailto:${email}`}>
            <Mail size={22} />
            <span>{email}</span>
          </a>
          <div className="location-line">
            <MapPin size={19} />
            <span>中国 · 长沙</span>
          </div>
          <button className="copy-email" onClick={copyEmail}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? '邮箱已复制' : '复制邮箱'}
          </button>
        </div>

        <div className="footer-bottom">
          <div>
            <strong>DINGSHI CHEN</strong>
            <span>桥梁工程与混凝土耐久性研究</span>
          </div>
          <p>© {new Date().getFullYear()} 陈定市. All rights reserved.</p>
          <button
            className="back-to-top"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="返回页面顶部"
            title="返回顶部"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default ContactSection
