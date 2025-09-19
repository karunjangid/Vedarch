import React, { useState, useEffect } from 'react'
import './PanditBooking.css'

function PanditBooking() {
  const pandits = [
    {
      name: 'Pandit Sharma',
      expertise: 'Griha Pravesh',
      rating: 4.8,
      image: 'https://hindupriestketuljoshi.co.uk/wp-content/uploads/2021/02/Wedding-priest-Hindu-wedding-priest-hindu-priest-in-uk-3-1.jpeg',
      description: 'Experienced in housewarming ceremonies with 15+ years of expertise.',
      languages: ['Hindi', 'Sanskrit'],
      price: '₹2,500'
    },
    {
      name: 'Pandit Gupta',
      expertise: 'Wedding Rituals',
      rating: 4.9,
      image: 'https://www.tirumala.org/Admin/TTD%20Trust%20Board%20Members/Trust%20Member202111101604525564.jpg',
      description: 'Specializes in traditional wedding ceremonies and Vedic rituals.',
      languages: ['Hindi', 'English'],
      price: '₹5,000'
    },
    {
      name: 'Pandit Verma',
      expertise: 'Baby Ceremonies',
      rating: 4.7,
      image: 'https://tse3.mm.bing.net/th/id/OIP.MnnPpk3nkFzDeDXH9lKSgAHaH_?w=927&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Dedicated to naming ceremonies and baby blessing rituals.',
      languages: ['Hindi', 'Bengali'],
      price: '₹1,800'
    },
    {
      name: 'Pandit Joshi',
      expertise: 'Festival Pooja',
      rating: 4.6,
      image: 'https://tse1.mm.bing.net/th/id/OIP.8jQfmulQxcLlX7nrA7TQQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Expert in all major festival pujas and special ceremonies.',
      languages: ['Hindi', 'Gujarati'],
      price: '₹3,200'
    }
  ]

  const [current, setCurrent] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [filterExpertise, setFilterExpertise] = useState('All')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pandits.length)
    }, 5000) // auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((current + 1) % pandits.length)
  const prev = () => setCurrent((current - 1 + pandits.length) % pandits.length)

  const filteredPandits = filterExpertise === 'All' ? pandits : pandits.filter(p => p.expertise === filterExpertise)

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select date and time for booking.')
      return
    }
    alert(`Booking confirmed for ${pandits[current].name} on ${selectedDate} at ${selectedTime}`)
  }

  return (
    <section className="pandit-booking" id="purohit">
      <h2>Purohit Seva</h2>
      <div className="filters">
        <select value={filterExpertise} onChange={(e) => setFilterExpertise(e.target.value)}>
          <option value="All">All Expertise</option>
          <option value="Griha Pravesh">Griha Pravesh</option>
          <option value="Wedding Rituals">Wedding Rituals</option>
          <option value="Baby Ceremonies">Baby Ceremonies</option>
          <option value="Festival Pooja">Festival Pooja</option>
        </select>
      </div>
      <div className="pandit-carousel">
        <button onClick={prev} className="nav-btn">‹</button>
        <div className="pandit-card">
          <img src={filteredPandits[current % filteredPandits.length].image} alt={filteredPandits[current % filteredPandits.length].name} />
          <h3>{filteredPandits[current % filteredPandits.length].name}</h3>
          <p className="expertise">{filteredPandits[current % filteredPandits.length].expertise}</p>
          <p className="description">{filteredPandits[current % filteredPandits.length].description}</p>
          <p className="languages">Languages: {filteredPandits[current % filteredPandits.length].languages.join(', ')}</p>
          <p className="rating">Rating: {filteredPandits[current % filteredPandits.length].rating} ⭐</p>
          <p className="price">Starting from {filteredPandits[current % filteredPandits.length].price}</p>
          <div className="booking-form">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
              <option value="">Select Time</option>
              <option value="Morning">Morning (6AM - 12PM)</option>
              <option value="Afternoon">Afternoon (12PM - 6PM)</option>
              <option value="Evening">Evening (6PM - 10PM)</option>
            </select>
          </div>
          <button className="book-now" onClick={handleBooking}>Book Now</button>
        </div>
        <button onClick={next} className="nav-btn">›</button>
      </div>
    </section>
  )
}

export default PanditBooking
