import React from 'react'
import './index.css'
import Navbar from './components/NavbarSection/Navbar'
import Hero from './components/HeroSection/Hero'
import Features from './components/FeatureSection/Feature'
import Workflow from './components/WorkflowSection/Workflow'
import Pricing from './components/PricingSection/Pricing'
import Testimonials from './components/TestimonialsSection/Testimonials'
import Footer from './components/FooterSection/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-20">
        <Features />
        <Hero />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>


    </>
  )
}

export default App
