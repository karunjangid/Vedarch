import React from 'react'
import Header from '../components/Header'
import StickyNav from '../components/StickyNav'
import HeroSection from '../components/HeroSection'
import FeaturedKits from '../components/FeaturedKits'
import PanditBooking from '../components/PanditBooking'
import ServiceTiles from '../components/ServiceTiles'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Footer from '../components/Footer'
import './HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <StickyNav />
      <HeroSection />
      <FeaturedKits />
      <PanditBooking />
      <ServiceTiles />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}

export default HomePage
