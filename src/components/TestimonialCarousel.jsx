import React, { useState } from 'react'
import './TestimonialCarousel.css'

function TestimonialCarousel() {
  const testimonials = [
    {
      text: "Vedarch ne mere griha pravesh ko sach mein pavitra bana diya. Om shanti!",
      author: "Renu Sharma, Jaipur"
    },
    {
      text: "Pandit ji time pe aaye, sab kuch vidhivat hua. Vedarch is pure trust. 🙏",
      author: "Rajeev Mehta, Delhi"
    },
    {
      text: "Rasmon ka gyaan ne mujhe ancient wisdom se connect kar diya. Divine experience!",
      author: "Priya Singh, Mumbai"
    },
    {
      text: "Sanskaar samagri ki quality outstanding hai. Spiritual journey ka perfect start.",
      author: "Amit Kumar, Bangalore"
    }
  ]

  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const goToSlide = (index) => setCurrent(index)

  return (
    <section className="testimonial-carousel">
        <button onClick={prev} className="nav-btn">‹</button>
        <div className="testimonial">
          <div className="quote-icon">“</div>
          <p>{testimonials[current].text}</p>
          <cite>{testimonials[current].author}</cite>
        </div>
        <button onClick={next} className="nav-btn">›</button>
    </section>
  )
}

export default TestimonialCarousel
