import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import FloatingNavigation, { ThemeToggle } from './components/FloatingNavigation'
import avatar from './asserts/avatar.png'
import resume from './asserts/Akshitha Res.pdf'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uyyala-akshitha-65b94a292/', iconClass: 'fa-brands fa-linkedin' },
  { label: 'GitHub', href: 'https://github.com/akshithauyyala', iconClass: 'fa-brands fa-github' },
  { label: 'Instagram', href: 'https://www.instagram.com/akshithhaa.u/', iconClass: 'fa-brands fa-instagram' },
  { label: 'Email', href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1', iconClass: 'fa-solid fa-envelope' },
]

const spotifyLink = 'https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?si=ce7a8f679de241ba'
const favouriteText = Array.from('CURRENT FAVOURITE · ')

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Akshitha home">
      <span className="brand-dot" aria-hidden="true" />
      <span>Akshitha</span>
    </a>
  )
}

function Portrait() {
  return (
    <div className="portrait-wrap">
      <div className="portrait-placeholder">
        <img src={avatar} alt="Portrait of Akshitha" />
        
      </div>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socialLinks.map(({ label, href, icon: Icon, iconClass }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          {iconClass ? <i className={iconClass} aria-hidden="true" /> : <Icon size={15} strokeWidth={1.8} aria-hidden="true" />}
        </a>
      ))}
    </div>
  )
}

function AboutAside() {
  return (
    <div className="about-aside">
      <p className="about-aside-copy">I enjoy turning thoughtful questions into useful digital experiences, blending data, design, and code to make complex ideas feel clear.</p>
      <a className="spotify-player" href={spotifyLink} target="_blank" rel="noreferrer" aria-label="Open my current favourite on Spotify">
        <span className="spotify-disc">
          <span className="spotify-orbit-text" aria-hidden="true">
            {favouriteText.map((character, index) => <span key={`${character}-${index}`} style={{ '--character-index': index }}>{character}</span>)}
          </span>
          <span className="spotify-core"><i className="fa-brands fa-spotify" aria-hidden="true" /></span>
        </span>
        <span className="spotify-caption">Listen on Spotify</span>
      </a>
      <p className="signature">Akshitha<span aria-hidden="true">↗</span></p>
    </div>
  )
}

function ScrollingTicker() {
  return (
    <div className="ticker-wrap" aria-label="Turning ideas into intelligent solutions">
      <div className="ticker-track">
        {[0, 1, 2, 3].map((group) => (
          <div className="ticker-group" aria-hidden={group > 0} key={group}>
            <span>Data Science</span><b>//</b>
            <span>Developer</span><b>//</b>
            <span>Web Development</span><b>//</b>
            <span>Python Developer</span><b>//</b>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const [ripple, setRipple] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  function handleThemeToggle(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const diameter = Math.hypot(window.innerWidth, window.innerHeight) * 2
    setRipple({
      id: Date.now(),
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
      size: diameter,
      mode: nextTheme,
    })
    setTheme(nextTheme)
  }

  return (
    <main id="top" className="hero-shell">
      <nav className="topbar" aria-label="Main navigation">
        <Brand />
        <div className="topbar-actions">
            <ThemeToggle theme={theme} onToggle={handleThemeToggle} />
        </div>
      </nav>

      <section className="hero-grid" aria-labelledby="hero-title">
        <div id="about" className="intro-copy">
          <p className="eyebrow">Hello, I&apos;m Akshitha</p>
          <h1 id="hero-title"><span className="name-light">Uyyala</span><span className="name-green">Akshitha</span></h1>
          <div className="intro-details">
            <p className="description">Computer Science graduate specializing in Data Science, machine learning, analytics, and intelligent digital solutions.</p>
            <a className="work-button" href={resume} target="_blank" rel="noreferrer">
              <span>View my resume</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <SocialLinks />
          </div>
        </div>

        <div><Portrait /></div>

        <aside id="experience" className="hero-cards">
          <AboutAside />
        </aside>
      </section>

      <FloatingNavigation />
      <ScrollingTicker />
      {ripple && <span key={ripple.id} className={`theme-ripple theme-ripple-${ripple.mode}`} style={{ '--ripple-x': `${ripple.x}px`, '--ripple-y': `${ripple.y}px`, '--ripple-size': `${ripple.size}px` }} onAnimationEnd={() => setRipple(null)} aria-hidden="true" />}
    </main>
  )
}