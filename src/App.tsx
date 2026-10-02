import { useEffect, useState } from 'react'
import { achievements, certifications, experience, profile, projects, skills } from './data'

function Nav() {
  const links = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Awards', '#awards'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ]
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__logo">OL</span>
        <span className="nav__name">Oussama Labidi</span>
      </a>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav__cta" href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <p className="hero__eyebrow">Hi, I'm</p>
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__role">{profile.role}</p>
      <p className="hero__summary">{profile.summary}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#projects">
          View my work
        </a>
        <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </div>
    </section>
  )
}

function About() {
  const stats = [
    ['1st', 'Place — The Build Room'],
    ['5', 'Hackathons & programs'],
    ['3', 'Languages (AR / FR / EN)'],
  ]
  return (
    <section className="section" id="about">
      <h2 className="section__title">
        <span className="section__num">01</span> About
      </h2>
      <div className="about">
        <div className="about__text">
          <p>
            I'm an AI and full-stack developer based in {profile.location}, studying Business
            Computing at Esprit. I'm currently building <strong>Feyaklink</strong>, an AI-powered
            scam-detection and responsible-consumption platform selected for Esprit's 13th Bal des
            Projets.
          </p>
          <p>
            I like shipping complete products — self-hosted LLM pipelines, FastAPI microservices,
            Laravel and React front-ends — and I teach Unity and C# to new developers at GOMYCODE.
            I also founded Banzai Shop, a sustainable-fashion marketplace I've run since 2022.
          </p>
        </div>
        <div className="about__stats">
          {stats.map(([n, label]) => (
            <div className="stat" key={label}>
              <span className="stat__num">{n}</span>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section__title">
        <span className="section__num">02</span> Projects
      </h2>
      <div className="projects">
        {projects.map((p) => (
          <article className={`card ${p.featured ? 'card--featured' : ''}`} key={p.name}>
            <div className="card__head">
              <h3 className="card__title">
                {p.name}
                {p.featured && <span className="card__badge">Featured</span>}
              </h3>
              <div className="card__links">
                {p.live && (
                  <a className="card__link" href={p.live} target="_blank" rel="noreferrer">
                    Live ↗
                  </a>
                )}
                {p.repo && (
                  <a className="card__link" href={p.repo} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                )}
              </div>
            </div>
            <p className="card__tagline">{p.tagline}</p>
            {p.award && <p className="card__award">🏆 {p.award}</p>}
            <p className="card__desc">{p.description}</p>
            {p.highlights.length > 0 && (
              <ul className="card__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <div className="card__tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section__title">
        <span className="section__num">03</span> Experience
      </h2>
      <div className="timeline">
        {experience.map((e) => (
          <div className="timeline__item" key={e.role}>
            <div className="timeline__head">
              <h3 className="timeline__role">
                {e.role} <span className="timeline__org">· {e.org}</span>
              </h3>
              <span className="timeline__period">{e.period}</span>
            </div>
            {e.points.length > 0 && (
              <ul className="card__highlights">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function Awards() {
  return (
    <section className="section" id="awards">
      <h2 className="section__title">
        <span className="section__num">04</span> Awards & Certifications
      </h2>
      <div className="awards">
        {achievements.map(([rank, event, date]) => (
          <div className="award" key={event}>
            <span className="award__rank">{rank}</span>
            <span className="award__event">{event}</span>
            <span className="award__date">{date}</span>
          </div>
        ))}
      </div>
      <h3 className="skills__label awards__certs">Certifications</h3>
      <div className="skills__items">
        {certifications.map((c) => (
          <span className="tag" key={c}>
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">
        <span className="section__num">05</span> Skills
      </h2>
      <div className="skills">
        {skills.map((s) => (
          <div className="skills__group" key={s.group}>
            <h3 className="skills__label">{s.group}</h3>
            <div className="skills__items">
              {s.items.map((i) => (
                <span className="tag" key={i}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <h2 className="section__title">
        <span className="section__num">06</span> Contact
      </h2>
      <p className="contact__lead">
        Open to internships, collaborations and hackathon teams — I'd love to hear from you.
      </p>
      <div className="contact__actions">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noreferrer">
          CV (PDF)
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & Vite.
      </p>
    </footer>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(Number.isFinite(scrolled) ? scrolled : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
