import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SingleCheckoutPage.css'

function SingleCheckoutPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { product } = location.state || {}

  const [quantity, setQuantity] = useState(1)
  const [deliveryInstructions, setDeliveryInstructions] = useState('')
  const [deliveryType, setDeliveryType] = useState('standard')
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

  if (!product) {
    return <div>No product selected for checkout.</div>
  }

  const subtotal = product.price * quantity
  const shipping = deliveryType === 'highspeed' ? 100 : 50
  const handling = 20
  const gst = subtotal * 0.18
  const finalPrice = subtotal + shipping + handling + gst - discount

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'JAIPUR130') {
      setDiscount(130)
      alert('Coupon applied! ₹130 discount added.')
    } else {
      alert('Invalid coupon code.')
    }
  }

  const handlePayNow = () => {
    alert('Payment functionality to be implemented.')
  }

  return (
    <div className="single-checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-content">
        <div className="product-summary">
          <h2>Product Details</h2>
          <div className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-category">{product.category}</p>
              <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <div className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="offer-price">₹{product.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout-details">
          <div className="delivery-section">
            <h3>Delivery Options</h3>
            <label>
              <input
                type="radio"
                value="highspeed"
                checked={deliveryType === 'highspeed'}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              High Speed Delivery (Same Day) - ₹100
            </label>
            <label>
              <input
                type="radio"
                value="standard"
                checked={deliveryType === 'standard'}
                onChange={(e) => setDeliveryType(e.target.value)}
              />
              Standard Delivery (10-12 Days) - ₹50
            </label>

            <div className="delivery-instructions">
              <label>Special Delivery Instructions:</label>
              <textarea
                placeholder="Enter any special delivery instructions..."
                value={deliveryInstructions}
                onChange={(e) => setDeliveryInstructions(e.target.value)}
                rows="3"
              />
            </div>
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
            <h3>Price Breakdown</h3>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Shipping: ₹{shipping.toFixed(2)}</p>
            <p>Handling: ₹{handling.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            {discount > 0 && <p>Discount: -₹{discount.toFixed(2)}</p>}
            <p><strong>Total: ₹{finalPrice.toFixed(2)}</strong></p>
          </div>

          <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCheckoutPage
