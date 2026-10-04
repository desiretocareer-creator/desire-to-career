import { useEffect, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SiteNavigation from './SiteNavigation'
import { siteConfig } from './siteConfig'
import './site.css'

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Contact | Desire to Career'
    return () => { document.title = previousTitle }
  }, [])

  const submitContact = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = new URLSearchParams()

    data.append("name", formData.get("name") || "")
    data.append("email", formData.get("email") || "")
    data.append("phone", formData.get("phone") || "")
    data.append("personType", formData.get("personType") || "")
    data.append("interest", formData.get("interest") || "")
    data.append("message", formData.get("message") || "")

    try {
      await fetch(
        {
          method: "POST",
          mode: "no-cors",
          body: data
        }
      )

      fetch(
        "https://script.google.com/macros/s/AKfycbw5e4qmcnOeWDAvESFVQWtRzPFZQyrWzc0KJNiQBgkyPRup85drpqq6uqdH88i9xGVU/exec",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            personType,
            interest,
            message
          })
        });

      setFormSent(true)
      form.reset()

    } catch (error) {
      console.error("Form submission error:", error)

      alert("Something went wrong. Please try again.")
    }
  }
  return (
    <div className="contact-page">
      <SiteNavigation />
      <main>
        <div className="contact-page-intro"><span>CONTACT / DESIRE TO CAREER</span><span>USA · PEOPLE FIRST</span></div>
        <section className="contact-section contact-route-section">
          <div className="contact-visual">
            <div className="contact-photo" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=85)' }} role="img" aria-label="Light-filled contemporary workspace" />
            <div className="contact-visual-copy"><p className="eyebrow light">GOOD THINGS START WITH A CONVERSATION</p><h1>LET&apos;S START<br />SOMETHING<br /><i>IMPORTANT.</i></h1><span>CAREER AND STAFFING SUPPORT, BUILT AROUND PEOPLE.</span></div>
            <div className="contact-side-index">01 / LISTEN FIRST</div>
          </div>
          <div className="contact-form-wrap">
            <div className="contact-form-heading"><p className="eyebrow">WE&apos;RE LISTENING</p><h2>Tell us what you&apos;re looking for.</h2><p>Share a little context and we&apos;ll help direct the next conversation.</p></div>
            {formSent ? <div className="form-success" role="status"><span><Check size={21} /></span><h3>Thanks for reaching out.</h3><p>This demo form is not connected to a submission service. Please contact the site owner to connect it before launch.</p><button type="button" className="text-link" onClick={() => setFormSent(false)}>Send another message <ArrowRight size={16} /></button></div> : <form className="contact-form" onSubmit={submitContact}>
              <div className="form-pair"><label>Your name<input required name="name" autoComplete="name" placeholder="Name" /></label><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label></div>
              <div className="form-pair"><label>Phone <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" placeholder="Phone number" /></label><label>I am a<select name="personType" defaultValue=""><option value="" disabled>Select one</option><option>Candidate</option><option>Employer</option><option>Partner</option><option>Other</option></select></label></div>
              <label>Interested in<select name="interest" defaultValue="Career support"><option>Career support</option><option>Resume development</option><option>Technical preparation</option><option>IT staffing</option><option>Non-IT staffing</option><option>Other</option></select></label>
              <label>Your message<textarea required name="message" rows="4" placeholder="A little about what brings you here..." /></label>
              <button className="button button-dark form-submit" type="submit">Send message <ArrowRight size={17} /></button>
            </form>}
            <div className="contact-response-note"><span>RESPONSE STARTS WITH UNDERSTANDING.</span><span>NO AUTOMATED MATCHING OR PROMISES.</span></div>
          </div>
        </section>
        <section className="world-section contact-world-section">
          <div className="world-globe" aria-hidden="true">
            <div className="globe-longitude" />
            <div className="globe-latitude" />
            <div className="globe-route" />

            <i className="globe-pin pin-india" />
            <i className="globe-pin pin-usa" />
          </div>

          <div className="world-content">
            <p className="eyebrow light">
              A CONNECTION ACROSS DISTANCE
            </p>

            <h2>
              TALENT HAS<br />
              <i>NO BORDERS.</i>
            </h2>

            <p className="world-quote">
              “Great talent knows no borders. The right opportunity shouldn’t either.”
            </p>

            <div className="world-labels">
              <span>INDIA</span>

              <span>
                {siteConfig.internalUsClients}+ INTERNAL CLIENTS IN THE USA
              </span>

              <span>UNITED STATES</span>
            </div>
          </div>
        </section>

      </main>
      <footer className="contact-page-footer"><a href="/" className="contact-footer-brand">DESIRE<br />TO CAREER<span>®</span></a><p>Connecting talent<br />with opportunity.</p><span>© {new Date().getFullYear()} DESIRE TO CAREER</span></footer>
      <a className="whatsapp-button" href={siteConfig.whatsappBusinessUrl || '/contact'} target={siteConfig.whatsappBusinessUrl ? '_blank' : undefined} rel={siteConfig.whatsappBusinessUrl ? 'noreferrer' : undefined} aria-label={siteConfig.whatsappBusinessUrl ? 'Chat with us on WhatsApp' : 'WhatsApp business link not configured. Contact us instead.'} title={siteConfig.whatsappBusinessUrl ? 'Chat with us' : 'WhatsApp link not configured'}><FaWhatsapp size={25} /><span>CHAT WITH US</span></a>
    </div>
  )
}