const skills = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'Data Science', icon: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/F4F4EE' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
  { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
  { name: 'Scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-heading">
        <p className="section-kicker">Tools &amp; thinking</p>
        <h2 id="skills-title">My skills</h2>
        <p>A focused toolkit for turning data, technology, and curious questions into meaningful digital experiences.</p>
      </div>

      <div className="skills-grid">
        {skills.map(({ name, icon }, index) => (
          <span className="skill-badge" style={{ '--skill-delay': `${index * 45}ms` }} key={name} title={name}>
            <img className="skill-badge-icon" src={icon} alt="" aria-hidden="true" />
            <span>{name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}