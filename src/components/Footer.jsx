import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-text">Luxe Body</span>
            <span className="footer__logo-accent">by Lucy</span>
          </div>
          <p className="footer__tagline">
            Noninvasive Facial Esthetics<br />& Body Contour
          </p>
          <div className="footer__social">
            <a href="https://www.instagram.com/luxebodybylucyofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/luxebodybylucy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__nav">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/book">Book Now</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <div className="footer__info-item">
            <MapPin size={16} />
            <span>62-99 Forest Avenue<br />Ridgewood, Queens, NY 11385</span>
          </div>
          <div className="footer__info-item">
            <Phone size={16} />
            <a href="tel:9173791771">(917) 379-1771</a>
          </div>
        </div>

        <div className="footer__hours">
          <h4>Hours</h4>
          <div className="footer__hours-grid">
            <span>Mon - Wed</span><span>9:30 AM - 8:00 PM</span>
            <span>Thursday</span><span>Closed</span>
            <span>Fri - Sat</span><span>9:30 AM - 8:00 PM</span>
            <span>Sunday</span><span>Closed</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Luxe Body By Lucy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
