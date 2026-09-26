import { useRef, useState } from 'react'
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Home,
  Mail,
  Moon,
  Sun,
  Timeline,
  UserRound,
} from 'lucide-react'

const navigationItems = [
  { title: 'Home', href: '#top', icon: Home },
  { title: 'About', href: '#about', icon: UserRound },
  { title: 'Projects', href: '#projects', icon: BriefcaseBusiness },
  { title: 'Education', href: '#education', icon: GraduationCap },
  { title: 'Skills', href: '#skills', icon: Code2 },
  { title: 'Experience', href: '#experience', icon: Timeline },
  { title: 'Contact', href: '#contact', icon: Mail },
]

function DockItem({ item, index, onNavigate, activeItem }) {
  const Icon = item.icon
  const itemRef = useRef(null)
  const [distance, setDistance] = useState(100)
  const scale = distance < 80 ? 1 + ((80 - distance) / 80) * 0.28 : 1
  const isActive = activeItem === item.title

  function handlePointerMove(event) {
    const bounds = itemRef.current?.getBoundingClientRect()
    if (bounds) setDistance(Math.abs(event.clientX - (bounds.left + bounds.width / 2)))
  }

  return (
    <a
      ref={itemRef}
      className={`dock-item ${isActive ? 'is-active' : ''}`}
      href={item.href}
      aria-label={item.title}
      onClick={() => onNavigate(item.title)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setDistance(100)}
      style={{ '--dock-scale': scale, '--dock-delay': `${index * 25}ms` }}
    >
      <span className="dock-icon"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></span>
    </a>
  )
}

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'}`} type="button" aria-pressed={!isDark} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={onToggle}>
      <span className="theme-toggle-track" aria-hidden="true" />
      <span className={`theme-toggle-thumb ${isDark ? 'is-dark' : ''}`}>
        {isDark ? <Moon size={13} aria-hidden="true" /> : <Sun size={13} aria-hidden="true" />}
      </span>
      <span className="theme-toggle-label">{isDark ? 'Night' : 'Day'}</span>
    </button>
  )
}

export default function FloatingNavigation() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div className="floating-navigation" aria-label="Portfolio navigation">
      <div className="desktop-dock">
        {navigationItems.map((item, index) => (
          <DockItem key={item.title} item={item} index={index} onNavigate={setActiveItem} activeItem={activeItem} />
        ))}
      </div>
    </div>
  )
}