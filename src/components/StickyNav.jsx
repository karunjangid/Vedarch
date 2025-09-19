import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './StickyNav.css'

function StickyNav() {
  const navigate = useNavigate()
  const [showEnglish, setShowEnglish] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglish(prev => !prev)
    }, 30000) // toggle every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleNavigation = (href) => {
    if (href === "#sanskaar") {
      navigate('/explore-products')
    } else {
      // For other sections, scroll to them
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const [tapCount, setTapCount] = React.useState(0)
  const [adminMode, setAdminMode] = React.useState(false)

  const handleAdminTap = () => {
    setTapCount(prev => prev + 1)
    if (tapCount + 1 === 6) {
      setTapCount(0)
      setAdminMode(true)
    }
  }

  const handleAdminLogin = (username, password) => {
    if (username === 'karun8619' && password === 'Karun@8619') {
      alert('Admin login successful')
      // Implement admin page navigation or modal here
      // For now, just close admin mode
      setAdminMode(false)
      // Navigate to marquee admin page or open modal
      // This is a placeholder, actual implementation needed
      alert('Navigate to Marquee Admin Page')
    } else {
      alert('Invalid admin credentials')
    }
  }

  const menuItems = showEnglish
    ? [
        { href: "#sanskaar", text: "Explore Products", onClick: handleAdminTap },
        { href: "#purohit", text: "Divine Guidance" },
        { href: "#rasmon", text: "Eternal Wisdom" },
        { href: "#about", text: "Our Essence" },
        { href: "#contact", text: "Connect Spiritually" }
      ]
    : [
        { href: "#sanskaar", text: "समन्वेषण", onClick: handleAdminTap },
        { href: "#purohit", text: "दिव्य मार्गदर्शन" },
        { href: "#rasmon", text: "शाश्वत ज्ञान" },
        { href: "#about", text: "हमारी सार" },
        { href: "#contact", text: "आध्यात्मिक रूप से जुड़ें" }
      ]

  return (
    <nav className="sticky-nav">
      <div className="nav-logo">
        <span className="glyph">ॐ</span>
        <span className={`logo-text ${showEnglish ? 'fade-in' : 'fade-out'}`}>
          Vedarch
        </span>
        <span className={`logo-text ${showEnglish ? 'fade-out' : 'fade-in'}`}>
          वेदार्च
        </span>
      </div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} onClick={(e) => {
              e.preventDefault()
              if (item.onClick) item.onClick()
              handleNavigation(item.href)
            }}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default StickyNav
