import React from 'react'
import './ServiceTiles.css'

function ServiceTiles() {
  const services = [
    {
      emoji: '🪔',
      title: 'Sanskaar Samagri',
      description: 'Curated pooja kits for every occasion, infused with spiritual essence.'
    },
    {
      emoji: '🙏',
      title: 'Purohit Seva',
      description: 'Verified pandit booking with detailed bios, ratings, and divine guidance.'
    },
    {
      emoji: '📜',
      title: 'Rasmon ka Gyaan',
      description: 'Downloadable guides in Hinglish, unlocking ancient wisdom for modern life.'
    }
  ]

  return (
    <section className="service-tiles">
      {services.map((service, index) => (
        <div key={index} className="tile">
          <span role="img" aria-label={service.title}>{service.emoji}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  )
}

export default ServiceTiles
