import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteConfig } from './siteConfig'
import SiteNavigation from './SiteNavigation'

const itTracks = [
  { id: 'software-development', number: '01', title: 'Software development', roles: 'Frontend · Backend · Full stack', tools: 'JavaScript · React · Java · Python · Node.js' },
  { id: 'data-analytics', number: '02', title: 'Data & analytics', roles: 'Data analyst · Data scientist · Data engineer · BI developer', tools: 'SQL · Python · Power BI · Tableau · Excel' },
  { id: 'cloud-devops', number: '03', title: 'Cloud & DevOps', roles: 'Cloud engineer · DevOps · Platform · Site reliability', tools: 'AWS · Azure · Google Cloud · Docker · Kubernetes' },
  { id: 'cybersecurity', number: '04', title: 'Cybersecurity', roles: 'SOC · Security analyst · Cloud · Network · Application security', tools: 'Risk & compliance · Security operations' },
  { id: 'ai-machine-learning', number: '05', title: 'AI & machine learning', roles: 'AI engineer · Machine learning · Data science · MLOps', tools: 'Generative AI · NLP · Computer vision · Deep learning' },
  { id: 'it-infrastructure', number: '06', title: 'IT infrastructure', roles: 'Systems · Network · Infrastructure support', tools: 'Cloud environments · Identity · Platform operations' },
  { id: 'qa-testing', number: '07', title: 'QA & testing', roles: 'Quality assurance · Test automation · Software testing', tools: 'Functional · API · Performance · Regression testing' },
]

const nonItFields = [
  { id: 'business-finance', number: '01', title: 'Business & finance', detail: 'Accounting, financial analysis and business operations.', image: 'photo-1460925895917-afdab827c52f', className: 'nonit-finance' },
  { id: 'healthcare', number: '02', title: 'Healthcare', detail: 'Clinical, administrative and patient-support teams.', image: 'photo-1576091160399-112ba8d25d1d', className: 'nonit-healthcare' },
  { id: 'engineering', number: '03', title: 'Engineering', detail: 'People who design, make and maintain essential systems.', image: 'photo-1581091226825-a6a2a5aee158', className: 'nonit-engineering' },
  { id: 'sales-marketing', number: '04', title: 'Sales & marketing', detail: 'Commercial, marketing, administration and operational teams.', image: 'photo-1552664730-d307ca884978', className: 'nonit-business' },
]

function SectorFooter() {
  return (
    <footer className="sector-footer">
      <Link to="/" className="sector-footer-brand">DESIRE<br />TO CAREER<span>®</span></Link>
      <p>Connecting talent<br />with opportunity.</p>
      <div><Link to="/it">IT careers</Link><Link to="/non-it">Non-IT careers</Link><a href="/contact">Contact our team <ArrowUpRight size={13} /></a>{siteConfig.phoneUrl && <a href={siteConfig.phoneUrl}>{siteConfig.whatsappBusinessNumber}</a>}<a href={siteConfig.emailUrl}>{siteConfig.contactEmail}</a></div>
      <span>© {new Date().getFullYear()} DESIRE TO CAREER</span>
    </footer>
  )
}

function ItCareerPage() {
  return (
    <div className="sector-page sector-it">
      <SiteNavigation theme="it" />
      <main>
        <section className="it-page-hero">
          <div className="it-page-copy">
            <p className="sector-eyebrow"><span /> TECHNOLOGY CAREERS / USA</p>
            <h1>MAKE THE<br /><i>THINGS</i><br />THAT MOVE<br />US FORWARD.</h1>
            <p>Build your next chapter across software, data, cloud, security and emerging technology.</p>
            <a className="it-page-button" href="#technology-roles">Explore technology fields <ArrowDown size={16} /></a>
          </div>
          <div className="it-page-art" aria-label="Abstract illustration of connected technology disciplines">
            <div className="it-art-grid" />
            <div className="it-art-ring it-ring-a" /><div className="it-art-ring it-ring-b" /><div className="it-art-ring it-ring-c" />
            <div className="it-art-core"><span>CAPABILITY</span><strong>IN<br />MOTION</strong><i>USA · GLOBAL TALENT</i></div>
            <span className="it-art-tag tag-ai">AI / ML</span><span className="it-art-tag tag-cloud">CLOUD</span><span className="it-art-tag tag-data">DATA</span><span className="it-art-tag tag-sec">SECURITY</span>
            <span className="it-art-note">PEOPLE BUILD<br />THE FUTURE.</span>
          </div>
          <div className="it-hero-bottom"><span>01 — SOFTWARE</span><span>02 — DATA</span><span>03 — CLOUD</span><span>04 — SECURITY</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
        </section>

        <section className="it-page-intro">
          <span className="it-index">DTC / TECHNOLOGY</span>
          <h2>TECHNOLOGY IS A<br />TEAM <i>EFFORT.</i></h2>
          <p>Strong technical careers are built on more than tools. We help professionals clarify their story, strengthen how they communicate their work and prepare for the opportunities they want to pursue.</p>
        </section>

        <section className="it-role-section" id="it-staffing">
          <div className="it-role-heading"><p className="sector-eyebrow"><span /> FIELDS OF FOCUS</p><h2>FIND YOUR<br /><i>DISCIPLINE.</i></h2><p>Explore the technology areas our candidate support and staffing work can include.</p></div>
          <div className="it-track-list">{itTracks.map((track) => <article className="it-track" id={track.id} key={track.number}><span className="it-track-number">{track.number}</span><div><h3>{track.title}</h3><p>{track.roles}</p><span className="it-tools">{track.tools}</span></div><ArrowUpRight size={19} /></article>)}</div>
        </section>

        <section className="it-image-band">
          <div className="it-image-band-photo" />
          <div className="it-image-band-copy"><span>PREPARE TO MAKE AN IMPACT</span><h2>KNOW THE<br /><i>WHY</i> BEHIND<br />THE WORK.</h2><p>Interview practice, technical preparation and project storytelling shaped around the role you want.</p><a href="/contact">Talk through your next step <ArrowRight size={16} /></a></div>
        </section>

        <section className="it-support-line"><span>HOW WE SUPPORT YOUR SEARCH</span><div><strong>POSITION</strong><i>→</i><strong>PREPARE</strong><i>→</i><strong>CONNECT</strong><i>→</i><strong>GROW</strong></div><a href="/#services">Explore all career support <ArrowUpRight size={15} /></a></section>
        <section className="it-final"><span className="sector-eyebrow"><span /> YOUR NEXT BUILD STARTS HERE</span><h2>PUT YOUR<br /><i>SKILLS</i> TO WORK.</h2><div><p>Share where you want to go. We&apos;ll help you explore the right next conversation.</p><a href="/contact" className="it-page-button">Talk to our team <ArrowRight size={16} /></a><Link to="/non-it">Looking beyond technology? <ArrowUpRight size={14} /></Link></div></section>
      </main>
      <SectorFooter />
    </div>
  )
}

