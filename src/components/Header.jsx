import React, { useState } from 'react'
import AdminLogin from './AdminLogin'
import './Header.css'

function Header() {
  const [tapCount, setTapCount] = useState(0)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
  const [marqueeContent, setMarqueeContent] = useState('🌟 Unlock Shubh Energy – Get ₹108 off your first Vedarch ritual kit! 🪔 Sacred. Seamless. Delivered with divine grace.🌸                                🕉️Verified Pandits 🙏. Curated Kits 🎁. ₹151 off this week only – Vedarch mein hai vishwas.')

  const handleTap = () => {
    setTapCount(prev => prev + 1)
    if (tapCount + 1 === 6) {
      setTapCount(0)
      setShowAdminLogin(true)
    }
  }

  const handleAdminLogin = (username, password) => {
    if (username === 'karun8619' && password === 'Karun@8619') {
      setIsAdminAuthenticated(true)
      setShowAdminLogin(false)
    } else {
      alert('Invalid admin credentials')
    }
  }

  const handleSave = () => {
    // Save marqueeContent to persistent storage or backend if applicable
    alert('Marquee content saved!')
    setIsAdminAuthenticated(false)
  }

  return (
    <header className="header">
      <marquee onClick={handleTap} style={{ cursor: 'pointer' }}>
        {marqueeContent}
      </marquee>

      {showAdminLogin && !isAdminAuthenticated && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}

      {isAdminAuthenticated && (
        <div className="admin-marquee-editor">
          <textarea
            value={marqueeContent}
            onChange={(e) => setMarqueeContent(e.target.value)}
            rows={3}
            style={{ width: '100%', fontSize: '1.2rem' }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsAdminAuthenticated(false)}>Logout</button>
        </div>
      )}
    </header>
  )
}

export default Header
