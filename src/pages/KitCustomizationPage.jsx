import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './KitCustomizationPage.css'

function KitCustomizationPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { kit } = location.state || {}

  const [selectedProducts, setSelectedProducts] = useState([])
  const [spiritualType, setSpiritualType] = useState('')
  const [showCheckout, setShowCheckout] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [deliveryInstructions, setDeliveryInstructions] = useState('')
  const [deliveryType, setDeliveryType] = useState('standard')
  const [feedback, setFeedback] = useState('')
  const [showDeliveryInstructions, setShowDeliveryInstructions] = useState(false)

  if (!kit) {
    return <div>No kit selected for customization.</div>
  }

  const handleSelectProduct = (product) => {
    if (selectedProducts.length < 7 && !selectedProducts.find(p => p.product.name === product.name)) {
      setSelectedProducts([...selectedProducts, { product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (productName) => {
    setSelectedProducts(selectedProducts.filter(p => p.product.name !== productName))
  }

  const handleIncreaseQuantity = (productName) => {
    setSelectedProducts(selectedProducts.map(p =>
      p.product.name === productName ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  const handleDecreaseQuantity = (productName) => {
    setSelectedProducts(selectedProducts.map(p =>
      p.product.name === productName ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
    ))
  }

  const subtotal = selectedProducts.reduce((sum, p) => sum + p.product.price * p.quantity, 0)
  const shipping = 50
  const handling = 20
  const gst = subtotal * 0.18
  const finalPrice = subtotal + shipping + handling + gst - discount

  const handleCheckout = () => {
    setShowCheckout(true)
  }

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'JAIPUR130') {
      setDiscount(130)
      alert('Coupon applied! ₹130 discount added.')
    } else {
      alert('Invalid coupon code.')
    }
  }

  const handlePayNow = () => {
    // Placeholder for payment integration
    alert('Payment functionality to be implemented.')
  }

  return (
    <div className="kit-customization-page">
      {!showCheckout ? (
        <>
          <h2>Customize Your {kit.name}</h2>
          <div className="spiritual-type-selector">
            <h3>Select Spiritual Type</h3>
            <div className="type-buttons">
              {['Vedic', 'Tantric', 'Devotional'].map(type => (
                <button
                  key={type}
                  className={spiritualType === type ? 'active' : ''}
                  onClick={() => setSpiritualType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="selected-kit-box">
            <h3>Your Custom Kit ({selectedProducts.length}/7 items)</h3>
            <div className="selected-products">
              {selectedProducts.map((p, index) => (
                <div key={index} className="selected-product-item">
                  {/* Placeholder for product icon */}
                  <div className="product-icon">{p.product.name.charAt(0)}</div>
                  <span>{p.product.name} (Qty: {p.quantity})</span>
                  <button onClick={() => handleRemoveProduct(p.product.name)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="kit-total">
              <strong>Subtotal: ₹{subtotal}</strong>
            </div>
            {selectedProducts.length === 7 && (
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </div>

          <div className="related-products">
            <h3>Related Products</h3>
            <div className="products-grid">
              {kit.relatedProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p className="product-price">
                    <span className="original-price">₹{product.originalPrice}</span> ₹{product.price}
                  </p>
                  <button
                    className="select-product"
                    onClick={() => handleSelectProduct(product)}
                    disabled={selectedProducts.find(p => p.product.name === product.name) || selectedProducts.length >= 7}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="checkout-page">
          <h2>Checkout</h2>
          <div className="product-list">
            {selectedProducts.map((p, index) => (
              <div key={index} className="product-item">
                <div className="product-left">
                  <h4>{p.product.name}</h4>
                  <p className="product-category">{p.product.category || 'Pooja Item'}</p>
                </div>
                <div className="product-right">
                  <div className="quantity-controls">
                    <button onClick={() => handleDecreaseQuantity(p.product.name)}>-</button>
                    <span>{p.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(p.product.name)}>+</button>
                  </div>
                  <div className="product-prices">
                    <span className="original-price">₹{p.product.originalPrice}</span>
                    <span className="offer-price">₹{p.product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="delivery-instructions">
            <button onClick={() => setShowDeliveryInstructions(!showDeliveryInstructions)}>
              Special Delivery Instructions
            </button>
            {showDeliveryInstructions && (
              <textarea
                placeholder="Enter any special delivery instructions..."
                value={deliveryInstructions}
                onChange={(e) => setDeliveryInstructions(e.target.value)}
                rows="3"
              />
            )}
          </div>
          <div className="delivery-type">
            <h4>Delivery Type</h4>
            <label>
              <input
                type="radio"
                value="highspeed"
                checked={deliveryType === 'highspeed'}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              High Speed Delivery (Same Day)
            </label>
            <label>
              <input
                type="radio"
                value="standard"
                checked={deliveryType === 'standard'}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              Standard Delivery (10-12 Days)
            </label>
          </div>
          <div className="feedback-section">
            <h4>Feedback for Website</h4>
            <textarea
              placeholder="Share your feedback about our website..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="3"
            />
          </div>
          <div className="coupon-section">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="coupon-input"
            />
            <button className="apply-coupon-button" onClick={handleApplyCoupon}>Apply Coupon</button>
          </div>
          <div className="price-breakdown">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: ₹{shipping.toFixed(2)}</p>
            <p>Handling: ₹{handling.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            {discount > 0 && <p>Discount: -₹{discount.toFixed(2)}</p>}
            <p><strong>Total Price: ₹{finalPrice.toFixed(2)}</strong></p>
          </div>
          <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
        </div>
      )}
    </div>
  )
}

export default KitCustomizationPage