function NonItCareerPage() {
  return (
    <div className="sector-page sector-nonit">
      <SiteNavigation theme="nonit" />
      <main>
        <section className="nonit-page-hero">
          <div className="nonit-hero-title"><p className="sector-eyebrow"><span /> CAREERS ACROSS EVERYDAY LIFE</p><h1>GOOD WORK<br />HAPPENS <i>EVERYWHERE.</i></h1></div>
          <div className="nonit-hero-photo"><span>PEOPLE MAKE<br />THE DIFFERENCE.</span><small>CAREERS BEYOND TECHNOLOGY</small></div>
          <div className="nonit-hero-note"><p>Finance. Healthcare. Engineering. Business. The work that keeps communities and organizations moving.</p><a href="#nonit-fields">Explore non-IT fields <ArrowDown size={15} /></a><span>01 / A WIDER VIEW OF WORK</span></div>
        </section>

        <section className="nonit-manifesto">
          <span>MORE THAN A JOB TITLE</span><h2>YOUR EXPERIENCE<br />HAS <i>VALUE</i><br />IN MORE PLACES<br />THAN YOU THINK.</h2><p>Different industries. Shared human skills. We help you connect what you already know with where you could contribute next.</p>
        </section>

        <section className="nonit-field-section" id="non-it-staffing">
          <div className="nonit-field-heading"><span>CAREER LANDSCAPES / 01—04</span><h2>WHERE PEOPLE<br /><i>MAKE IT MATTER.</i></h2></div>
          <div className="nonit-field-grid" id="nonit-fields">{nonItFields.map((field) => <article className={`nonit-field ${field.className}`} id={field.id} key={field.number}>
            <div className="nonit-field-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${field.image}?auto=format&fit=crop&w=1000&q=85)` }}><span>{field.number}</span></div>
            <div className="nonit-field-copy"><h3>{field.title}</h3><p>{field.detail}</p><ArrowUpRight size={18} /></div>
          </article>)}</div>
          <div className="nonit-field-foot"><span>ALSO INCLUDING SALES · MARKETING · ADMINISTRATION</span><span>FIELDS OF WORK, NOT OPEN JOB LISTINGS</span></div>
        </section>

        <section className="nonit-human-section">
          <div className="nonit-human-image" />
          <div className="nonit-human-copy"><span>THE SKILLS THAT TRAVEL</span><h2>LISTEN.<br /><i>ORGANIZE.</i><br />SOLVE.<br />LEAD.</h2><p>Communication, care, attention to detail and good judgment matter in every workplace. We help you bring those strengths forward.</p></div>
          <div className="nonit-skill-ribbon"><span>PEOPLE SKILLS</span><span>INDUSTRY KNOW-HOW</span><span>TRANSFERABLE EXPERIENCE</span><span>CAREER MOMENTUM</span></div>
        </section>

        <section className="nonit-next-step"><div><span>YOUR EXPERIENCE. A NEW CONTEXT.</span><h2>LET&apos;S FIND<br />THE <i>CONNECTION.</i></h2></div><div><p>Tell us about your background and the kind of work you want to do next. We&apos;ll start with a conversation, not assumptions.</p><a className="nonit-contact-button" href="/contact">Start a conversation <ArrowRight size={16} /></a><Link to="/it">Explore technology careers <ArrowUpRight size={14} /></Link></div></section>
      </main>
      <SectorFooter />
    </div>
  )
}

export default function IndustryPage({ kind }) {
  return (
    <>
      {kind === 'it' ? <ItCareerPage /> : <NonItCareerPage />}
      <a className="whatsapp-button" href={siteConfig.whatsappBusinessUrl || '/contact'} target={siteConfig.whatsappBusinessUrl ? '_blank' : undefined} rel={siteConfig.whatsappBusinessUrl ? 'noreferrer' : undefined} aria-label={siteConfig.whatsappBusinessUrl ? 'Chat with us on WhatsApp' : 'WhatsApp business link not configured. Contact us instead.'} title={siteConfig.whatsappBusinessUrl ? 'Chat with us' : 'WhatsApp link not configured'}><FaWhatsapp size={25} /><span>CHAT WITH US</span></a>
    </>
  )
}