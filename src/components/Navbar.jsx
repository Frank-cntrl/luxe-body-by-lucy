import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-text">Luxe Body</span>
          <span className="navbar__logo-accent">by Lucy</span>
        </Link>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/treatments">Treatments</NavLink>
          <NavLink to="/photos">Photos</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/book" className="navbar__book-link">Book Now</NavLink>
          <a href="tel:9173791771" className="navbar__phone-mobile">
            <Phone size={14} /> (917) 379-1771
          </a>
        </div>

        <div className="navbar__right">
          <a href="tel:9173791771" className="navbar__phone">
            <Phone size={14} /> (917) 379-1771
          </a>
          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
