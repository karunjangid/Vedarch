import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="mantra">ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ 🙏</div>
        <div className="footer-sections">
          <div className="footer-links">
            <h4>🕉️ Services</h4>
            <a href="#sanskaar">Sanskaar Samagri</a>
            <a href="#purohit">Purohit Seva</a>
            <a href="#rasmon">Rasmon ka Gyaan</a>
          </div>
          <div className="contact-info">
            <h4>📞 Contact Us</h4>
            <p>Email: jangidkind@gmail.com</p>
            <p>Phone: +91 8619448841</p>
          </div>
          <div className="social-icons">
            <h4>🌐 Follow Us</h4>
            <a href="https://www.instagram.com/vedarch" target="_blank" rel="noopener noreferrer" className="social-link instagram">📷 Instagram</a>
            <a href="https://www.facebook.com/vedarch" target="_blank" rel="noopener noreferrer" className="social-link facebook">📘 Facebook</a>
            <a href="https://www.twitter.com/vedarch" target="_blank" rel="noopener noreferrer" className="social-link twitter">🐦 Twitter</a>
            <a href="https://www.youtube.com/vedarch" target="_blank" rel="noopener noreferrer" className="social-link youtube">📺 YouTube</a>
          </div>
        </div>
        <div className="copyright">
          &copy; 2023 Vedarch. All rights reserved. 🌸
        </div>
      </div>
      <a href="https://wa.me/1234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </footer>
  )
}

export default Footer
