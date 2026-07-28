import { useEffect, useState } from 'react'
import { profile, projects, skills } from './data'

function Nav() {
  const links = [
    ['About', '#about'],
    ['Projects', '#projects'],
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
        <a className="btn btn--ghost" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}

function About() {
  const stats = [
    ['4+', 'Public projects'],
    ['21 CFR', 'Part 11 compliant systems'],
    ['3', 'Languages (EN / FR / AR)'],
  ]
  return (
    <section className="section" id="about">
      <h2 className="section__title">
        <span className="section__num">01</span> About
      </h2>
      <div className="about">
        <div className="about__text">
          <p>
            I'm a software engineer based in {profile.location}, drawn to problems where a
            wrong answer has real consequences. My flagship project, <strong>BatchTwin</strong>,
            digitizes pharmaceutical batch records — a domain where every signature, deviation,
            and gram of material has to be traceable and tamper-evident.
          </p>
          <p>
            That mindset carries into everything I build: clean TypeScript front-ends,
            resilient FastAPI back-ends, and DevOps pipelines that ship reliably. I like
            systems that work offline, hold their integrity under audit, and still feel good to use.
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
              <a
                className="card__link"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} on GitHub`}
              >
                ↗
              </a>
            </div>
            <p className="card__tagline">{p.tagline}</p>
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

function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section__title">
        <span className="section__num">03</span> Skills
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
        <span className="section__num">04</span> Contact
      </h2>
      <p className="contact__lead">
        Have a project in mind, or want to talk about industrial software? I'd love to hear from you.
      </p>
      <div className="contact__actions">
        <a className="btn btn--primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
          github.com/{profile.handle}
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
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
