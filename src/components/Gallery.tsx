import React from 'react'
import './Gallery.css'

const actions = [
    {
        title: 'Campamentos',
        images: [
            'https://i0.wp.com/scouts.org.ar/wp-content/uploads/2022/04/87119290_3543659289009243_8495871251984678912_n.jpg?fit=1280%2C853&ssl=1',
            'https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2015/10/06/b9aa9e04f92154a34c074f76fbc84dadd7790970.jpg?itok=-TlhAeOu',
            'https://i.ytimg.com/vi/NUu3nH71Mg8/sddefault.jpg',
            'https://i.ytimg.com/vi/NUu3nH71Mg8/sddefault.jpg',
            'https://i.ytimg.com/vi/NUu3nH71Mg8/sddefault.jpg',
            'https://i.ytimg.com/vi/NUu3nH71Mg8/sddefault.jpg',
            'https://i.ytimg.com/vi/NUu3nH71Mg8/sddefault.jpg',
        ],
    },
    {
        title: 'Actividades Solidarias',
        images: [
            '/images/solidarias1.jpg',
            '/images/solidarias2.jpg',
            '/images/solidarias3.jpg',
        ],
    },
    {
        title: 'Jornada de Adultos Mayores',
        images: [
            '/images/adultos1.jpg',
            '/images/adultos2.jpg',
            '/images/adultos3.jpg',
        ],
    },
    {
        title: 'Campamento de Líderes',
        images: [
            '/images/lideres1.jpg',
            '/images/lideres2.jpg',
            '/images/lideres3.jpg',
        ],
    },
]

const Gallery = () => {
    return (
        <section id="galeria" className="gallery section-padding">
            <div className="container">
                <div className="gallery-header text-center mb-12">
                    <h2 className="section-title">Momentos destacados</h2>
                </div>

                {actions.map((action, idx) => (
                    <div key={idx} className="gallery-section">
                        <h3 className="gallery-section-title">{action.title}</h3>
                        <div className="gallery-section-scroll">
                            {action.images.map((img, i) => (
                                <div key={i} className="gallery-card">
                                    <img src={img} alt={`${action.title} ${i + 1}`} className="gallery-image" />
                                    <div className="gallery-overlay">
                                        <span className="gallery-title">{action.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
