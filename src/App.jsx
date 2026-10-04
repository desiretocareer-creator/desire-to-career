import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronDown, Cloud, Code2, Cog, Database, Globe2, HeartPulse, Landmark, Search, ShieldCheck, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaLinkedinIn, FaBriefcase } from 'react-icons/fa6'
import { SiIndeed, SiGlassdoor, SiMonster, SiWellfound } from 'react-icons/si'
import { Link } from 'react-router-dom'
import companyLogo from './assets/company-logo.png'
import SiteNavigation from './SiteNavigation'
import { siteConfig } from './siteConfig'
import './site.css'

const photos = {
  hero: 'photo-1521737711867-e3b97375f902',
  people: 'photo-1522071820081-009f0129c71c',
  resume: 'photo-1454165804606-c3d57bc86b40',
  preparation: 'photo-1551836022-d5d88e9218df',
  team: 'photo-1552664730-d307ca884978',
  ai: 'photo-1677442136019-21780ecad995',
  data: 'photo-1551288049-bebda4e38f71',
  cloud: 'photo-1451187580459-43490279c0fa',
  security: 'photo-1510511459019-5d36f74eacde',
  finance: 'photo-1460925895917-afdab827c52f',
  health: 'photo-1576091160399-112ba8d25d1d',
  engineering: 'photo-1581091226825-a6a2a5aee158',
  candidate: 'photo-1516321318423-f06f85e504b3',
  office: 'photo-1497366754035-f200968a6e72',
  contact: 'photo-1524758631624-e2822e304c36',
  story: 'photo-1521737711867-e3b97375f902',
}

const image = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

const services = [
  { id: 'resume-builder', number: '01', title: 'Resume development', text: 'A clear, considered story of your experience, skills and direction.', image: photos.resume, tone: 'paper' },
  { id: 'profile-marketing-service', number: '02', title: 'Profile marketing', text: 'Make your professional presence easier to find and understand.', image: photos.people, tone: 'blue' },
  { id: 'technical-support-service', number: '03', title: 'Technical support', text: 'Build fluency in the tools and concepts your next role calls for.', image: photos.preparation, tone: 'ink' },
  { id: 'interview-preparation-service', number: '04', title: 'Interview preparation', text: 'Practice explaining your thinking with clarity and confidence.', image: photos.team, tone: 'stone' },
  { id: 'career-support', number: '05', title: 'Career support', text: 'A thoughtful partner as you navigate the next step in your career.', image: photos.candidate, tone: 'paper' },
]

const connectedCompanies = [
  'Apex Labs', 'Northstar', 'BluePeak', 'HarborOne', 'Summit', 'Vertex', 'Northwind', 'BrightPath', 'Altura', 'Mercury', 'Crescent', 'NovaGrid', 'EchoPoint', 'SignalWorks', 'Horizon', 'Lattice', 'SilverPeak', 'PrimeCore', 'Atlas', 'Stonebridge', 'CoreLink', 'Wavefront', 'Vitality', 'Quantum', 'Redwood', 'Oakline', 'Endeavor', 'GoalForge', 'Citadel', 'Cobalt', 'Saffron', 'Helio', 'Nexa', 'Pillar', 'RouteOne', 'FrameWorks'
]

const connectedCompanyRows = [
  connectedCompanies.slice(0, 18),
  connectedCompanies.slice(18),
]

const faqs = [
  ['How does Desire to Career help candidates?', 'We support professionals with resume development, profile marketing, technical preparation, interview practice and career guidance.'],
  ['Do you help build resumes?', 'Yes. We help candidates present their experience clearly and tailor their resume to the roles they are pursuing.'],
  ['Do you provide technical preparation?', 'We offer role-focused technical preparation, project explanation practice and mock interviews.'],
  ['What IT roles do you support?', 'Our focus includes software, data, cloud, cybersecurity, QA and AI/ML career paths.'],
  ['What Non-IT roles do you support?', 'We work across areas such as finance, healthcare, engineering, sales, marketing, operations and administration.'],
  ['Do you work with USA clients?', 'Desire to Career works with 25+ internal clients in the USA. Specific client names and locations are not published here.'],
  ['How can I submit my resume?', 'Use the contact form to tell us about yourself. Our team can follow up about sharing your resume securely.'],
  ['How can employers work with you?', 'Employers can use the contact form to start a conversation about staffing, sourcing and candidate pipeline support.'],
]

