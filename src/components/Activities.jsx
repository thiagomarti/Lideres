import React from 'react'
import { 
  Heart, 
  Laptop, 
  Tent, 
  Gamepad2, 
  Mountain, 
  Users 
} from 'lucide-react'
import './Activities.css'

const Activities = () => {
  const activities = [
    
    {
      icon: <Tent className="activity-icon" />,
      title: "Acompañamiento en Campamentos",
      description: "Nuetra actividad principal es ayudar en campamentos de 1° de primaria a 3° de secundaria, aportando energía juvenil y compañía.",
      color: "#c3ce06"
    },
    {
      icon: <Heart className="activity-icon" />,
      title: "Actividades Solidarias",
      description: "Salidas para ayudar en comedores comunitarios, pintar espacios públicos y compartir momentos especiales con la comunidad.",
      color: "#e0216c"
    },
    {
      icon: <Laptop className="activity-icon" />,
      title: "Apoyo a Adultos Mayores",
      description: "Jornadas en La Torcaza enseñando a adultos mayores el uso de nuevas tecnologías.",
      color: "#3eb9ef"
    },
    {
      icon: <Gamepad2 className="activity-icon" />,
      title: "Día del Niño",
      description: "Jornadas especiales en el colegio con juegos y actividades para que los estudiantes de primaria disfruten su día.",
      color: "#f2aa11"
    },
    {
      icon: <Mountain className="activity-icon" />,
      title: "Campamento de Líderes",
      description: "Al final del año, nuestro propio campamento exclusivo para fortalecer vínculos y reflexionar sobre las experiencias vividas.",
      color: "#604097"
    },
  ]

  return (
    <section id="actividades" className="activities section-padding">
      <div className="container">
        <div className="activities-header text-center mb-16">
          <h2 className="section-title">Nuestras Actividades</h2>
          <p className="section-subtitle">
            Estas son las actividades que definen nuestro proyecto y nos permiten 
            crecer mientras ayudamos a otros.
          </p>
        </div>

        <div className="activities-grid grid grid-3">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card" style={{'--accent-color': activity.color}}>
              <div className="activity-icon-wrapper">
                {activity.icon}
              </div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities