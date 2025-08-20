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
    { href: 'inicio', label: 'Inicio', external: true },
    { href: 'sobre-nosotros', label: 'Sobre Nosotros', external: true },
    { href: 'actividades', label: 'Actividades', external: true },
    { href: '/galeria', label: 'Galería', external: false }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
<div className="logo">
  <img
    src="../src/img/logo.PNG"
    alt="Logo del Curso de Líderes"
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
                  className="nav-link"
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
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
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
