// import { useEffect, useRef, useState } from 'react'
// import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const services = [
//   ['Resume Builder', '/#resume'],
//   ['Profile Marketing', '/#profile-marketing'],
//   ['Technical Support', '/#technical-support'],
//   ['Interview Preparation', '/#interview-preparation'],
//   ['Career Support', '/#career-support'],
//   ['IT Staffing', '/it#it-staffing'],
//   ['Non-IT Staffing', '/non-it#non-it-staffing'],
// ]

// const industries = [
//   {
//     title: 'TECHNOLOGY',
//     links: [
//       ['AI & Machine Learning', '/it#ai-machine-learning'],
//       ['Data & Analytics', '/it#data-analytics'],
//       ['Software Development', '/it#software-development'],
//       ['Cloud & DevOps', '/it#cloud-devops'],
//       ['Cybersecurity', '/it#cybersecurity'],
//       ['IT Infrastructure', '/it#it-infrastructure'],
//       ['QA & Testing', '/it#qa-testing'],
//     ],
//   },
//   {
//     title: 'BUSINESS & INDUSTRY',
//     links: [
//       ['Business & Finance', '/non-it#business-finance'],
//       ['Healthcare', '/non-it#healthcare'],
//       ['Engineering', '/non-it#engineering'],
//       ['Sales & Marketing', '/non-it#sales-marketing'],
//       ['Non-IT Careers', '/non-it#nonit-fields'],
//     ],
//   },
// ]

// function NavLink({ href, children, onClick, index }) {
//   return (
//     <a className="mega-link" href={href} onClick={onClick} style={{ '--menu-index': index }}>
//       <span>{children}</span><ArrowUpRight size={14} aria-hidden="true" />
//     </a>
//   )
// }

// export default function SiteNavigation({ theme = 'home' }) {
//   const [activeMenu, setActiveMenu] = useState(null)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const navRef = useRef(null)

//   useEffect(() => {
//     const closeOnEscape = (event) => {
//       if (event.key === 'Escape') {
//         setActiveMenu(null)
//         setMobileOpen(false)
//       }
//     }
//     const closeOutside = (event) => {
//       if (!navRef.current?.contains(event.target)) setActiveMenu(null)
//     }
//     window.addEventListener('keydown', closeOnEscape)
//     document.addEventListener('pointerdown', closeOutside)
//     return () => {
//       window.removeEventListener('keydown', closeOnEscape)
//       document.removeEventListener('pointerdown', closeOutside)
//     }
//   }, [])

//   const closeMenus = () => {
//     setActiveMenu(null)
//     setMobileOpen(false)
//   }

//   const toggleMenu = (name) => setActiveMenu((current) => current === name ? null : name)

//   return (
//     <header className={`site-header site-header-${theme}`} ref={navRef}>
//       <Link className="brand" to="/" aria-label="Desire to Career home" onClick={closeMenus}>
//         <span className="brand-mark">D<span>·</span>C</span>
//         <span className="brand-name">DESIRE TO<br />CAREER</span>
//       </Link>
//       <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
//         {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//       </button>
//       <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
//         <div className={`nav-dropdown ${activeMenu === 'services' ? 'is-open' : ''}`} onMouseEnter={() => window.innerWidth > 900 && setActiveMenu('services')} onMouseLeave={() => window.innerWidth > 900 && setActiveMenu(null)}>
//           <button type="button" aria-expanded={activeMenu === 'services'} aria-controls="services-menu" onClick={() => toggleMenu('services')}>Services <ChevronDown size={14} /></button>
//           <div className="mega-menu services-mega" id="services-menu" aria-hidden={activeMenu !== 'services'}>
//             <div className="mega-intro"><span>SUPPORT THAT MOVES WITH YOU</span><strong>Services</strong><p>Practical career and staffing support, from first step to next opportunity.</p></div>
//             <div className="mega-links services-links">{services.map(([label, href], index) => <NavLink href={href} onClick={closeMenus} index={index} key={label}>{label}</NavLink>)}</div>
//           </div>
//         </div>
//         <div className={`nav-dropdown ${activeMenu === 'industries' ? 'is-open' : ''}`} onMouseEnter={() => window.innerWidth > 900 && setActiveMenu('industries')} onMouseLeave={() => window.innerWidth > 900 && setActiveMenu(null)}>
//           <button type="button" aria-expanded={activeMenu === 'industries'} aria-controls="industries-menu" onClick={() => toggleMenu('industries')}>Industries <ChevronDown size={14} /></button>
//           <div className="mega-menu industries-mega" id="industries-menu" aria-hidden={activeMenu !== 'industries'}>
//             <div className="mega-intro"><span>CAREERS ACROSS DISCIPLINES</span><strong>Industries</strong><p>Explore a path by the kind of work you want to do.</p></div>
//             <div className="industry-menu-groups">{industries.map((group) => <div className="industry-menu-group" key={group.title}><span>{group.title}</span><div className="mega-links">{group.links.map(([label, href], index) => <NavLink href={href} onClick={closeMenus} index={index} key={label}>{label}</NavLink>)}</div></div>)}</div>
//           </div>
//         </div>
//         <a href="/#approach" onClick={closeMenus}>Our approach</a>
//         <a href="/#employers" onClick={closeMenus}>Employers</a>
//         <a className="nav-contact" href="/#contact" onClick={closeMenus}>Let&apos;s talk <ArrowUpRight size={15} /></a>
//       </nav>
//     </header>
//   )
// }



