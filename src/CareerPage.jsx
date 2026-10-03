import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, ArrowUpRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteNavigation from './SiteNavigation'

const areas = [
  { name: 'Technology', type: 'IT', roles: 'Software · QA · Product' },
  { name: 'Data & analytics', type: 'IT', roles: 'Analytics · Engineering · BI' },
  { name: 'Cloud & security', type: 'IT', roles: 'Cloud · DevOps · Cybersecurity' },
  { name: 'Finance', type: 'Non-IT', roles: 'Accounting · Operations · Analysis' },
  { name: 'Healthcare', type: 'Non-IT', roles: 'Clinical · Administration · Support' },
  { name: 'Business & engineering', type: 'Non-IT', roles: 'Sales · Marketing · Engineering' },
]

export default function CareerPage() {
  const [jobType, setJobType] = useState('All areas')
  const [jobQuery, setJobQuery] = useState('')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Careers | Desire to Career'
    return () => { document.title = previousTitle }
  }, [])

  const visibleAreas = useMemo(() => {
    return areas.filter((area) => {
      const matchesType = jobType === 'All areas' || area.type === jobType
      const query = jobQuery.trim().toLowerCase()
      const matchesQuery = !query || `${area.name} ${area.roles}`.toLowerCase().includes(query)
      return matchesType && matchesQuery
    })
  }, [jobQuery, jobType])

  return (
    <div className="career-page">
      <SiteNavigation />
      <main className="career-page-main">
        <section className="career-hero">
          <div className="career-hero-copy">
            <p className="eyebrow">FIND YOUR DIRECTION</p>
            <h1>WHERE COULD<br /><i>YOU GO</i><br />NEXT?</h1>
            <p className="career-subtitle">From thoughtful career support to new opportunities across IT and beyond, we help people move with clarity and confidence.</p>
            <div className="career-hero-actions">
              <Link className="button button-dark" to="/contact">Talk to our team <ArrowRight size={17} /></Link>
              <a className="text-link" href="#career-finder">Explore career areas <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="career-hero-panel" aria-label="Career support overview">
            <span className="panel-label">CAREER SUPPORT</span>
            <div className="panel-grid">
              <div><strong>01</strong><span>Profile clarity</span></div>
              <div><strong>02</strong><span>Resume direction</span></div>
              <div><strong>03</strong><span>Interview prep</span></div>
              <div><strong>04</strong><span>Opportunity fit</span></div>
            </div>
          </div>
        </section>

        <section className="process-section career-process-section" aria-labelledby="career-process-heading">
          <div className="process-intro">
            <p className="eyebrow">A CLEARER WAY THROUGH</p>
            <h2 id="career-process-heading">ONE STEP<br />AT A <i>TIME.</i></h2>
            <p>One steady partner for every next step.</p>
          </div>
          <div className="process-track">
            {[
              ['01', 'UNDERSTAND', 'Start with your goals.'],
              ['02', 'BUILD', 'Shape your story.'],
              ['03', 'PREPARE', 'Practice what matters.'],
              ['04', 'CONNECT', 'Find relevant opportunities.'],
              ['05', 'SUPPORT', 'Keep moving forward.'],
            ].map(([number, title, text]) => (
              <div className="process-step" key={number}>
                <div className="process-dot"><span>{number}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="process-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1300&q=85)' }}>
            <span>YOUR NEXT CHAPTER ISN&apos;T ONE-SIZE-FITS-ALL.</span>
          </div>
        </section>

        <section className="careers-section" id="career-finder">
          <div className="careers-header">
            <p className="eyebrow">CAREER AREAS</p>
            <h2>BUILD A<br /><i>PATH</i><br />WORTH TAKING.</h2>
            <p>Explore the areas we work across. Live vacancies will be published here when available.</p>
          </div>

          <div className="career-finder">
            <div className="finder-controls">
              <label className="search-control">
                <Search size={19} />
                <input
                  type="search"
                  value={jobQuery}
                  onChange={(event) => setJobQuery(event.target.value)}
                  placeholder="Search jobs, technologies or locations"
                  aria-label="Search career areas"
                />
              </label>

              <div className="filter-group" role="group" aria-label="Filter career areas">
                {['All areas', 'IT', 'Non-IT'].map((type) => (
                  <button
                    className={jobType === type ? 'filter-button selected' : 'filter-button'}
                    type="button"
                    key={type}
                    onClick={() => setJobType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="area-list">
              {visibleAreas.length ? (
                visibleAreas.map((area, index) => (
                  <div className="area-row" key={area.name}>
                    <span className="area-index">0{index + 1}</span>
                    <strong>{area.name}</strong>
                    <span>{area.roles}</span>
                    <ArrowUpRight size={18} />
                  </div>
                ))
              ) : (
                <p className="no-results">No matching career areas. Try another search.</p>
              )}
            </div>

            <div className="finder-foot">
              <span>CAREER AREAS · NOT LIVE JOB LISTINGS</span>
              <Link to="/contact">Share your profile <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
