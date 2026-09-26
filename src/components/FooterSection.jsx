import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const contactEmail='akshithauyyala@gmail.com'

const footerSocials = [
  { name: 'Instagram', href: 'https://www.instagram.com/akshithhaa.u/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/uyyala-akshitha-65b94a292/' },
  { name: 'GitHub', href: 'https://github.com/akshithauyyala' },
]

const footerLinks = [
  { name: 'Home', href: '#top' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

function FooterLinks({ links, className = '' }) {
  return (
    <nav className={className} aria-label="Footer navigation">
      {links.map((link) => (
        <a key={link.name} href={link.href}>{link.name}<span aria-hidden="true">→</span></a>
      ))}
    </nav>
  )
}

export default function FooterSection() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer id="contact" ref={footerRef} className={`site-footer ${isVisible ? 'is-visible' : ''}`}>
      <div className="footer-cta">
        <div className="footer-main-copy">
          <p className="footer-kicker">Final thoughts</p>
          <h2>Let&apos;s build<br /><span>something amazing.</span></h2>
          <a className="footer-cta-button" href={contactEmail ? `mailto:${contactEmail}` : '#contact'}>
            <span>Get in touch</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-detail-grid">
          <div className="footer-detail-column">
            <p className="footer-label">Contact</p>
            {contactEmail ? <a className="footer-email" href={`mailto:${contactEmail}`}>{contactEmail}</a> : <span className="footer-muted-link">Email available on request</span>}
            <span className="footer-location">India</span>
          </div>
          <div className="footer-detail-column">
            <p className="footer-label">Social</p>
            <nav className="footer-socials" aria-label="Social links">
              {footerSocials.map((social) => social.href ? (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}<span aria-hidden="true">→</span></a>
              ) : <span className="footer-muted-link" key={social.name}>{social.name} <small>soon</small></span>)}
            </nav>
          </div>
          <div className="footer-detail-column footer-quick-links">
            <p className="footer-label">Quick links</p>
            <FooterLinks links={footerLinks} />
          </div>
        </div>
      </div>

      <div className="footer-meta">
        <span>© Akshitha 2026</span>
        <span>Made with ♥ + code</span>
        <span>Designed &amp; built by Akshitha</span>
      </div>

    </footer>
  )
}