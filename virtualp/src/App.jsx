import React from 'react'
import './index.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/FeatureSection/Feature'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-20">
        <Hero />
      </div>
      <Features />

    </>
  )
}

export default App
