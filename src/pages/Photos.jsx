import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import './Photos.css'

const photos = [
  { id: 1, category: 'Space', alt: 'Treatment room setup' },
  { id: 2, category: 'Results', alt: 'Body contouring results' },
  { id: 3, category: 'Space', alt: 'Spa interior' },
  { id: 4, category: 'Treatments', alt: 'Laser lipolysis session' },
  { id: 5, category: 'Results', alt: 'Facial treatment results' },
  { id: 6, category: 'Treatments', alt: 'Ultrasonic cavitation' },
  { id: 7, category: 'Space', alt: 'Reception area' },
  { id: 8, category: 'Results', alt: 'Before and after body sculpting' },
  { id: 9, category: 'Treatments', alt: 'EMS sculpt session' },
]

const filterCategories = ['All', 'Space', 'Treatments', 'Results']

export default function Photos() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All'
    ? photos
    : photos.filter(p => p.category === activeFilter)

  return (
    <div className="photos">
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="page-hero__label">Gallery</p>
          <h1 className="page-hero__title">Photos</h1>
          <div className="page-hero__divider" />
        </div>
      </section>

      <section className="photos__content">
        <div className="container">
          <div className="photos__filter">
            {filterCategories.map(cat => (
              <button
                key={cat}
                className={`treatments__filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="photos__grid">
            {filtered.map(photo => (
              <div
                key={photo.id}
                className="photo-card"
                onClick={() => setLightbox(photo)}
              >
                <div className="photo-card__image">
                  <Sparkles size={32} />
                </div>
                <div className="photo-card__overlay">
                  <span>{photo.category}</span>
                  <p>{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="photos__note">
            Visit our <a href="https://www.instagram.com/luxebodybylucyofficial/" target="_blank" rel="noopener noreferrer">Instagram</a> for more photos and results.
          </p>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <div className="lightbox__image">
              <Sparkles size={48} />
            </div>
            <p className="lightbox__caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
