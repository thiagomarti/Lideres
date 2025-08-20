import React from 'react'
import { Heart, Users, Star } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Curso de Líderes</span>
            </h1>
            <h2 className="hero-school">Colegio Siglo 21</h2>
            <p className="hero-description">
 Un proyecto de estudiantes de secundaria orientado a promover actividades solidarias, acompañamiento en campamentos y apoyo a la comunidad, fomentando liderazgo y compañerismo.
            </p>
            <div className="hero-icons">
              <div className="icon-item">
                <Heart className="icon" />
                <span>Solidaridad</span>
              </div>
              <div className="icon-item">
                <Users className="icon" />
                <span>Compañerismo</span>
              </div>
              <div className="icon-item">
                <Star className="icon" />
                <span>Excelencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
