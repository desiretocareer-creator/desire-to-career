import { useEffect, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import SiteNavigation from './SiteNavigation'
import { siteConfig } from './siteConfig'
import './site.css'

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Contact | Desire to Career'

    return () => {
      document.title = previousTitle
    }
  }, [])

 const submitContact = async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  const data = new URLSearchParams()

  data.append('name', formData.get('name') || '')
  data.append('email', formData.get('email') || '')
  data.append('phone', formData.get('phone') || '')
  data.append('personType', formData.get('personType') || '')
  data.append('interest', formData.get('interest') || '')
  data.append('message', formData.get('message') || '')

  try {
    setIsSubmitting(true)

    await fetch(
      'https://script.google.com/macros/s/AKfycbw4f4bWT2i8w75YV8eqtdIL4dMp_5yGedX-knvVb0peb7SxxzelHOeiU5zFOpYfrIp3mA/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      }
    )

    setFormSent(true)
    form.reset()

  } catch (error) {
    console.error('Form submission error:', error)
    alert('Something went wrong. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="contact-page">
      <SiteNavigation />

      <main>
        {/* PAGE INTRO */}
        <div className="contact-page-intro">
          <span>CONTACT / DESIRE TO CAREER</span>
          <span>USA · PEOPLE FIRST</span>
        </div>

        {/* CONTACT SECTION */}
        <section className="contact-section contact-route-section">

          {/* LEFT VISUAL */}
          <div className="contact-visual">
            <div
              className="contact-photo"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=85)',
              }}
              role="img"
              aria-label="Light-filled contemporary workspace"
            />

            <div className="contact-visual-copy">
              <p className="eyebrow light">
                GOOD THINGS START WITH A CONVERSATION
              </p>

              <h1>
                LET&apos;S START
                <br />
                SOMETHING
                <br />
                <i>IMPORTANT.</i>
              </h1>

              <span>
                CAREER AND STAFFING SUPPORT, BUILT AROUND PEOPLE.
              </span>
            </div>

            <div className="contact-side-index">
              01 / LISTEN FIRST
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrap">

            <div className="contact-form-heading">
              <p className="eyebrow">WE&apos;RE LISTENING</p>

              <h2>
                Tell us what you&apos;re looking for.
              </h2>

              <p>
                Share a little context and we&apos;ll help direct the next
                conversation.
              </p>
            </div>

            {formSent ? (
              /* SUCCESS MESSAGE */
              <div className="form-success" role="status">
                <span>
                  <Check size={21} />
                </span>

                <h3>
                  Thanks for reaching out.
                </h3>

                <p>
                  Your message has been submitted successfully.
                  Our team will review your request and get back to you.
                </p>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => setFormSent(false)}
                >
                  Send another message
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              /* FORM */
              <form
                className="contact-form"
                onSubmit={submitContact}
              >
                {/* NAME + EMAIL */}
                <div className="form-pair">
                  <label>
                    Your name

                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Name"
                    />
                  </label>

                  <label>
                    Email address

                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                {/* PHONE + PERSON TYPE */}
                <div className="form-pair">
                  <label>
                    Phone <span>(optional)</span>

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Phone number"
                    />
                  </label>

                  <label>
                    I am a

                    <select
                      name="personType"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>

                      <option value="Candidate">
                        Candidate
                      </option>

                      <option value="Employer">
                        Employer
                      </option>

                      <option value="Partner">
                        Partner
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </label>
                </div>

                {/* INTEREST */}
                <label>
                  Interested in

                  <select
                    name="interest"
                    defaultValue="Career support"
                  >
                    <option value="Career support">
                      Career support
                    </option>

                    <option value="Resume development">
                      Resume development
                    </option>

                    <option value="Technical preparation">
                      Technical preparation
                    </option>

                    <option value="IT staffing">
                      IT staffing
                    </option>

                    <option value="Non-IT staffing">
                      Non-IT staffing
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>

                {/* MESSAGE */}
                <label>
                  Your message

                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="A little about what brings you here..."
                  />
                </label>

                {/* SUBMIT */}
                <button
                  className="button button-dark form-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* RESPONSE NOTE */}
            <div className="contact-response-note">
              <span>
                RESPONSE STARTS WITH UNDERSTANDING.
              </span>

              <span>
                NO AUTOMATED MATCHING OR PROMISES.
              </span>
            </div>
          </div>
        </section>

        {/* WORLD SECTION */}
        <section className="world-section contact-world-section">

          <div
            className="world-globe"
            aria-hidden="true"
          >
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
              TALENT HAS
              <br />
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

      {/* FOOTER */}
      <footer className="contact-page-footer">
        <a
          href="/"
          className="contact-footer-brand"
        >
          DESIRE
          <br />
          TO CAREER
          <span>®</span>
        </a>

        <p>
          Connecting talent
          <br />
          with opportunity.
        </p>

        <span>
          © {new Date().getFullYear()} DESIRE TO CAREER
        </span>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        className="whatsapp-button"
        href={siteConfig.whatsappBusinessUrl || '/contact'}
        target={
          siteConfig.whatsappBusinessUrl
            ? '_blank'
            : undefined
        }
        rel={
          siteConfig.whatsappBusinessUrl
            ? 'noreferrer'
            : undefined
        }
        aria-label={
          siteConfig.whatsappBusinessUrl
            ? 'Chat with us on WhatsApp'
            : 'WhatsApp business link not configured. Contact us instead.'
        }
        title={
          siteConfig.whatsappBusinessUrl
            ? 'Chat with us'
            : 'WhatsApp link not configured'
        }
      >
        <FaWhatsapp size={25} />

        <span>
          CHAT WITH US
        </span>
      </a>
    </div>
  )
}