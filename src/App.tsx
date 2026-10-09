import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

const experience = [
  {
    dates: "OCT 2025 — PRESENT",
    company: "Persistent Systems",
    role: "Lead Software Engineer · Bengaluru",
    summary:
      "Backend Engineer at BCD TripTech, implementing airline onboarding with IATA NDC standards. I own end-to-end integration features and contribute to agentic automation that reduces airline integration timelines from months to days.",
    detail: "10+ stories and critical fixes delivered in the first two months",
  },
  {
    dates: "NOV 2024 — OCT 2025",
    company: "BDI Plus Lab Pvt. Ltd.",
    role: "SDE-2, Backend Developer · Bengaluru",
    summary:
      "Optimized core backend APIs and collaborated with marketing and CRM teams on revenue-driving features. As Deployment Manager for Afficiency, I resolved architectural blockers and led deployment automation R&D.",
    detail: "Reduced critical API latency from 25 seconds to under 2 seconds",
  },
  {
    dates: "SEP 2023 — NOV 2024",
    company: "ProbePlus Innovative Solution",
    role: "SE-1, Backend Developer · Bengaluru",
    summary:
      "Built healthcare backends spanning automated patient communication, ABHA-compliant health record exchange, FHIR/OpenEHR interoperability, real-time ECG streaming, and role-based applications.",
    detail: "Designed a 7-module Go backend and stored 1M+ live ECG records",
  },
  {
    dates: "APR 2022 — AUG 2022",
    company: "Digital Divide Data",
    role: "Python Developer Intern · Remote",
    summary:
      "Worked with a global team to transform client data, support model training, and design algorithms for faster face detection and efficient disease diagnosis.",
    detail: "Python · AWS · Machine Learning · YOLO · Haar Cascade",
  },
]

const projects = [
  {
    number: "01",
    title: "Airline integration automation",
    description:
      "Production airline onboarding using IATA NDC standards, with agentic automation designed to compress a six-to-seven-month integration cycle into days.",
    tags: ["Backend", "IATA NDC", "Automation"],
  },
  {
    number: "02",
    title: "Interoperable health records",
    description:
      "An ABHA-compliant backend enabling secure patient onboarding, EMR conversion, and health record synchronization across FHIR and OpenEHR systems.",
    tags: ["Java", "Spring Boot", "EHRbase"],
  },
  {
    number: "03",
    title: "Live ECG monitoring",
    description:
      "A Go and Socket.IO server that fetches remote ECG streams, stores more than one million MongoDB records, and lets doctors monitor live updates.",
    tags: ["Go", "Socket.IO", "MongoDB"],
  },
  {
    number: "04",
    title: "Patient communication system",
    description:
      "A Python backend using AWS Tesseract to automate patient communication across SMS, WhatsApp, and email, reducing repetitive manual work.",
    tags: ["Python", "AWS", "Pandas"],
  },
]

const skills = [
  "Go",
  "Python",
  "Java",
  "JavaScript",
  "React.js",
  "FastAPI",
  "Go Fiber",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Keycloak",
  "Microservices",
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.1 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.3 7.9H1.7V22h3.6V7.9ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.4c0-3.8-2-5.8-4.8-5.8-2.2 0-3.2 1.2-3.8 2.1V7.9h-3.6V22h3.6v-7c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.7V22h3.6v-8.6Z"
      />
    </svg>
  )
}

function SocialLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <div className={`social-links ${showLabels ? "labeled" : ""}`}>
      <a
        href="https://github.com/ishika0102"
        target="_blank"
        rel="noreferrer"
        aria-label="Ishika Dubey on GitHub"
      >
        <GithubIcon />
        {showLabels && <span>GitHub</span>}
      </a>
      <a
        href="https://www.linkedin.com/in/ishika-dubey-22d12/"
        target="_blank"
        rel="noreferrer"
        aria-label="Ishika Dubey on LinkedIn"
      >
        <LinkedinIcon />
        {showLabels && <span>LinkedIn</span>}
      </a>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-30% 0px -60% 0px" },
    )

    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Ishika Dubey — home">
          Ishika <span>Dubey</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="orb orb-one" />
          <div className="hero-copy">
            <p className="eyebrow">LEAD SOFTWARE ENGINEER · BENGALURU</p>
            <h1>
              Building reliable
              <br />
              <em>systems</em> that scale.
            </h1>
            <p className="intro">
              I’m Ishika, a backend engineer crafting fast, secure, and
              interoperable software across travel, healthcare, and automation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#experience">
                Explore my work <ArrowIcon />
              </a>
              <a
                className="text-link"
                href="/assets/Ishika_Dubey_Resume.pdf"
                download
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="/assets/ishika-dubey.jpeg"
                alt="Ishika Dubey, Lead Software Engineer"
              />
            </div>
            <div className="portrait-note">
              <span>01</span>
              <p>
                Backend engineer with a product mindset and a focus on
                meaningful impact.
              </p>
            </div>
          </div>
          <a className="scroll-cue" href="#experience">
            <span>SCROLL TO DISCOVER</span>
            <i />
          </a>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">02 · EXPERIENCE</p>
            <h2>
              A career built on
              <br />
              <em>ownership.</em>
            </h2>
            <p>
              From healthcare interoperability to airline onboarding, I turn
              complex backend challenges into dependable production systems.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker" />
                <p className="dates">{item.dates}</p>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <p className="summary">{item.summary}</p>
                <p className="result">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading horizontal">
            <div>
              <p className="eyebrow">03 · SELECTED WORK</p>
              <h2>
                Systems designed
                <br />
                for the <em>real world.</em>
              </h2>
            </div>
            <p>
              A selection of engineering challenges I’ve helped solve across
              high-stakes, data-heavy environments.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="card-arrow">
                  <ArrowIcon />
                </span>
              </article>
            ))}
          </div>
          <div className="skills-block">
            <p className="eyebrow">TECHNOLOGY I WORK WITH</p>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="education-title">
            <p className="eyebrow">04 · EDUCATION & RECOGNITION</p>
            <h2>
              Always learning.
              <br />
              Always <em>sharing.</em>
            </h2>
          </div>
          <div className="education-content">
            <article className="degree-card">
              <p className="dates">2019 — 2023</p>
              <h3>Bachelor of Engineering</h3>
              <p>Computer Science & Engineering</p>
              <strong>AMC Engineering College, VTU</strong>
              <div className="score">
                <span>CGPA</span>
                <b>9.03</b>
                <span>/ 10.00</span>
              </div>
            </article>
            <div className="recognition-list">
              <article>
                <span>2025</span>
                <div>
                  <h3>Hackathon Judge</h3>
                  <p>
                    Hackzion V.2, national-level hackathon at AMC Engineering
                    College
                  </p>
                </div>
              </article>
              <article>
                <span>AI</span>
                <div>
                  <h3>Google AI Immersion Day Invitee</h3>
                  <p>
                    Selected for an exclusive event supporting high-potential AI
                    startups
                  </p>
                </div>
              </article>
              <article>
                <span>AZ</span>
                <div>
                  <h3>Microsoft Azure AI Fundamentals</h3>
                  <p>
                    AI-900 certified, with a foundation in AI-driven system
                    design
                  </p>
                </div>
              </article>
              <article>
                <span>+</span>
                <div>
                  <h3>Mentor, trainer & speaker</h3>
                  <p>
                    Technical trainer at Tap Academy and orientation speaker
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">05 · CONTACT</p>
            <h2>
              Let’s build something
              <br />
              <em>meaningful.</em>
            </h2>
            <p>
              I’m always open to thoughtful conversations about backend
              engineering, systems design, healthcare technology, and ambitious
              product ideas.
            </p>
          </div>
          <div className="contact-grid">
            <a
              className="contact-card email"
              href="mailto:ishika.idc@gmail.com"
            >
              <span>EMAIL</span>
              <strong>ishika.idc@gmail.com</strong>
              <ArrowIcon />
            </a>
            <div className="contact-card location">
              <span>LOCATION</span>
              <strong>Bengaluru, India</strong>
              <p>Available for opportunities worldwide</p>
            </div>
            <div className="contact-card follow">
              <span>FOLLOW</span>
              <SocialLinks showLabels />
            </div>
          </div>
          <footer>
            <a className="wordmark footer-mark" href="#home">
              Ishika <span>Dubey</span>
            </a>
            <p>Designed with intention. Built with care.</p>
            <a href="#home" className="back-top">
              Back to top <span>↑</span>
            </a>
          </footer>
        </section>
      </main>
    </div>
  )
}
