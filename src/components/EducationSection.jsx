const educationItems = [
  {
    label: 'Schooling',
    institution: 'Johnson Global High School',
    course: 'General mathematics',
    period: '2010-2020',
    grade: '98%',},
  {
    label: 'High school',
    institution: 'Alphores Junior College',
    course: 'MPC (Maths, Physics, Chemistry)',
    period: '2020-2022',
    grade: '70%',
  },
  {
    label: 'University',
    institution: 'Marri laxman reddy Institute of Technology and Management',
    course: 'B.Tech in Computer Science — Data Science',
    period: '2022 — 2026',
    grade: '8.3 CGPA',
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-title">
      <div className="education-heading">
        <p className="section-kicker">Academic path</p>
        <h2 id="education-title">Education</h2>
        <p>My academic journey has shaped how I approach technology, research, and creative problem-solving.</p>
      </div>

      <div className="education-grid">
        {educationItems.map((item) => (
          <article className="education-item" key={item.label}>
            <p className="education-label"><span aria-hidden="true">●</span>{item.label}</p>
            <h3>{item.institution}</h3>
            <p className="education-course">{item.course}</p>
            <div className="education-meta">
              <span>{item.period}</span>
              <span>{item.grade}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}