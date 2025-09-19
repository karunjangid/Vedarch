import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import KitCustomizationPage from './pages/KitCustomizationPage'
import ProductExplorerPage from './pages/ProductExplorerPage'
import SingleCheckoutPage from './pages/SingleCheckoutPage'
import CartPage from './pages/CartPage'
import EntranceAnimation from './components/EntranceAnimation'

function App() {
  const [showEntrance, setShowEntrance] = useState(true)

  const handleEntranceComplete = () => {
    setShowEntrance(false)
  }

  return (
    <>
      {showEntrance ? (
        <EntranceAnimation onComplete={handleEntranceComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kit-customization" element={<KitCustomizationPage />} />
          <Route path="/explore-products" element={<ProductExplorerPage />} />
          <Route path="/single-checkout" element={<SingleCheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      )}
    </>
  )
}

export default App