import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import companyLogo from './assets/company-logo.png'

const services = [
  ['Resume Builder', '/services/resume-builder'],
  ['Profile Marketing', '/services/profile-marketing'],
  ['Technical Support', '/services/technical-support'],
  ['Interview Preparation', '/services/interview-preparation'],
  ['Career Support', '/services/career-support'],
  ['IT Staffing', '/it#it-staffing'],
  ['Non-IT Staffing', '/non-it#non-it-staffing'],
]

const resources = [
  ['Resume Builder', '/services/resume-builder'],
  ['Sample Resume', '/#resume'],
  ['Career Support', '/services/career-support'],
  ['Frequently Asked Questions', '/#faq'],
  ['Career Journey', '/#career-story'],
]

const industries = [
  {
    title: 'TECHNOLOGY',
    links: [
      ['AI & Machine Learning', '/industries/ai-machine-learning'],
      ['Data & Analytics', '/industries/data-analytics'],
      ['Software Development', '/industries/software-development'],
      ['Cloud & DevOps', '/industries/cloud-devops'],
      ['Cybersecurity', '/industries/cybersecurity'],
      ['IT Infrastructure', '/industries/it-infrastructure'],
      ['QA & Testing', '/industries/qa-testing'],
    ],
  },
  {
    title: 'BUSINESS & INDUSTRY',
    links: [
      ['Business & Finance', '/industries/business-finance'],
      ['Healthcare', '/industries/healthcare'],
      ['Engineering', '/industries/engineering'],
      ['Sales & Marketing', '/industries/sales-marketing'],
      ['Non-IT Careers', '/non-it#nonit-fields'],
    ],
  },
]

function NavLink({ href, children, onClick }) {
  return (
    <a className="mega-link" href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  )
}

