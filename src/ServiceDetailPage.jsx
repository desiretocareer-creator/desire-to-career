import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SiteNavigation from './SiteNavigation'
import { industryPages, servicePages } from './detailPages'

const image = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

export default function ServiceDetailPage({ kind }) {
  const { slug } = useParams()
  const page = (kind === 'industry' ? industryPages : servicePages)[slug]

  if (!page) {
    return <main className="detail-not-found"><div><h1>That page isn&apos;t here.</h1><Link to="/">Return home <ArrowRight size={16} /></Link></div></main>
  }

  const isIndustry = kind === 'industry'
  const darkTheme = ['night', 'blue', 'navy'].includes(page.theme)

  return (
    <div className={`detail-page detail-tone-${page.theme} detail-layout-${page.layout}`}>
      <SiteNavigation theme={darkTheme ? 'dark' : 'light'} />
      <main>
        <nav className="detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">HOME</Link><span>/</span><span>{isIndustry ? 'INDUSTRIES' : 'SERVICES'}</span><span>/</span><span>{page.eyebrow}</span>
        </nav>

        <section className="detail-hero">
          <div className="detail-hero-copy">
            <p className="detail-eyebrow"><i />{page.eyebrow}</p>
            <h1>{page.title.map((line, index) => (
              <span className={index === page.title.length - 1 ? 'detail-title-accent' : undefined} style={{ '--line-index': index }} key={`${line}-${index}`}>
                {line}<br />
              </span>
            ))}</h1>
            <p className="detail-summary">{page.summary}</p>
            <div className="detail-hero-actions">
              <Link className="detail-button" to="/contact">Talk to our team <ArrowRight size={15} /></Link>
              <a className="detail-text-link" href="#detail-focus">Explore the focus areas <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="detail-hero-visual">
            <div className="detail-hero-photo"><img src={image(page.photo, 1500)} alt={page.photoAlt} /></div>
            <span className="detail-visual-label">{page.focus}</span>
          </div>
          <div className="detail-hero-index"><span>{page.eyebrow}</span><span>{isIndustry ? 'CAREERS / USA' : 'PERSONALIZED SUPPORT'}</span></div>
        </section>

        <section className="detail-intro" id="detail-intro">
          <span className="detail-side-label">A THOUGHTFUL NEXT STEP</span>
          <h2>{page.introTitle}</h2>
          <p>{page.intro}</p>
          <a href="#detail-focus" aria-label="Explore focus areas"><ArrowRight size={18} /></a>
        </section>

        <section className="detail-focus" id="detail-focus">
          <div className="detail-focus-heading">
            <p className="detail-eyebrow"><i />{isIndustry ? 'THE WORK, IN FOCUS' : 'HOW WE CAN HELP'}</p>
            <h2>{page.focus}</h2>
            <span>{String(page.points.length).padStart(2, '0')} AREAS OF FOCUS</span>
          </div>
          <div className="detail-point-list">
            {page.points.map(([number, title, description]) => (
              <article className="detail-point" key={number}>
                <span className="detail-point-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="detail-image-story">
          <div className="detail-story-photo">
            <img src={image(page.secondPhoto, 1300)} alt={page.secondAlt} />
            <span>{isIndustry ? 'CAREERS ACROSS DISCIPLINES' : 'SUPPORT THAT STARTS WITH YOU'}</span>
          </div>
          <div className="detail-story-copy">
            <span>THE NEXT STEP IS PERSONAL</span>
            <h2>Bring your strengths into focus.</h2>
            <p>{page.intro}</p>
            <div className="detail-story-note"><Check size={16} />{page.cta}</div>
          </div>
        </section>

        <section className="detail-journey">
          <div className="detail-journey-heading">
            <span>A CLEAR WAY FORWARD</span>
            <h2>YOUR NEXT<br /><i>CHAPTER.</i></h2>
            <p>Practical steps, shaped around your goals and the work you want to do.</p>
          </div>
          <div className="detail-stage-list">
            {page.stages.map((stage, index) => (
              <div className="detail-stage" key={stage}>
                <span>0{index + 1}</span><strong>{stage}</strong><ArrowUpRight size={16} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="detail-next">
          <p className="detail-eyebrow"><i />READY WHEN YOU ARE</p>
          <h2>{page.cta}</h2>
          <div className="detail-next-actions">
            <Link className="detail-button" to="/contact">Start a conversation <ArrowRight size={15} /></Link>
            <div className="detail-related">
              {page.related.map(([label, href]) => <Link to={href} key={label}>{label}<ArrowUpRight size={13} /></Link>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="detail-footer">
        <Link to="/" className="detail-footer-brand">DESIRE<br />TO CAREER<span>®</span></Link>
        <p>Connecting talent<br />with opportunity.</p>
        <div className="detail-footer-links"><Link to="/careers">Careers<ArrowUpRight size={13} /></Link><Link to="/contact">Contact<ArrowUpRight size={13} /></Link></div>
        <span>© {new Date().getFullYear()} DESIRE TO CAREER</span>
      </footer>
    </div>
  )
}
