import { useEffect, useState } from 'react'
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

const faqs = [
  ['How does Desire to Career help candidates?', 'We support professionals with resume development, profile marketing, technical preparation, interview practice and career guidance.'],
  ['Do you help build resumes?', 'Yes. We help candidates present their experience clearly and tailor their resume to the roles they are pursuing.'],
  ['Do you provide technical preparation?', 'We offer role-focused technical preparation, project explanation practice and mock interviews.'],
  ['What IT roles do you support?', 'Our focus includes software, data, cloud, cybersecurity, QA and AI/ML career paths.'],
  ['What Non-IT roles do you support?', 'We work across areas such as finance, healthcare, engineering, sales, marketing, operations and administration.'],
  ['Do you work with USA clients?', 'Desire to Career works with 24+ internal clients in the USA. Specific client names and locations are not published here.'],
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

function Counter  ({ value, suffix = '+' })  {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = document.querySelector('[data-client-counter]')
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

  return <span data-client-counter>{count}{suffix}</span>
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

        <section className="full-bleed-image" id="possibilities" style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
          <div className="full-image-scrim" />
          <div className="full-image-copy" data-reveal>
            <span className="eyebrow light">A MORE HUMAN WAY FORWARD</span>
            <h2>WE CONNECT PEOPLE<br />WITH <i>POSSIBILITIES.</i></h2>
          </div>
          <span className="image-index">01 / PEOPLE IN MOTION</span>
        </section>

        <section className="manifesto-section" id="approach">
          <div className="manifesto-label"><span>OUR BELIEF</span><span>01 — 05</span></div>
          <div className="manifesto-content">
            <h2 data-reveal>GOOD SKILLS<br /><span>DESERVE</span><br />THE RIGHT<br /><i>OPPORTUNITY.</i></h2>
            <div className="manifesto-note" data-reveal>
              <span className="note-rule" />
              <p>Careers are built one thoughtful step at a time. We help professionals show up prepared, tell their story well and connect with the next possibility.</p>
              <a href="#services" className="round-link" aria-label="Explore our support"><ArrowDownRight size={22} /></a>
            </div>
          </div>
        </section>

        {/* <section className="numbers-section" aria-label="Our USA client network">
          <div className="numbers-intro"><span className="eyebrow light">A NETWORK BUILT ON CONNECTION</span><p>Relationships create room for the right next step.</p></div>
          <div className="number-item"><strong><Counter value={siteConfig.internalUsClients} /></strong><span>INTERNAL CLIENTS<br />IN THE USA</span></div>
          <div className="numbers-foot"><span>OUR NETWORK</span><span>01 / USA</span></div>
        </section> */}
        {/* <NumbersSection siteConfig={siteConfig} /> */}

        <section className="connection-section">
          <div className="connection-copy" data-reveal>
            <p className="eyebrow">ROOTED HERE. CONNECTED THERE.</p>
            <h2>TALENT CAN<br />START <i>ANYWHERE.</i><br />OPPORTUNITY<br />CAN TAKE YOU<br /><i>FURTHER.</i></h2>
            <p className="connection-description">A people-centered connection between professionals and opportunities with our network of 24+ internal clients in the USA.</p>
          </div>
          <div className="route-visual" aria-label="Illustrative connection between India and the United States">
            <div className="route-orbit orbit-one" /><div className="route-orbit orbit-two" />
            <svg viewBox="0 0 760 440" role="presentation" aria-hidden="true">
              <defs><linearGradient id="routeGradient" x1="0" x2="1"><stop stopColor="#8db9ff" /><stop offset="1" stopColor="#e9f1ff" /></linearGradient></defs>
              <path className="route-path" d="M158 152 C 275 60, 380 312, 575 195" />
              <path className="route-dash" d="M158 152 C 275 60, 380 312, 575 195" />
              <circle className="route-point route-point-india" cx="158" cy="152" r="8" /><circle className="route-point route-point-usa" cx="575" cy="195" r="8" />
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
{/* 
        <section className="technical-section">
          <div className="technical-image" style={{ backgroundImage: `url(${image(photos.preparation, 1900)})` }} />
          <div className="technical-overlay" />
          <div className="technical-copy" data-reveal><p className="eyebrow light">03 / PREPARE WITH PURPOSE</p><h2>KNOW YOUR SKILLS.<br /><i>EXPLAIN</i> YOUR SKILLS.<br />SHOW YOUR SKILLS.</h2></div>
          <div className="technical-bottom"><span>TECHNICAL PREPARATION</span><span>MOCK INTERVIEWS</span><span>PROJECT EXPLANATION</span><span>ROLE-SPECIFIC PRACTICE</span><span>INTERVIEW QUESTIONS</span></div>
        </section> */}

        <section className="it-section">
          <div className="it-copy"><p className="eyebrow">04 / TECHNOLOGY TALENT</p><h2>THE TECHNOLOGY<br /><i>TALENT</i><br />BEHIND<br />THE FUTURE.</h2><p>We support professionals across changing technology disciplines, from foundations to what&apos;s next.</p></div>
          <div className="tech-image" style={{ backgroundImage: `url(${image(photos.team, 1300)})` }}><span>PEOPLE WHO BUILD WHAT&apos;S NEXT</span></div>
          <div className="tech-marquee" aria-label="Technology focus areas"><div>{['AI / ML', 'Python', 'Java', 'React', 'Node.js', 'Data', 'Cloud', 'DevOps', 'Cybersecurity', 'QA', 'SQL'].map((tech) => <span key={tech}>{tech}<i>✳</i></span>)}</div></div>
        </section>
{/* 
        <section className="ai-section">
          <div className="ai-backdrop" style={{ backgroundImage: `url(${image(photos.ai, 1600)})` }} />
          <div className="ai-grid" />
          <div className="ai-copy" data-reveal><p className="eyebrow light">A NEW FRONTIER / AI &amp; MACHINE LEARNING</p><h2>INTELLIGENCE<br /><i>MEETS</i><br />OPPORTUNITY.</h2><p>Connect specialist capability to emerging work across intelligent systems.</p></div>
          <div className="ai-tags">{['AI Engineering', 'Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'Computer Vision', 'Data Science', 'MLOps'].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="ai-orb" aria-hidden="true"><div /><div /><div /><div /><div /><div /><div /><div /></div>
        </section> */}

        {/* <section className="data-section">
          <div className="data-heading"><p className="eyebrow">SEE THE SIGNAL IN THE NOISE</p><h2>TURN DATA<br />INTO <i>DECISIONS.</i></h2><p>Analytics talent that turns information into insight and action.</p></div>
          <div className="chart-wrap" aria-label="Illustrative analytics visualization">
            <div className="chart-caption"><span>ANALYTICS / ILLUSTRATIVE VIEW</span><span>DATA → DIRECTION</span></div>
            <div className="chart-grid"><div className="chart-ylabels"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart-plot"><svg viewBox="0 0 700 300" preserveAspectRatio="none" role="presentation" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#4181d2" stopOpacity=".2" /><stop offset="1" stopColor="#4181d2" stopOpacity="0" /></linearGradient></defs><path className="chart-area" d="M0 250 C60 238 75 195 133 210 S200 162 252 186 S327 116 380 153 S440 90 492 126 S570 65 615 91 S667 40 700 20 V300 H0 Z" /><path className="chart-line" d="M0 250 C60 238 75 195 133 210 S200 162 252 186 S327 116 380 153 S440 90 492 126 S570 65 615 91 S667 40 700 20" /></svg></div></div>
            <div className="chart-xlabels"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>NEXT</span></div>
            <div className="data-roles">{['Data Analyst', 'Data Scientist', 'Data Engineer', 'BI Developer'].map((role) => <span key={role}>{role}</span>)}</div>
            <div className="data-tools">PYTHON / SQL / POWER BI / TABLEAU / EXCEL</div>
          </div>
        </section> */}

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