// theme: 'dark' (default) for hero/dark-section pages, 'light' for pages
// where the navbar sits over white/light content.
export default function SiteNavigation({ theme = 'dark' }) {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const closeTimeout = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    const closeOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1200) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenus = () => {
    setActiveMenu(null)
    setMobileOpen(false)
  }

  const toggleMenu = (name) => setActiveMenu((current) => (current === name ? null : name))

  const hoverOpen = (name) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    if (window.innerWidth > 1200) setActiveMenu(name)
  }

  const hoverClose = () => {
    if (window.innerWidth > 1200) {
      closeTimeout.current = setTimeout(() => {
        setActiveMenu(null)
      }, 180)
    }
  }
  const blurClose = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setActiveMenu(null)
  }

  return (
    <div className={`site-header-wrap theme-${theme} ${scrolled ? 'is-scrolled' : ''}`}>
      <header className="site-header" ref={navRef}>
        <Link className="brand" to="/" aria-label="Desire to Career home" onClick={closeMenus}>
          <img className="brand-mark" src={companyLogo} alt="" />
          <span className="brand-name">Desire to Career</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav className={mobileOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <div
            className={`nav-dropdown ${activeMenu === 'services' ? 'is-open' : ''}`}
            onMouseEnter={() => hoverOpen('services')}
            onMouseLeave={hoverClose}
            onBlurCapture={blurClose}
          >
            <button
              className="nav-link nav-trigger"
              type="button"
              aria-expanded={activeMenu === 'services'}
              aria-controls="services-menu"
              onClick={() => toggleMenu('services')}
            >
              Services <ChevronDown size={13} className="chevron" />
            </button>
            <div className="mega-menu" id="services-menu" aria-hidden={activeMenu !== 'services'}>
              <div className="mega-inner">
                <p className="mega-label">Services</p>
                <div className="mega-links">
                  {services.map(([label, href]) => (
                    <NavLink href={href} onClick={closeMenus} key={label}>{label}</NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav-dropdown ${activeMenu === 'industries' ? 'is-open' : ''}`}
            onMouseEnter={() => hoverOpen('industries')}
            onMouseLeave={hoverClose}
            onBlurCapture={blurClose}
          >
            <button
              className="nav-link nav-trigger"
              type="button"
              aria-expanded={activeMenu === 'industries'}
              aria-controls="industries-menu"
              onClick={() => toggleMenu('industries')}
            >
              Industries <ChevronDown size={13} className="chevron" />
            </button>
            <div className="mega-menu mega-menu-wide" id="industries-menu" aria-hidden={activeMenu !== 'industries'}>
              <div className="mega-inner">
                <p className="mega-label">Industries</p>
                <div className="industry-groups">
                  {industries.map((group) => (
                    <div className="industry-group" key={group.title}>
                      <span className="industry-group-title">{group.title}</span>
                      <div className="mega-links">
                        {group.links.map(([label, href]) => (
                          <NavLink href={href} onClick={closeMenus} key={label}>{label}</NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a className="nav-link" href="/careers" onClick={closeMenus}>Careers</a>
          <a className="nav-link" href="/services/career-support" onClick={closeMenus}>For candidates</a>

          <div
            className={`nav-dropdown ${activeMenu === 'resources' ? 'is-open' : ''}`}
            onMouseEnter={() => hoverOpen('resources')}
            onMouseLeave={hoverClose}
            onBlurCapture={blurClose}
          >
            <button
              className="nav-link nav-trigger"
              type="button"
              aria-expanded={activeMenu === 'resources'}
              aria-controls="resources-menu"
              onClick={() => toggleMenu('resources')}
            >
              Resources <ChevronDown size={13} className="chevron" />
            </button>
            <div className="mega-menu" id="resources-menu" aria-hidden={activeMenu !== 'resources'}>
              <div className="mega-inner">
                <p className="mega-label">Resources</p>
                <div className="mega-links">
                  {resources.map(([label, href]) => (
                    <NavLink href={href} onClick={closeMenus} key={label}>{label}</NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a className="nav-contact" href="/contact" onClick={closeMenus}>
            Contact <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <style jsx>{`
      /* ==========================================
   PREMIUM BLACK GLASS NAVBAR (FULL CSS)
   ========================================== */

.site-header-wrap {
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 1rem 1.5rem 0;
  overflow: visible;
}

.site-header {
  position: relative;
  z-index: 10;
  max-width: 1180px;
  margin: 0 auto;
  height: 64px;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 999px;

  /* BLACK GLASS */
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);

  transition: all 0.3s ease;
}

.site-header-wrap.is-scrolled .site-header {
  background: rgba(0, 0, 0, 0.72);
}

/* ==================== BRAND ==================== */

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-mark {
  width: 62px;
  height: 62px;
  flex: 0 0 auto;
  border-radius: 0;
  border: 0;
  background: transparent;
  object-fit: contain;
}

.brand-name {
  color: #ffffff !important;
  font-size: 15px;
  font-weight: 600;
}

/* ==================== NAVIGATION ==================== */

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.nav-link,
.nav-trigger {
  background: transparent;
  border: none;
  cursor: pointer;

  color: #ffffff !important;

  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  position: relative;
  transition: all 0.25s ease;
}

.nav-link:hover,
.nav-trigger:hover {
  color: #ffffff !important;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: #ffffff;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.chevron {
  color: white;
  transition: transform 0.25s ease;
}

.nav-dropdown.is-open .chevron {
  transform: rotate(180deg);
}

.nav-dropdown {
  position: relative;
}

/* ==================== DROPDOWN ==================== */

.mega-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(8px);

  width: 360px;
  max-width: min(360px, calc(100vw - 40px));
  border-radius: 18px;
  padding: 18px;

  background: rgba(11, 26, 42, 0.97);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);

  border: 1px solid rgba(183, 211, 244, 0.2);
  box-shadow: 0 22px 50px rgba(4, 13, 22, 0.38);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition: all 0.25s ease;
}

.mega-menu-wide {
  width: min(760px, calc(100vw - 48px));
  max-width: 760px;
}

#services-menu .mega-inner,
#resources-menu .mega-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 9px;
}

#industries-menu .mega-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.nav-dropdown.is-open .mega-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.mega-label {
  color: #b7d3f4 !important;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.mega-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mega-link {
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
  color: #ffffff !important;

  min-height: 40px;
  padding: 9px 11px;
  border: 1px solid rgba(183, 211, 244, 0.08);
  border-radius: 10px;
  color: #f4f8fc !important;
  font-size: 12px;

  transition: all 0.2s ease;
}

