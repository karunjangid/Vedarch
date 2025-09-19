import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductExplorerPage.css'

function ProductExplorerPage() {
  const navigate = useNavigate()

  // Generate expanded products data
  const generateProducts = () => {
    const baseProducts = [
      { name: 'Brass Pooja Bell', category: 'Pooja Items', basePrice: 299, desc: 'Traditional brass bell for pooja ceremonies' },
      { name: 'Sandalwood Incense Sticks', category: 'Pooja Items', basePrice: 199, desc: 'Pure sandalwood incense for meditation' },
      { name: 'Bhagavad Gita Book', category: 'Books', basePrice: 349, desc: 'Sacred text of Hindu philosophy' },
      { name: 'Lord Krishna Idol', category: 'Idols', basePrice: 599, desc: 'Beautiful brass idol of Lord Krishna' },
      { name: 'Pooja Thali Set', category: 'Pooja Items', basePrice: 449, desc: 'Complete pooja thali with all essentials' },
      { name: 'Rudraksha Mala', category: 'Accessories', basePrice: 299, desc: '108 beads rudraksha mala for chanting' },
      { name: 'Vedic Mantras CD', category: 'Books', basePrice: 199, desc: 'Collection of sacred Vedic mantras' },
      { name: 'Copper Water Pot', category: 'Pooja Items', basePrice: 399, desc: 'Traditional copper pot for holy water' },
      { name: 'Hanuman Chalisa Book', category: 'Books', basePrice: 149, desc: 'Devotional book with Hanuman Chalisa' },
      { name: 'Brass Diya Set', category: 'Pooja Items', basePrice: 249, desc: 'Set of 5 brass diyas for lighting' },
      { name: 'Tulsi Mala', category: 'Accessories', basePrice: 199, desc: 'Sacred tulsi beads mala' },
      { name: 'Ramayana Epic', category: 'Books', basePrice: 499, desc: 'Complete Ramayana in Hindi' },
      { name: 'Lord Shiva Idol', category: 'Idols', basePrice: 699, desc: 'Majestic Shiva idol' },
      { name: 'Ganesha Statue', category: 'Idols', basePrice: 549, desc: 'Blessing Ganesha statue' },
      { name: 'Durga Idol', category: 'Idols', basePrice: 649, desc: 'Powerful Durga idol' },
      { name: 'Vedic Scriptures Set', category: 'Books', basePrice: 899, desc: 'Complete set of Vedic scriptures' },
      { name: 'Pooja Kit', category: 'Pooja Items', basePrice: 599, desc: 'Complete pooja kit' },
      { name: 'Incense Holder', category: 'Pooja Items', basePrice: 149, desc: 'Elegant incense holder' },
      { name: 'Prayer Beads', category: 'Accessories', basePrice: 249, desc: 'Sacred prayer beads' },
      { name: 'Holy Water Sprinkler', category: 'Pooja Items', basePrice: 199, desc: 'Traditional holy water sprinkler' }
    ]

    const products = []
    let id = 1

    // Generate variations for each base product
    baseProducts.forEach((base, index) => {
      // Create 15 variations per base product to reach ~300 total
      for (let i = 0; i < 15; i++) {
        const variation = i === 0 ? '' : ` - ${['Small', 'Medium', 'Large', 'Premium', 'Deluxe'][i % 5]} ${['Set', 'Pack', 'Bundle', 'Collection', 'Edition'][Math.floor(i / 5)]}`
        const priceVariation = Math.floor(Math.random() * 100) - 50 // -50 to +50 variation
        const price = Math.max(199, base.basePrice + priceVariation)
        const originalPrice = price + Math.floor(Math.random() * 100) + 50

        products.push({
          id: id++,
          name: base.name + variation,
          image: `/images/product-${id % 20 + 1}.jpg`, // Cycle through 20 placeholder images
          price: price,
          originalPrice: originalPrice,
          category: base.category,
          newArrival: Math.random() > 0.7, // 30% chance of being new
          description: base.desc + variation
        })
      }
    })

    return products
  }

  const allProducts = generateProducts()

  const [products, setProducts] = useState(allProducts)
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['all', ...new Set(allProducts.map(p => p.category))]

  useEffect(() => {
    let filtered = allProducts.filter(product => {
      const inPriceRange = product.price >= priceRange.min && product.price <= priceRange.max
      const inCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase())
      return inPriceRange && inCategory && matchesSearch
    })

    // Sort
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'new-arrivals':
        filtered.sort((a, b) => b.newArrival - a.newArrival)
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }, [sortBy, priceRange, selectedCategory, searchTerm])

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Product added to cart!')
  }

  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)

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

  const cartCount = JSON.parse(localStorage.getItem('cart') || '[]').length

  return (
    <div className="product-explorer-page">
      <header className="product-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <div className="logo">
          <span className="glyph">ॐ</span>
          <span className="logo-text">Vedarch</span>
        </div>
        <div className="cart-icon" onClick={() => navigate('/cart')}>
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </header>

      <h1>Explore Products</h1>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="filter-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="new-arrivals">New Arrivals</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range:</label>
            <div className="price-range">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {product.newArrival && <div className="new-arrival-badge">New</div>}
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-category">{product.category}</p>
              <div className="product-price">
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="offer-price">₹{product.price}</span>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductExplorerPage
