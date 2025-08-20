import React from 'react'
import { Target, Users, Heart, UserStar } from 'lucide-react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: <Target className="feature-icon" />,
      title: "Propósito Claro",
      description: "Formar jóvenes comprometidos con el servicio a la comunidad y el crecimiento personal."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Trabajo en Equipo",
      description: "Estudiantes de 4°, 5° y 6° de secundaria trabajando juntos por objetivos comunes."
    },
    {
      icon: <Heart className="feature-icon" />,
      title: "Impacto Social",
      description: "Actividades que generan un cambio positivo en nuestra comunidad educativa y social."
    },
    {
      icon: <UserStar className="feature-icon" />,
      title: "Desarrollo Personal",
      description: "Un espacio para reflexionar, crecer y desarrollar habilidades de liderazgo."
    }
  ]

  return (
    <section id="sobre-nosotros" className="about section-padding">
      <div className="container">
        <div className="about-header text-center mb-16">
          <h2 className="section-title">¿Qué es el Curso de Líderes?</h2>
          <p className="section-subtitle">
            Conectamos servicio comunitario, liderazgo y crecimiento personal en un solo proyecto.
          </p>
        </div>

        {/* Features cards */}
        <div className="features-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              {feature.icon}
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
