import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CartPage.css'

function CartPage() {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(cartData)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'gulabiseherjaipur') {
      setDiscount(50)
      alert('Coupon applied! ₹50 discount added.')
    } else {
      alert('Invalid coupon code.')
    }
  }

  const handleCheckout = () => {
    navigate('/single-checkout')
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 500 ? 0 : 50
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + gst - discount

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button className="back-btn" onClick={() => navigate('/explore-products')}>
          ← Back to Products
        </button>
        <div className="logo">
          <span className="glyph">ॐ</span>
          <span className="logo-text">Vedarch</span>
        </div>
        <div className="cart-icon">
          🛒
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </header>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/explore-products')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <div className="item-price">
                    <span className="original-price">₹{item.originalPrice}</span>
                    <span className="offer-price">₹{item.price}</span>
                  </div>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">₹{item.price * item.quantity}</div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>×</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply</button>
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="price-row">
                <span>Shipping:</span>
                <span>₹{shipping}</span>
              </div>
              <div className="price-row">
                <span>GST (18%):</span>
                <span>₹{gst}</span>
              </div>
              {discount > 0 && (
                <div className="price-row discount">
                  <span>Discount:</span>
                  <span>-₹{discount}</span>
                </div>
              )}
              <div className="price-row total">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