const jobPortals = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/', Icon: FaLinkedinIn },
  { name: 'Indeed', url: 'https://www.indeed.com/', Icon: SiIndeed },
  { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/index.htm', Icon: SiGlassdoor },
  { name: 'Monster', url: 'https://www.monster.com/jobs/', Icon: SiMonster },
  { name: 'ZipRecruiter', url: 'https://www.ziprecruiter.com/jobs-search', Icon: Search },
  { name: 'CareerBuilder', url: 'https://www.careerbuilder.com/jobs', Icon: Building2 },
  { name: 'Dice', url: 'https://www.dice.com/jobs', Icon: FaBriefcase },
  { name: 'Wellfound', url: 'https://wellfound.com/jobs', Icon: SiWellfound },
  { name: 'SimplyHired', url: 'https://www.simplyhired.com/', Icon: Globe2 },
  { name: 'Naukri', url: 'https://www.naukri.com/', Icon: Search },
]

const specialtyFields = [
  { name: 'Software', url: '/it#software-development', Icon: Code2 },
  { name: 'Data & AI', url: '/it#data-analytics', Icon: Database },
  { name: 'Cloud', url: '/it#cloud-devops', Icon: Cloud },
  { name: 'Security', url: '/it#cybersecurity', Icon: ShieldCheck },
  { name: 'Finance', url: '/non-it#business-finance', Icon: Landmark },
  { name: 'Healthcare', url: '/non-it#healthcare', Icon: HeartPulse },
  { name: 'Engineering', url: '/non-it#engineering', Icon: Cog },
  { name: 'Operations', url: '/non-it#sales-marketing', Icon: BriefcaseBusiness },
]

