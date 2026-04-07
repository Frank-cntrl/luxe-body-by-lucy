import { useState } from 'react'
import { Phone, MapPin, Clock, ExternalLink, Calendar } from 'lucide-react'
import './Book.css'

export default function Book() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  return (
    <div className="book">
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="page-hero__label">Schedule Your Visit</p>
          <h1 className="page-hero__title">Book Now</h1>
          <div className="page-hero__divider" />
        </div>
      </section>

      {/* Embedded Square Booking */}
      <section className="book__embed-section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Online Scheduling</p>
          <h2 className="section-title">Schedule Your Appointment</h2>
          <div className="section-divider" />
          <p className="book__embed-intro">
            Browse available services and book your appointment directly below.
          </p>

          <div className="book__embed-wrapper">
            {!iframeLoaded && !iframeError && (
              <div className="book__embed-loading">
                <Calendar size={32} />
                <p>Loading booking system...</p>
              </div>
            )}

            {iframeError ? (
              <div className="book__embed-fallback">
                <Calendar size={40} />
                <h3>Book Online</h3>
                <p>Our booking system is available on its own page.</p>
                <a
                  href="https://luxe-body-by-lucy.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Open Booking Page <ExternalLink size={14} style={{ marginLeft: 8 }} />
                </a>
              </div>
            ) : (
              <iframe
                title="Book an appointment at Luxe Body By Lucy"
                src="https://luxe-body-by-lucy.square.site/"
                className={`book__embed-iframe ${iframeLoaded ? 'book__embed-iframe--loaded' : ''}`}
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
                allow="payment"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              />
            )}
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods + Info */}
      <section className="book__content">
        <div className="container">
          <div className="book__grid">
            {/* Contact Methods */}
            <div className="book__options">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Other Ways to Book</h2>
              <div className="book__divider" />
              <p className="book__intro">
                Prefer to reach out directly? We're happy to help you schedule over the phone or through social media.
              </p>

              <div className="book__methods">
                <a href="tel:9173791771" className="book__method-card">
                  <Phone size={24} />
                  <div>
                    <h3>Call Us</h3>
                    <p>(917) 379-1771</p>
                    <span>Speak directly with Lucila</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/luxebodybylucyofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book__method-card"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <div>
                    <h3>DM on Instagram</h3>
                    <p>@luxebodybylucyofficial</p>
                    <span>Send us a message anytime</span>
                  </div>
                </a>
              </div>

              <div className="book__note">
                <p>
                  <strong>First time?</strong> We recommend booking a consultation so Lucila can assess
                  your goals and create a personalized treatment plan just for you.
                </p>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="book__sidebar">
              <div className="book__info-card">
                <h3>Visit Us</h3>
                <div className="book__info-item">
                  <MapPin size={18} />
                  <div>
                    <p>62-99 Forest Avenue</p>
                    <p>Ridgewood, Queens, NY 11385</p>
                  </div>
                </div>

                <div className="book__info-item">
                  <Phone size={18} />
                  <a href="tel:9173791771">(917) 379-1771</a>
                </div>

                <h3 style={{ marginTop: '32px' }}>Business Hours</h3>
                <div className="book__hours">
                  <Clock size={18} />
                  <div className="book__hours-grid">
                    <span>Monday</span><span>9:30 AM - 8:00 PM</span>
                    <span>Tuesday</span><span>9:30 AM - 8:00 PM</span>
                    <span>Wednesday</span><span>9:30 AM - 8:00 PM</span>
                    <span>Thursday</span><span className="closed">Closed</span>
                    <span>Friday</span><span>9:30 AM - 8:00 PM</span>
                    <span>Saturday</span><span>9:30 AM - 8:00 PM</span>
                    <span>Sunday</span><span className="closed">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="book__map">
                <iframe
                  title="Luxe Body By Lucy location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.0!2d-73.905!3d40.711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s62-99+Forest+Ave+Ridgewood+NY+11385!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