.mega-link:hover {
  border-color: rgba(183, 211, 244, 0.22);
  background: rgba(183, 211, 244, 0.1);
  color: #ffffff !important;
}

.mega-link svg {
  opacity: 0;
  color: white;
  transition: all 0.2s ease;
}

.mega-link:hover svg {
  opacity: 1;
  transform: translateX(3px);
}

/* ==================== INDUSTRIES ==================== */

.industry-groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.industry-group-title {
  display: block;
  color: #9dbadd !important;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.13em;
  margin-bottom: 9px;
}

/* ==================== CONTACT BUTTON ==================== */

.nav-contact {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 10px 18px;
  border-radius: 999px;

  // background: #2563eb;
  color: #ffffff;

  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  transition: all 0.25s ease;
}

.nav-contact:hover {
  background: #ffffff;
  color: black;
}

/* ==================== MOBILE MENU BUTTON ==================== */

.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

/* ==================== MOBILE ==================== */

@media (max-width: 1200px) {
  .site-header-wrap {
    padding: 0.75rem 0.75rem 0;
  }

  .site-header {
    border-radius: 22px;
    padding: 0 0.9rem;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    width: min(100%, 420px);
    margin: 0 auto;
    max-height: calc(100vh - 100px);
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 1rem 1rem 1.1rem;
    overflow-y: auto;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.82);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all 0.25s ease;
  }

  .main-nav.is-open {
    display: flex;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-link,
  .nav-trigger {
    width: 100%;
    padding: 14px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: #ffffff !important;
    justify-content: space-between;
  }

  .nav-link::after {
    display: none;
  }

  .nav-dropdown {
    width: 100%;
  }

  .mega-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    display: none;
    margin-top: 10px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: none;
  }

  .nav-dropdown.is-open .mega-menu {
    display: block;
  }

  .mega-menu-wide {
    min-width: 100%;
  }

  .industry-groups {
    grid-template-columns: 1fr;
  }

  .nav-contact {
    width: 100%;
    justify-content: center;
    margin-top: 16px;
  }
}

.nav-dropdown {
  position: relative;
}

/* Invisible bridge so cursor doesn't leave */
.nav-dropdown::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 18px;
}

.mega-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition: opacity 0.25s ease, transform 0.25s ease;
}

.nav-dropdown:hover .mega-menu,
.nav-dropdown.is-open .mega-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

@media (min-width: 1201px) {
  #services-menu .mega-links,
  #resources-menu .mega-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  #industries-menu .industry-groups {
    gap: 22px;
  }
}

@media (max-width: 1200px) {
  .main-nav .mega-menu,
  .main-nav .mega-menu-wide {
    position: static;
    top: auto;
    left: auto;
    width: 100%;
    max-width: none;
    min-width: 0;
    max-height: 0;
    display: block;
    margin: 0;
    padding: 0 10px;
    overflow: hidden;
    border: 0;
    border-radius: 12px;
    background: rgba(183, 211, 244, 0.06);
    box-shadow: none;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: none;
    transition: max-height .3s ease, opacity .2s ease, padding .25s ease, visibility .2s ease;
  }

  .main-nav .nav-dropdown.is-open > .mega-menu {
    max-height: 720px;
    margin-top: 5px;
    padding: 10px;
    border: 1px solid rgba(183, 211, 244, .14);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .main-nav .nav-dropdown:hover .mega-menu {
    transform: none;
  }

  .main-nav .mega-link {
    min-height: 38px;
    font-size: 11px;
  }
}
  
/* FORCE WHITE TEXT FOR ALL THEMES */
.theme-light .brand-name,
.theme-light .nav-link,
.theme-light .nav-trigger,
.theme-light .mega-link,
.theme-light .mega-label,
.theme-light .industry-group-title,
.theme-dark .brand-name,
.theme-dark .nav-link,
.theme-dark .nav-trigger,
.theme-dark .mega-link,
.theme-dark .mega-label,
.theme-dark .industry-group-title,
.theme-it .brand-name,
.theme-it .nav-link,
.theme-it .nav-trigger,
.theme-it .mega-link,
.theme-it .mega-label,
.theme-it .industry-group-title,
.theme-nonit .brand-name,
.theme-nonit .nav-link,
.theme-nonit .nav-trigger,
.theme-nonit .mega-link,
.theme-nonit .mega-label,
.theme-nonit .industry-group-title {
  color: #ffffff !important;
}
      `}</style>
    </div>
  )
}