function Counter({ value, suffix = '+' }) {
  const [count, setCount] = useState(0)
  const spanRef = useRef(null)

  useEffect(() => {
    const node = spanRef.current
    if (!node) return undefined

    let frame = 0
    let startedAt = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const animate = (now) => {
        if (!startedAt) startedAt = now
        const progress = Math.min((now - startedAt) / 1150, 1)
        setCount(Math.round(value * (1 - (1 - progress) ** 3)))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.5 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={spanRef} data-client-counter>{count}{suffix}</span>
}

function App() {
  const [activeFaq, setActiveFaq] = useState(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [heroWord, setHeroWord] = useState('OPPORTUNITY.')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const words = ['OPPORTUNITY.', 'CHAPTER.', 'CAREER MOVE.']
    let wordIndex = 0
    let characterIndex = words[0].length
    let deleting = true
    let timeoutId
    const tick = () => {
      const word = words[wordIndex]
      characterIndex += deleting ? -1 : 1
      setHeroWord(word.slice(0, characterIndex))
      let delay = deleting ? 42 : 78
      if (deleting && characterIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        delay = 220
      } else if (!deleting && characterIndex === word.length) {
        deleting = true
        delay = 1300
      }
      timeoutId = window.setTimeout(tick, delay)
    }
    timeoutId = window.setTimeout(tick, 1300)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          reveal.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    document.querySelectorAll('[data-reveal]').forEach((element) => reveal.observe(element))
    return () => reveal.disconnect()
  }, [])

  useEffect(() => {
    if (!resumeOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setResumeOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [resumeOpen])

  return (
    <>
      <SiteNavigation />

      <main id="top">

        
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> CAREER, WITH INTENTION</p>
            <h1 aria-label="Your talent. Your future. Your next opportunity.">YOUR TALENT.<br />YOUR FUTURE.<br /><em>YOUR NEXT</em><br /><em className="hero-typewriter" aria-hidden="true">{heroWord}<span className="hero-type-caret" /></em></h1>
            <div className="hero-bottom">
              <p>Connecting skilled professionals with career opportunities across the USA.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="/careers">Find your opportunity <ArrowRight size={17} /></a>
                <a className="text-link" href="/contact">Talk to our team <ArrowDownRight size={17} /></a>
              </div>
            </div>
          </div>
          <div className="hero-portal-stage">
            <p className="portal-hero-heading">CAREER FIELDS &amp; JOB PLATFORMS</p>
            <div className="portal-system" aria-label="Career specialties and job platforms">
              <div className="portal-specialty-ring" aria-hidden="true" />
              <div className="portal-specialty-track" aria-label="Explore career specialties">
                {specialtyFields.map(({ name, url, Icon }, index) => (
                  <a className={`portal-specialty-node portal-specialty-node-${index + 1}`} href={url} key={name} aria-label={`Explore ${name}`} title={name}>
                    <span className="portal-specialty-link"><Icon aria-hidden="true" /><span>{name}</span></span>
                  </a>
                ))}
              </div>
              <div className="portal-orbit" aria-label="Job search platforms">
                <div className="portal-orbit-ring" aria-hidden="true" />
                <div className="portal-orbit-track">
                  {jobPortals.map(({ name, url, Icon }, index) => (
                    <a className={`portal-node portal-node-${index + 1}`} href={url} key={name} target="_blank" rel="noreferrer" aria-label={`Explore jobs on ${name}`}>
                      <span className={`portal-tile${index % 2 === 1 ? ' is-round' : ''}`}>
                        <Icon aria-hidden="true" />
                        <span>{name}</span>
                      </span>
                      <span className="portal-tooltip" role="tooltip">Explore jobs on {name}</span>
                    </a>
                  ))}
                </div>
                <div className="portal-core">
                  <span>CAREER CONNECTIONS</span>
                  <img src={companyLogo} alt="Desire to Career" />
                  <a href="/contact">Contact our team <ArrowUpRight size={14} /></a>
                </div>
              </div>
            </div>
            <p className="portal-footnote"><span /> Find opportunities where you already search</p>
          </div>
          <a className="scroll-cue" href="#possibilities"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>
<section
  className="company-glance-section"
  aria-label="Desire To Career company network and statistics"
  style={{
    padding: "80px 24px",
    background: "#f7faff",
    borderRadius: "32px",
    margin: "40px 0",
  }}
>
  {/* HEADER */}
  <div
    className="company-glance-header"
    style={{
      maxWidth: "900px",
      margin: "0 auto 45px",
      textAlign: "center",
    }}
  >
    <span
      className="numbers-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "30px",
        background: "#ffffff",
        border: "1px solid #dbe5f5",
        color: "#173b78",
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.08em",
      }}
    >
      <span
        className="badge-dot"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#ff7a00",
        }}
      />
      OUR NETWORK • UPDATED REGULARLY
    </span>

    <h2
      style={{
        margin: "20px 0 12px",
        fontSize: "clamp(32px, 5vw, 52px)",
        lineHeight: "1.1",
        fontWeight: "800",
        color: "#102d5c",
      }}
    >
      Good work travels{" "}
      <em
        style={{
          color: "#f47721",
          fontStyle: "normal",
        }}
      >
        further.
      </em>
    </h2>

    <p
      style={{
        margin: "0 auto",
        maxWidth: "680px",
        color: "#64748b",
        fontSize: "16px",
        lineHeight: "1.7",
      }}
    >
      A growing network of companies, professionals, and career
      opportunities across the USA.
    </p>
  </div>

  {/* CONNECTED COMPANY NETWORK */}
  <div
    className="connected-company-box"
    style={{
      maxWidth: "1100px",
      margin: "0 auto 45px",
      padding: "28px",
      background: "#ffffff",
      borderRadius: "24px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 12px 35px rgba(16,45,92,0.07)",
    }}
  >
    <div
      className="connected-company-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "25px",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 8px",
            color: "#f47721",
            fontSize: "12px",
            fontWeight: "800",
            letterSpacing: "0.08em",
          }}
        >
          A NETWORK THAT KEEPS MOVING
        </p>

        <h3
          style={{
            margin: 0,
            color: "#102d5c",
            fontSize: "24px",
            fontWeight: "800",
          }}
        >
          Companies connected to opportunities.
        </h3>
      </div>

      <div
        style={{
          padding: "10px 18px",
          borderRadius: "14px",
          background: "#eef5ff",
          color: "#173b78",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        <strong style={{ fontSize: "22px", color: "#f47721" }}>
          {siteConfig.internalUsClients}+
        </strong>{" "}
        connected companies
      </div>
    </div>

    {/* COMPANY MARQUEE */}
    <div
      className="company-marquee"
      aria-label="Company network"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {connectedCompanyRows.map((row, rowIndex) => (
        <div
          className={`company-marquee-row ${rowIndex === 1 ? 'is-reversed' : ''}`}
          key={rowIndex}
          style={{ overflow: 'hidden' }}
        >
          <div className="company-marquee-track" role="list">
            {[...row, ...row].map((company, index) => {
              const isDuplicate = index >= row.length
              const isBlurred = rowIndex > 0 || index >= 4

              return (
              <span
                key={`${company}-${index}`}
                className={`company-pill${isBlurred ? ' is-blurred' : ''}`}
                role="listitem"
                aria-hidden={isDuplicate}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  color: "#173b78",
                  fontSize: "13px",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="company-mark"
                  aria-hidden="true"
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    background: "#173b78",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "800",
                  }}
                >
                  {company.slice(0, 1)}
                </span>

                {company}
              </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>

    <p
      style={{
        margin: "20px 0 0",
        color: "#94a3b8",
        fontSize: "12px",
        textAlign: "center",
      }}
    >
      Some partner names are intentionally kept private.
    </p>
  </div>

  {/* NUMBER CARDS */}
  <div
    className="numbers-grid"
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
    }}
  >
    {/* CARD 1 */}
    <div
      className="number-card blue-card"
      style={{
        padding: "26px",
        borderRadius: "22px",
        background: "#ffffff",
        border: "1px solid #dbe5f5",
        boxShadow: "0 10px 30px rgba(16,45,92,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="company-stat-icon"><Building2 size={25} /></span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "20px",
            background: "#eef5ff",
            color: "#1769e0",
            fontSize: "10px",
            fontWeight: "800",
          }}
        >
          USA NETWORK
        </span>
      </div>

      <strong
        style={{
          display: "block",
          marginTop: "25px",
          fontSize: "48px",
          lineHeight: 1,
          color: "#1769e0",
        }}
      >
          <Counter value={siteConfig.internalUsClients} />
        </strong>

      <h3 style={{ margin: "14px 0 8px", color: "#102d5c" }}>
        Companies Connected
      </h3>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Companies and hiring networks connected across the USA.
      </p>

      <div
        style={{
          height: "4px",
          marginTop: "22px",
          borderRadius: "10px",
          background: "#1769e0",
        }}
      />
    </div>

    {/* CARD 2 */}
    <div
      className="number-card orange-card"
      style={{
        padding: "26px",
        borderRadius: "22px",
        background: "#ffffff",
        border: "1px solid #fde3d0",
        boxShadow: "0 10px 30px rgba(16,45,92,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="company-stat-icon"><BriefcaseBusiness size={25} /></span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "20px",
            background: "#fff3e8",
            color: "#f47721",
            fontSize: "10px",
            fontWeight: "800",
          }}
        >
          PROJECT SUPPORT
        </span>
      </div>

      <strong
        style={{
          display: "block",
          marginTop: "25px",
          fontSize: "38px",
          lineHeight: 1,
          color: "#f47721",
        }}
      >
        AVAILABLE
      </strong>

      <h3 style={{ margin: "14px 0 8px", color: "#102d5c" }}>
        Freelance Opportunities
      </h3>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Flexible professionals available for project-based opportunities.
      </p>

      <div
        style={{
          height: "4px",
          marginTop: "22px",
          borderRadius: "10px",
          background: "#f47721",
        }}
      />
    </div>

    {/* CARD 3 */}
    <div
      className="number-card purple-card"
      style={{
        padding: "26px",
        borderRadius: "22px",
        background: "#ffffff",
        border: "1px solid #e8ddff",
        boxShadow: "0 10px 30px rgba(16,45,92,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="company-stat-icon"><Check size={25} /></span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "20px",
            background: "#f3edff",
            color: "#7652d9",
            fontSize: "10px",
            fontWeight: "800",
          }}
        >
          CAREER SUPPORT
        </span>
      </div>

      <strong
        style={{
          display: "block",
          marginTop: "25px",
          fontSize: "48px",
          lineHeight: 1,
          color: "#7652d9",
        }}
      >
        100<span>%</span>
      </strong>

      <h3 style={{ margin: "14px 0 8px", color: "#102d5c" }}>
        Career Focused
      </h3>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Dedicated guidance focused on helping professionals move forward.
      </p>

      <div
        style={{
          height: "4px",
          marginTop: "22px",
          borderRadius: "10px",
          background: "#7652d9",
        }}
      />
    </div>

    {/* CARD 4 */}
    <div
      className="number-card green-card"
      style={{
        padding: "26px",
        borderRadius: "22px",
        background: "#ffffff",
        border: "1px solid #d8f3e7",
        boxShadow: "0 10px 30px rgba(16,45,92,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="company-stat-icon"><ArrowUpRight size={25} /></span>

        <span
          style={{
            padding: "6px 10px",
            borderRadius: "20px",
            background: "#eafaf3",
            color: "#16a36a",
            fontSize: "10px",
            fontWeight: "800",
          }}
        >
          OUR APPROACH
        </span>
      </div>

      <strong
        style={{
          display: "block",
          marginTop: "25px",
          fontSize: "38px",
          lineHeight: 1,
          color: "#16a36a",
        }}
      >
        GROWTH
      </strong>

      <h3 style={{ margin: "14px 0 8px", color: "#102d5c" }}>
        Built for Your Future
      </h3>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Connecting skills, opportunities, and professional growth.
      </p>

      <div
        style={{
          height: "4px",
          marginTop: "22px",
          borderRadius: "10px",
          background: "#16a36a",
        }}
      />
    </div>
  </div>

  {/* FOOTER */}
  <div
    className="numbers-footer"
    style={{
      maxWidth: "1100px",
      margin: "35px auto 0",
      paddingTop: "22px",
      borderTop: "1px solid #dbe5f5",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
      flexWrap: "nowrap",
      color: "#173b78",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "0.08em",
    }}
  >
    <span>DESIRE TO CAREER</span>
    <span style={{ color: "#f47721" }}>
      YOUR CAREER. OUR PRIORITY.
    </span>
  </div>
</section>

     

        <section className="connection-section">
          <div className="connection-copy" data-reveal>
            <p className="eyebrow">ROOTED HERE. CONNECTED THERE.</p>
            <h2>TALENT CAN<br />START <i>ANYWHERE.</i><br />OPPORTUNITY<br />CAN TAKE YOU<br /><i>FURTHER.</i></h2>
            <p className="connection-description">A people-centered connection between professionals and opportunities with our network of {siteConfig.internalUsClients}+ internal clients in the USA.</p>
          </div>
          <div className="route-visual" aria-label="Illustrative connection between India and the United States">
            <div className="route-orbit orbit-one" /><div className="route-orbit orbit-two" />
            <svg viewBox="0 0 760 440" role="presentation" aria-hidden="true">
              <defs><linearGradient id="routeGradient" x1="0" x2="1"><stop stopColor="#8db9ff" /><stop offset="1" stopColor="#e9f1ff" /></linearGradient></defs>
              <path className="route-path" d="M158 152 C 275 60, 380 312, 575 195" />
              <path className="route-dash" d="M158 152 C 275 60, 380 312, 575 195" />
              {/* <circle className="route-point route-point-india" cx="158" cy="152" r="8" /><circle className="route-point route-point-usa" cx="575" cy="195" r="8" /> */}
              <text x="125" y="190">USA</text><text x="552" y="234">USA</text>
            </svg>
            <span className="route-note">CAREER IS A JOURNEY<br />WE HELP MAKE THE CONNECTION.</span>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading services-heading"><p className="eyebrow">SUPPORT, AT EVERY STEP</p><h2>A JOURNEY<br />BUILT <i>AROUND YOU.</i></h2><span className="heading-side-note">FROM FIRST DRAFT<br />TO NEXT OPPORTUNITY</span></div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className={`service-row service-${service.tone}`} id={service.id} key={service.number} data-reveal>
                <span className="service-number">{service.number}</span>
                <div className="service-text"><p className="service-kicker">{String(index + 1).padStart(2, '0')} / PERSONALIZED SUPPORT</p><h3>{service.title}</h3><p>{service.text}</p></div>
                <div className="service-image" style={{ backgroundImage: `url(${image(service.image, 1000)})` }} role="img" aria-label={`${service.title} career support`} />
                <ArrowUpRight className="service-arrow" size={22} />
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="resume-photo" style={{ backgroundImage: `url(${image(photos.resume, 1400)})` }} role="img" aria-label="Professional reviewing documents at a desk"><span className="photo-tag">MAKE YOUR EXPERIENCE<br />EASY TO SEE.</span></div>
          <div className="resume-content" data-reveal>
            <p className="eyebrow">01 / YOUR STORY, WELL TOLD</p><h2>A RESUME<br />THAT <i>OPENS</i><br />THE DOOR.</h2>
            <p>Clear structure. Strong language. A focused account of the work you can do next.</p>
            <button className="button button-outline" type="button" onClick={() => setResumeOpen(true)}>View sample resume <ArrowUpRight size={16} /></button>
          </div>
          <div className="resume-paper" aria-label="Sample resume preview">
            <div className="paper-topline"><span>SAMPLE RESUME</span><span>CAREER PROFILE</span></div>
            <div className="paper-name">PROFESSIONAL<br />PROFILE</div>
            <div className="paper-role">SOFTWARE ENGINEERING · SAMPLE</div>
            <div className="paper-rule" /><div className="paper-heading">PROFILE</div>
            <p>Impact-focused engineering professional with experience building reliable digital products and collaborating across teams.</p>
            <div className="paper-heading">CORE STRENGTHS</div><div className="paper-skills">Product development<br />Technical collaboration<br />Quality &amp; delivery</div>
            <div className="paper-heading">EXPERIENCE</div><div className="paper-placeholder">ROLE · ORGANIZATION<br />Selected responsibilities and outcomes, tailored to the opportunity.</div>
            <div className="paper-bottom">ILLUSTRATIVE TEMPLATE · NO PERSONAL DATA</div>
          </div>
        </section>

        <section className="profile-section" id="profile-marketing">
          <div className="profile-left"><p className="eyebrow light">02 / SHOW UP WITH INTENTION</p><h2>BE<br />DISCOVERED<br /><i>BEFORE</i><br />YOU ARE<br />CONTACTED.</h2><p>Make your professional profile work harder with thoughtful positioning and clearer signals.</p></div>
          <div className="profile-panel" aria-label="Illustrative professional profile interface">
            <div className="profile-top"><span>PROFILE POSITIONING</span><span className="profile-live"><i /> OPTIMIZATION IN PROGRESS</span></div>
            <div className="profile-user"><div className="profile-avatar">P</div><div><span className="profile-tag">SAMPLE PROFILE · NOT A REAL PERSON</span><h3>Professional Profile</h3><p>Technology · Product-minded · USA opportunities</p></div></div>
            <div className="profile-progress"><span>PROFILE CLARITY</span><div><i /></div><strong>01</strong></div>
            <div className="profile-services">{['LinkedIn optimization', 'Professional positioning', 'Keyword strategy', 'Profile visibility', 'Resume distribution'].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}<Check size={15} /></div>)}</div>
            <div className="profile-panel-foot"><span>CLARITY IS A SIGNAL.</span><ArrowUpRight size={18} /></div>
          </div>
        </section>

        <section className="cloud-section" style={{ backgroundImage: `url(${image(photos.cloud, 1900)})` }}>
          <div className="cloud-wash" /><div className="cloud-copy" data-reveal><p className="eyebrow">CLOUD &amp; DEVOPS</p><h2>BUILD.<br /><i>DEPLOY.</i><br />SCALE.</h2></div>
          <div className="cloud-tools">AWS <span>·</span> AZURE <span>·</span> GOOGLE CLOUD <span>·</span> DOCKER <span>·</span> KUBERNETES <span>·</span> CI/CD</div>
          <span className="cloud-caption">INFRASTRUCTURE FOR WHAT&apos;S NEXT</span>
        </section>

        <section className="security-section">
          <div className="security-scan" />
          <div className="security-copy" data-reveal><p className="eyebrow light">CYBERSECURITY / TRUST BY DESIGN</p><h2>SECURE<br />WHAT <i>MATTERS.</i></h2><p>Build resilience with professionals who help protect the systems and people we depend on.</p></div>
          <div className="security-lines"><span>SOC</span><span>Security Analyst</span><span>Cloud Security</span><span>Network Security</span><span>Application Security</span><span>Risk &amp; Compliance</span></div>
          <div className="security-emblem" aria-hidden="true"><div className="shield-shape"><span>SECURE<br />BY DESIGN</span></div></div>
        </section>

        <section className="industries-section">
          <div className="industries-title"><p className="eyebrow">THE HUMAN WORK OF EVERY INDUSTRY</p><h2>CAREERS<br />BEYOND<br /><i>TECHNOLOGY.</i></h2><p>Good work happens in every field. We help people find their place across more than tech.</p></div>
          <div className="industry-mosaic">
            <div className="industry-photo industry-finance" style={{ backgroundImage: `url(${image(photos.finance, 900)})` }}><span>FINANCE</span></div>
            <div className="industry-photo industry-health" style={{ backgroundImage: `url(${image(photos.health, 900)})` }}><span>HEALTHCARE</span></div>
            <div className="industry-photo industry-engineering" style={{ backgroundImage: `url(${image(photos.engineering, 900)})` }}><span>ENGINEERING</span></div>
            <div className="industry-caption">AND THE TEAMS<br />THAT KEEP THINGS MOVING — SALES, MARKETING, OPERATIONS &amp; ADMINISTRATION.</div>
          </div>
        </section>

        {/* <section className="candidate-section" id="candidate" style={{ backgroundImage: `url(${image(photos.candidate, 1900)})` }}>
          <div className="candidate-shade" /><div className="candidate-copy"><p className="eyebrow light">FOR CANDIDATES</p><h2>FROM<br /><i>FIRST STEP</i><br />TO NEXT<br />OPPORTUNITY.</h2></div>
          <div className="candidate-list">{['Submit resume', 'Profile evaluation', 'Resume enhancement', 'Technical preparation', 'Interview support', 'Opportunity matching'].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}<ArrowUpRight size={15} /></div>)}</div>
        </section> */}

        <section className="employer-section" id="employers">
          <div className="employer-image" style={{ backgroundImage: `url(${image(photos.office, 1500)})` }}><span>THE RIGHT PEOPLE<br />CHANGE THE PICTURE.</span></div>
          <div className="employer-copy" data-reveal><p className="eyebrow">FOR EMPLOYERS / TALENT PARTNERS</p><h2>THE RIGHT TALENT<br /><i>CHANGES</i> THE<br />WHOLE TEAM.</h2><p>Thoughtful staffing support for teams looking to meet the moment and build for what comes next.</p><div className="employer-services">{['Talent sourcing', 'Candidate screening', 'IT & non-IT staffing', 'Technical talent', 'Candidate pipeline support'].map((item) => <span key={item}><Check size={15} />{item}</span>)}</div><a href="/contact" className="button button-dark">Talk to our staffing team <ArrowRight size={17} /></a></div>
        </section>

        <section className="reviews-section" aria-labelledby="reviews-heading">
          <div className="reviews-heading"><p className="eyebrow">THE EXPERIENCE, IN THEIR WORDS</p><h2 id="reviews-heading">BETTER, <i>TOGETHER.</i></h2><span>APPROVED CLIENT FEEDBACK</span></div>
          <div className="review-wall" aria-label="Client testimonials">
            {[
              {
                className: 'review-forward fast',
                cards: [
                  { quote: 'The guidance felt personal and practical. I was able to sharpen my story and walk into interviews with much more confidence.', author: 'A. Morgan', role: 'Candidate', type: 'CANDIDATE' },
                  { quote: 'They took the time to understand the role, the team, and what mattered most to the people we wanted to attract.', author: 'L. Brooks', role: 'Hiring manager', type: 'EMPLOYER' },
                  { quote: 'The process was clear from the start. Every step felt intentional, respectful, and focused on the outcome.', author: 'S. Nguyen', role: 'Professional', type: 'CLIENT' }
                ]
              },
              {
                className: 'review-back medium',
                cards: [
                  { quote: 'I felt supported not pushed. The feedback was honest, strategic, and genuinely helpful throughout the process.', author: 'R. Patel', role: 'Career transition', type: 'CANDIDATE' },
                  { quote: 'Their communication and understanding of the market made it easier to hire for the right fit, not just the quickest one.', author: 'J. Ellis', role: 'Talent partner', type: 'EMPLOYER' },
                  { quote: 'A thoughtful partner who made a complex process feel manageable and reassuring from day one.', author: 'T. Owens', role: 'Professional', type: 'CLIENT' }
                ]
              },
              {
                className: 'review-forward slow',
                cards: [
                  { quote: 'Their support gave me clarity about my strengths and a stronger way to present them to hiring teams.', author: 'C. Rivera', role: 'Candidate', type: 'CANDIDATE' },
                  { quote: 'The quality of the conversations and the pace of the process stood out from the beginning.', author: 'M. Chen', role: 'Operations lead', type: 'EMPLOYER' },
                  { quote: 'The whole experience felt structured, human, and aligned with what mattered most to me.', author: 'K. Singh', role: 'Professional', type: 'CLIENT' }
                ]
              }
            ].map(({ className, cards }) => (
              <div className={`review-row ${className}`} key={className}>
                <div className="review-track">
                  {[0, 1, 2].map((copy) => (
                    <div className="review-set" key={`${className}-${copy}`} aria-hidden={copy === 1 ? 'true' : undefined}>
                      {cards.map((card) => (
                        <article className="review-card" key={`${className}-${copy}-${card.author}`}>
                          <div className="review-card-head"><div className="review-stars" aria-label="Five star review">★★★★★</div><span className="review-tag">{card.type}</span></div>
                          <blockquote>{card.quote}</blockquote>
                          <div className="review-meta"><strong>{card.author}</strong><span>{card.role}</span></div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="story-section" id="career-story">
          <div className="story-image" style={{ backgroundImage: `url(${image(photos.story, 1600)})` }}><div className="story-image-caption"><span>ILLUSTRATIVE CAREER JOURNEY</span><span>NO INDIVIDUAL OUTCOME IMPLIED</span></div><h2>FROM SKILLS<br />TO <i>OPPORTUNITY.</i></h2></div>
          <div className="story-steps">{['Profile', 'Resume', 'Preparation', 'Interview', 'Opportunity'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 4 && <ArrowDown size={16} />}</div>)}</div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-title"><p className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</p><h2>BEFORE WE<br /><i>BEGIN.</i></h2><a href="/contact" className="text-link">Still curious? Talk to us <ArrowUpRight size={16} /></a></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <div className={activeFaq === index ? 'faq-item is-open' : 'faq-item'} key={question}><button type="button" aria-expanded={activeFaq === index} onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><ChevronDown size={19} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>
        </section>

        <section className="final-cta">
          <span className="eyebrow">THE NEXT CHAPTER IS YOURS</span><h2>YOUR NEXT<br /><i>MOVE</i><br />STARTS HERE.</h2><div className="final-actions"><a className="button button-dark" href="/careers">Find your opportunity <ArrowRight size={17} /></a><a className="button button-light" href="/contact">Talk to us <ArrowUpRight size={17} /></a></div><span className="cta-orbit" aria-hidden="true">D<span>·</span>C</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a className="footer-brand" href="#top">DESIRE<br />TO CAREER<span>®</span></a><div className="footer-statement">CONNECTING TALENT<br />WITH <i>OPPORTUNITY.</i></div><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={16} /></a></div>
        <div className="footer-links"><div><span>CANDIDATES</span><a href="/services/career-support">Candidate support</a><Link to="/it">IT careers</Link><Link to="/non-it">Non-IT careers</Link><a href="#services">Our services</a></div><div><span>EMPLOYERS</span><a href="#employers">Staffing support</a><a href="/contact">Start a conversation</a><a href="#approach">Our approach</a></div><div><span>RESOURCES</span><a href="#resume">Sample resume</a><a href="#faq">Frequently asked questions</a><a href="/contact">Contact</a></div><div className="footer-contact"><span>LET&apos;S CONNECT</span><a href="/contact">Send us a message <ArrowUpRight size={14} /></a><p>Social and direct contact details can be added here when provided.</p></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} DESIRE TO CAREER</span><span>CONNECTING TALENT WITH OPPORTUNITY</span><a href="#top">PRIVACY &amp; TERMS <ArrowUpRight size={12} /></a></div>
      </footer>

      <a className="whatsapp-button" href={siteConfig.whatsappBusinessUrl || '/contact'} target={siteConfig.whatsappBusinessUrl ? '_blank' : undefined} rel={siteConfig.whatsappBusinessUrl ? 'noreferrer' : undefined} aria-label={siteConfig.whatsappBusinessUrl ? 'Chat with us on WhatsApp' : 'WhatsApp business link not configured. Contact us instead.'} title={siteConfig.whatsappBusinessUrl ? 'Chat with us' : 'WhatsApp link not configured'}><FaWhatsapp size={25} /><span>CHAT WITH US</span></a>

      {resumeOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setResumeOpen(false) }}><section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="sample-resume-title"><div className="modal-header"><span id="sample-resume-title">SAMPLE RESUME · ILLUSTRATIVE TEMPLATE</span><button type="button" aria-label="Close sample resume" onClick={() => setResumeOpen(false)}><X size={21} /></button></div><div className="modal-resume"><div className="modal-resume-top"><span>DESIRE TO CAREER / CAREER RESOURCE</span><span>SAMPLE RESUME</span></div><h2>PROFESSIONAL<br />PROFILE</h2><p className="modal-resume-role">SOFTWARE ENGINEERING · SAMPLE PROFILE</p><div className="modal-rule" /><div className="modal-columns"><div><h3>PROFILE</h3><p>Impact-focused professional with experience delivering digital products, collaborating across teams and improving customer outcomes.</p><h3>EXPERIENCE</h3><p><strong>ROLE · ORGANIZATION</strong><br />Illustrative responsibilities and measurable outcomes tailored to the opportunity. Replace with verified candidate details.</p><p><strong>ROLE · ORGANIZATION</strong><br />Sample experience summary demonstrating concise, action-led language.</p></div><div><h3>CORE SKILLS</h3><p>Product development<br />Technical collaboration<br />Quality practices<br />Clear communication</p><h3>EDUCATION</h3><p>QUALIFICATION · INSTITUTION<br />Details supplied by candidate</p><h3>NOTE</h3><p>This sample contains no real candidate information.</p></div></div></div></section></div>}
    </>
  )
}

export default App