import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Treatments.css'

const faceTreatments = [
  {
    name: 'Personalized Facials',
    desc: 'Customized facial treatments tailored to your specific skin type and concerns. Deep cleansing, exfoliation, and nourishment for radiant, healthy skin.',
    duration: '60 min',
  },
  {
    name: 'Hydrafacial',
    desc: 'Multi-step treatment that cleanses, exfoliates, extracts, and hydrates. Uses patented technology to deliver moisturizing serums deep into your skin.',
    duration: '45 min',
  },
  {
    name: 'Cryo-Skin Facial',
    desc: 'Cold therapy facial that tightens skin, reduces pore size, and boosts collagen production for a youthful, lifted appearance.',
    duration: '30 min',
  },
  {
    name: 'Laser Rejuvenating Facial',
    desc: 'Advanced laser technology to stimulate collagen production, reduce fine lines, and improve skin texture and tone.',
    duration: '45 min',
  },
  {
    name: 'Radio Frequency Facial',
    desc: 'Non-invasive skin tightening using radio frequency energy to stimulate collagen and elastin for firmer, smoother skin.',
    duration: '40 min',
  },
]

const bodyTreatments = [
  {
    name: 'Laser Lipolysis',
    desc: 'Noninvasive fat reduction that uses laser energy to liquefy and break down stubborn fat deposits without pain, surgery, or downtime.',
    duration: '45 min',
  },
  {
    name: 'Ultrasonic Cavitation',
    desc: 'Advanced ultrasound technology that targets and destroys fat cells in specific areas. The body naturally eliminates the released fat over time.',
    duration: '40 min',
  },
  {
    name: 'EMS Sculpt',
    desc: 'Electromagnetic muscle stimulation that triggers powerful contractions to tone, strengthen, and build muscle while burning calories.',
    duration: '30 min',
  },
  {
    name: 'Infrared Sauna Wrap',
    desc: 'Full-body infrared heating therapy that promotes detoxification, increases circulation, relieves muscle tension, and supports weight loss.',
    duration: '45 min',
  },
  {
    name: 'Vacuum Butt Lift',
    desc: 'Noninvasive butt enhancement using vacuum cupping therapy for a naturally lifted, rounder, and more sculpted appearance.',
    duration: '45 min',
  },
  {
    name: 'Wood Massage Therapy',
    desc: 'Traditional body contouring technique using specially designed wooden tools to reduce cellulite, improve lymphatic drainage, and sculpt the body.',
    duration: '60 min',
  },
  {
    name: 'Vacuum Cellulite Treatment',
    desc: 'Targeted vacuum therapy that breaks down cellulite, improves skin texture, and promotes lymphatic drainage for smoother skin.',
    duration: '40 min',
  },
  {
    name: 'Endospheres Therapy',
    desc: 'Innovative compressive microvibration technology for cellulite reduction, body contouring, and improved circulation.',
    duration: '45 min',
  },
  {
    name: 'Body Scrub & Wrap',
    desc: 'Luxurious exfoliation followed by a nourishing body wrap to detoxify, hydrate, and leave your skin silky smooth.',
    duration: '60 min',
  },
]

const additionalServices = [
  {
    name: 'Laser Hair Removal',
    desc: 'Permanent hair reduction using advanced laser technology for smooth, hair-free skin on any area of the body.',
    duration: 'Varies',
  },
  {
    name: 'Laser Tattoo Removal',
    desc: 'Safe and effective tattoo removal using specialized laser technology that breaks down ink particles gradually.',
    duration: 'Varies',
  },
  {
    name: 'Teeth Whitening',
    desc: 'Professional teeth whitening treatment for a brighter, more confident smile in a single session.',
    duration: '45 min',
  },
]

const categories = [
  { key: 'all', label: 'All Treatments' },
  { key: 'face', label: 'Face Treatments' },
  { key: 'body', label: 'Body Treatments' },
  { key: 'additional', label: 'Additional Services' },
]

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState('all')

  const showFace = activeCategory === 'all' || activeCategory === 'face'
  const showBody = activeCategory === 'all' || activeCategory === 'body'
  const showAdditional = activeCategory === 'all' || activeCategory === 'additional'

  return (
    <div className="treatments">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="page-hero__label">Our Services</p>
          <h1 className="page-hero__title">Treatments</h1>
          <div className="page-hero__divider" />
        </div>
      </section>

      {/* Filter */}
      <section className="treatments__filter">
        <div className="container">
          <div className="treatments__filter-bar">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`treatments__filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Lists */}
      <section className="treatments__list">
        <div className="container">
          {showFace && (
            <div className="treatments__category">
              <h2 className="treatments__category-title">Face Treatments</h2>
              <div className="treatments__category-divider" />
              <div className="treatments__grid">
                {faceTreatments.map((t, i) => (
                  <div key={i} className="treatment-card">
                    <div className="treatment-card__header">
                      <h3>{t.name}</h3>
                      <span className="treatment-card__duration">{t.duration}</span>
                    </div>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showBody && (
            <div className="treatments__category">
              <h2 className="treatments__category-title">Body Treatments</h2>
              <div className="treatments__category-divider" />
              <div className="treatments__grid">
                {bodyTreatments.map((t, i) => (
                  <div key={i} className="treatment-card">
                    <div className="treatment-card__header">
                      <h3>{t.name}</h3>
                      <span className="treatment-card__duration">{t.duration}</span>
                    </div>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showAdditional && (
            <div className="treatments__category">
              <h2 className="treatments__category-title">Additional Services</h2>
              <div className="treatments__category-divider" />
              <div className="treatments__grid">
                {additionalServices.map((t, i) => (
                  <div key={i} className="treatment-card">
                    <div className="treatment-card__header">
                      <h3>{t.name}</h3>
                      <span className="treatment-card__duration">{t.duration}</span>
                    </div>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="treatments__cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Not Sure Which Treatment Is Right for You?</h2>
          <p style={{ color: 'var(--text-medium)', maxWidth: '500px', margin: '0 auto 32px', fontSize: '15px' }}>
            Book a free consultation and Lucila will create a personalized treatment plan based on your goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn btn-gold">Book Consultation</Link>
            <a href="tel:9173791771" className="btn btn-outline">Call (917) 379-1771</a>
          </div>
        </div>
      </section>
    </div>
  )
}
