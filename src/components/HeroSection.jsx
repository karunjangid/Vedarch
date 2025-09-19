import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const heroData = [
  {
    image: 'https://wallpapercave.com/wp/wp4331102.jpg',
    tagline: 'Embark on a journey of spiritual enlightenment with Vedarch',
    mantra: 'ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः'
  },
  {
    image: 'https://i.ytimg.com/vi/79FWYfwBUiE/maxresdefault.jpg',
    tagline: 'Experience the divine through authentic pooja rituals',
    mantra: 'सत्यमेव जयते'
  },
  {
    image: 'https://i.ytimg.com/vi/gM-CPtKqHDc/maxresdefault.jpg',
    tagline: 'Connect with the sacred essence of life',
    mantra: 'वसुधैव कुटुम्बकम्'
  }
]

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length)
    }, 30000) // change every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroData[currentIndex].image})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="spiritual-elements">
          <span className="om-symbol">ॐ</span>
          <span className="lotus-symbol">🪷</span>
        </div>
        <p className="hero-text">{heroData[currentIndex].tagline}</p>
        <p className="hero-mantra">{heroData[currentIndex].mantra}</p>
        <div className="cta-buttons">
          <button className="explore-btn">
            <span className="btn-icon">🛍️</span>
            <span className="btn-text">Explore Sanskaar Samagri</span>
          </button>
          <button className="book-btn">
            <span className="btn-icon">🙏</span>
            <span className="btn-text">Book Purohit Seva</span>
          </button>
          <button className="download-btn">
            <span className="btn-icon">📜</span>
            <span className="btn-text">Download Rasmon ka Gyaan</span>
          </button>
        </div>
        <div className="hero-indicators">
          {heroData.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
