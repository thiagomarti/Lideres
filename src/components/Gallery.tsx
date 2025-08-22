import React, { useState } from 'react'
import './Gallery.css'

type Subcategory = {
  title: string
  description: string
  images: string[]
}

type Category = {
  title: string
  description: string
  subcategories: Subcategory[]
}

const actions: Category[] = [
  {
    title: 'Campamentos',
    description: 'Vivencias y aprendizajes en la naturaleza.',
    subcategories: [
      {
        title: 'Campamento de verano',
        description: 'Actividades al aire libre.',
        images: ['camp1.jpg', 'camp2.jpg']
      },
      {
        title: 'Campamento de invierno',
        description: 'Con fogones y caminatas.',
        images: ['campInv1.jpg', 'campInv2.jpg']
      }
    ]
  },
  {
    title: 'Actividades Solidarias',
    description: 'Vivencias y aprendizajes en la naturaleza.',
    subcategories: [
      {
        title: 'Centros Educativos y Recreativos "Hora Libre"',
        description: 'Con el Curso de Líderes visitamos el Centro Educativo y Recreativo Hora Libre, donde realizamos tareas de pintura y embellecimiento del predio. Esta actividad fue posible gracias a la pintura provista por la campaña Pinta tu Barrio de Colorshop, que nos permitió aportar nuestro granito de arena para mejorar el espacio comunitario.',
        images: ['/img/solidaria1.jpeg', '/img/solidaria2.jpeg', '/img/solidaria3.jpeg', '/img/solidaria4.jpeg', '/img/solidaria5.jpeg', '/img/solidaria6.jpeg', '/img/solidaria7.jpeg', '/img/solidaria8.jpeg', '/img/solidaria9.jpeg', '/img/solidaria10.jpeg', '/img/solidaria11.jpeg', '/img/solidaria12.jpeg', '/img/solidaria13.jpeg', '/img/solidaria14.jpeg', '/img/solidaria15.jpeg', '/img/solidaria16.jpeg', '/img/solidaria17.jpeg']
      },
    ]
  },
  {
    title: 'Jornadas con adultos mayores',
    description: 'Vivencias y aprendizajes en la naturaleza.',
    subcategories: [
      {
        title: 'Campamento de verano',
        description: 'Actividades al aire libre.',
        images: ['camp1.jpg', 'camp2.jpg']
      },
      {
        title: 'Campamento de invierno',
        description: 'Con fogones y caminatas.',
        images: ['campInv1.jpg', 'campInv2.jpg']
      }
    ]
  },
  {
    title: 'Campamentos de líderes',
    description: 'Vivencias y aprendizajes en la naturaleza.',
    subcategories: [
      {
        title: 'Campamento en Mar Azul',
        description: 'Campamento de líderes en Mar Azul.',
        images: ['/img/marazul6.jpeg', '/img/marazul2.jpeg', '/img/marazul3.jpeg', '/img/marazul4.jpeg', '/img/marazul5.jpeg', '/img/marazul1.jpeg', '/img/marazul7.jpeg', '/img/marazul8.jpeg', '/img/marazul9.jpeg'],
      },
    ]
  },
]

type SelectedGallery = {
  subcategory: Subcategory
  currentIndex: number
} | null

const Gallery = () => {
  const [selected, setSelected] = useState<SelectedGallery>(null)

  return (
    <section id="galeria" className="gallery section-padding">
      <div className="container">
        <div className="gallery-header text-center mb-12">
          <h2 className="section-title">Momentos destacados</h2>
        </div>

        {actions.map((category, idx) => (
          <div key={idx} className="gallery-section">
            <h3 className="gallery-section-title">{category.title}</h3>
            <div className="gallery-subcategories">
              {category.subcategories.map((sub, i) => (
                <div
                  key={i}
                  className="gallery-card"
                  onClick={() =>
                    setSelected({
                      subcategory: sub,
                      currentIndex: 0
                    })
                  }
                >
                  <img
                    src={sub.images[0]}
                    alt={sub.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-title">{sub.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img
                src={selected.subcategory.images[selected.currentIndex]}
                alt={selected.subcategory.title}
              />
              <div className="modal-nav">
                <button
                  onClick={() =>
                    setSelected((prev) =>
                      prev
                        ? {
                          ...prev,
                          currentIndex:
                            (prev.currentIndex - 1 + prev.subcategory.images.length) %
                            prev.subcategory.images.length
                        }
                        : prev
                    )
                  }
                >
                  ◀
                </button>
                <button
                  onClick={() =>
                    setSelected((prev) =>
                      prev
                        ? {
                          ...prev,
                          currentIndex: (prev.currentIndex + 1) % prev.subcategory.images.length
                        }
                        : prev
                    )
                  }
                >
                  ▶
                </button>
              </div>
            </div>
            <div className="modal-right">
              <h2>{selected.subcategory.title}</h2>
              <p>{selected.subcategory.description}</p>
            </div>
            <button className="modal-close" onClick={() => setSelected(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
