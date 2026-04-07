import { Link } from 'react-router-dom'
import { Sparkles, Shield, Heart, Star, ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import './Home.css'

const highlights = [
  {
    icon: <Sparkles size={28} />,
    title: 'Noninvasive Treatments',
    desc: 'Advanced body sculpting and facial esthetics without surgery or downtime.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Licensed & Certified',
    desc: 'Licensed Esthetician and Certified Body Sculptor with years of medical experience.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Personalized Care',
    desc: 'Every treatment plan is customized to your unique body and beauty goals.',
  },
  {
    icon: <Star size={28} />,
    title: '5-Star Rated',
    desc: 'Trusted by hundreds of clients in Queens with outstanding reviews.',
  },
]

const popularServices = [
  {
    name: 'Laser Lipolysis',
    desc: 'Noninvasive fat reduction that liquefies stubborn fat deposits without pain or surgery.',
    category: 'Body',
  },
  {
    name: 'Ultrasonic Cavitation',
    desc: 'Advanced ultrasound technology to target and reduce stubborn fat in specific areas.',
    category: 'Body',
  },
  {
    name: 'Hydrafacial',
    desc: 'Deep cleansing, exfoliation, and hydration for glowing, rejuvenated skin.',
    category: 'Face',
  },
  {
    name: 'EMS Sculpt',
    desc: 'Electromagnetic muscle stimulation to tone, strengthen, and burn calories.',
    category: 'Body',
  },
  {
    name: 'Vacuum Butt Lift',
    desc: 'Noninvasive butt enhancement using vacuum therapy for a lifted, sculpted look.',
    category: 'Body',
  },
  {
    name: 'Cryo-Skin Treatment',
    desc: 'Cold therapy to tighten skin, reduce cellulite, and contour the body.',
    category: 'Body',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <p className="hero__pre">Welcome to</p>
          <h1 className="hero__title">Luxe Body By Lucy</h1>
          <div className="hero__divider" />
          <p className="hero__subtitle">
            Noninvasive Facial Esthetics & Body Contour
          </p>
          <p className="hero__location">Ridgewood, Queens NY</p>
          <div className="hero__actions">
            <Link to="/book" className="btn btn-gold">Book Appointment</Link>
            <Link to="/treatments" className="btn btn-outline">View Treatments</Link>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span />
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="container">
          <div className="highlights__grid">
            {highlights.map((item, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview__inner">
            <div className="about-preview__image">
              <div className="about-preview__image-placeholder">
                <Sparkles size={48} />
              </div>
              <div className="about-preview__image-accent" />
            </div>
            <div className="about-preview__content">
              <p className="section-label">About Us</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Our Story</h2>
              <div className="about-preview__divider" />
              <p>
                Founded in January 2022 by Lucila Müller, Luxe Body By Lucy was born from a simple
                yet profound belief: <em>our body is a temple and deserves the utmost care and respect.</em>
              </p>
              <p>
                With over 7 years of experience as a Certified Patient Care Technician and Medical
                Assistant, Lucila brings a wealth of medical knowledge to every treatment. As a Licensed
                Esthetician and Certified Body Sculptor, she is dedicated to helping you become the most
                confident version of yourself.
              </p>
              <Link to="/about" className="btn btn-outline">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>What We Offer</p>
          <h2 className="section-title">Popular Treatments</h2>
          <div className="section-divider" />
          <div className="popular-services__grid">
            {popularServices.map((service, i) => (
              <div key={i} className="service-card">
                <span className="service-card__category">{service.category}</span>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <Link to="/treatments" className="service-card__link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/treatments" className="btn btn-gold">View All Treatments</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__overlay" />
        <div className="container cta-banner__content">
          <h2>Ready to Transform Your Body?</h2>
          <p>Book your consultation today and take the first step towards the confident you.</p>
          <div className="cta-banner__actions">
            <Link to="/book" className="btn btn-gold">Book Now</Link>
            <a href="tel:9173791771" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Call (917) 379-1771
            </a>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="info-bar">
        <div className="container">
          <div className="info-bar__grid">
            <div className="info-bar__item">
              <MapPin size={20} />
              <div>
                <strong>Visit Us</strong>
                <span>62-99 Forest Ave, Ridgewood, Queens NY</span>
              </div>
            </div>
            <div className="info-bar__item">
              <Clock size={20} />
              <div>
                <strong>Open Hours</strong>
                <span>Mon-Wed, Fri-Sat: 9:30 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="info-bar__item">
              <Phone size={20} />
              <div>
                <strong>Call Us</strong>
                <a href="tel:9173791771">(917) 379-1771</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
