import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      // Esperamos a que cargue la página principal antes de hacer scroll
      setTimeout(() => {
        const section = document.getElementById(id)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: 'inicio', label: 'Inicio', external: true, category: "nav-link link1" },
    { href: 'sobre-nosotros', label: 'Sobre Nosotros', external: true, category: "nav-link link2" },
    { href: 'actividades', label: 'Actividades', external: true, category: "nav-link link3" },
    { href: '/galeria', label: 'Galería', external: false, category: "nav-link link4" }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src="/img/siglo.png"
              alt=""
              className="logo-image2"
            />
            <img
              src="/img/logo.PNG"
              alt=""
              className="logo-image"
            />
            <div className="logo-text">
              <h2>Curso de Líderes</h2>
              <span>Colegio Siglo 21</span>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) =>
              item.external ? (
                <button
                  key={item.href}
                  className={item.category}
                  onClick={() => {
                    scrollToSection(item.href)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={item.category}
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
