import React from 'react'
import './index.css'
import Navbar from './components/NavbarSection/Navbar'
import Hero from './components/HeroSection/Hero'
import Features from './components/FeatureSection/Feature'
import Workflow from './components/WorkflowSection/Workflow'
import Pricing from './components/PricingSection/Pricing'
import Testimonials from './components/TestimonialsSection/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-20">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>


    </>
  )
}

export default App
