import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-columns">
          {/* Columna izquierda */}
          <div className="footer-left">
            <h3 className="footer-title">Colegio Siglo 21</h3>
            <p className="footer-description">
              Curso de Líderes - Proyecto educativo de formación en liderazgo y servicio comunitario.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="footer-right">
            <div className="footer-contact">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>José María Paz 2667, Ituzaingó, Zona Oeste, Buenos Aires</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>info@siglo21.edu.ar</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>11 4621-0616</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Colegio Siglo 21 | Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
