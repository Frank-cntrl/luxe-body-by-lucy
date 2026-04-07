import { Link } from 'react-router-dom'
import { Award, Heart, Users, Sparkles } from 'lucide-react'
import './About.css'

const values = [
  {
    icon: <Heart size={28} />,
    title: 'Your Body Is a Temple',
    desc: 'We believe every person deserves to feel confident and beautiful. Our treatments honor and enhance your natural beauty.',
  },
  {
    icon: <Award size={28} />,
    title: 'Professional Excellence',
    desc: 'With medical-grade equipment and certified expertise, we deliver safe, effective treatments every time.',
  },
  {
    icon: <Users size={28} />,
    title: 'Personalized Approach',
    desc: 'No two bodies are alike. Lucila provides personalized suggestions for lifestyle changes before and after treatments to help you achieve maximum results.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Affordable Luxury',
    desc: 'We are dedicated to providing affordable, noninvasive treatments to bring out your natural beauty and help you achieve the best body.',
  },
]

export default function About() {
  return (
    <div className="about">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="page-hero__label">Get to Know Us</p>
          <h1 className="page-hero__title">About Us</h1>
          <div className="page-hero__divider" />
        </div>
      </section>

      {/* Story Section */}
      <section className="about__story">
        <div className="container">
          <div className="about__story-inner">
            <div className="about__story-image">
              <div className="about__story-image-placeholder">
                <Sparkles size={48} />
              </div>
              <div className="about__story-image-frame" />
            </div>
            <div className="about__story-content">
              <p className="section-label">Our Story</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Meet Lucy</h2>
              <div className="about__divider" />
              <p>
                Luxe Body By Lucy was founded in January 2022 by <strong>Lucila Müller</strong>,
                and the journey began right here in Ridgewood, Queens, NY.
              </p>
              <p>
                With over <strong>7 years of experience</strong> working as a Certified Patient Care
                Technician and Medical Assistant, Lucila brings a wealth of medical knowledge and
                hands-on expertise to every treatment she performs.
              </p>
              <p>
                Her inspiration stems from a simple yet profound belief: <em>our body is a temple
                and deserves the utmost care and respect.</em> As a Licensed Esthetician and Certified
                Body Sculptor, Lucila is passionate about helping every client become the most
                confident version of themselves.
              </p>
              <p>
                This female-owned and operated spa is dedicated to providing affordable, noninvasive
                treatments that bring out your natural beauty. Lucila personally offers suggestions
                for lifestyle changes before and after treatments to help you achieve maximum results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about__values">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Why Choose Us</p>
          <h2 className="section-title">Our Values</h2>
          <div className="section-divider" />
          <div className="about__values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="about__credentials">
        <div className="container">
          <div className="about__credentials-inner">
            <h2>Credentials & Certifications</h2>
            <div className="about__credentials-list">
              <div className="credential-item">
                <Award size={24} />
                <span>Licensed Esthetician</span>
              </div>
              <div className="credential-item">
                <Award size={24} />
                <span>Certified Body Sculptor</span>
              </div>
              <div className="credential-item">
                <Award size={24} />
                <span>Certified Patient Care Technician</span>
              </div>
              <div className="credential-item">
                <Award size={24} />
                <span>Certified Medical Assistant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Begin Your Transformation</h2>
          <p style={{ color: 'var(--text-medium)', maxWidth: '500px', margin: '0 auto 32px', fontSize: '15px' }}>
            Ready to experience the Luxe difference? Book a consultation and let us create
            a personalized treatment plan just for you.
          </p>
          <Link to="/book" className="btn btn-gold">Book Your Consultation</Link>
        </div>
      </section>
    </div>
  )
}
