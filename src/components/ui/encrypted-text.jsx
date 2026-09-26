import { useEffect, useState } from 'react'

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

function randomCharacter() {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
}

export function EncryptedText({
  text,
  encryptedClassName = '',
  revealedClassName = '',
  revealDelayMs = 50,
}) {
  const [revealedCount, setRevealedCount] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setRevealedCount(text.length)
      return undefined
    }

    setRevealedCount(0)
    const timer = window.setInterval(() => {
      setRevealedCount((count) => {
        if (count >= text.length) {
          window.clearInterval(timer)
          return count
        }
        return count + 1
      })
    }, revealDelayMs)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion, revealDelayMs, text])

  return (
    <span aria-label={text}>
      {text.split('').map((character, index) => {
        if (character === ' ') return <span key={`${character}-${index}`}> </span>

        const isRevealed = index < revealedCount
        return (
          <span className={isRevealed ? revealedClassName : encryptedClassName} key={`${character}-${index}`} aria-hidden="true">
            {isRevealed ? character : randomCharacter()}
          </span>
        )
      })}
    </span>
  )
}