import React from 'react'
import Header from './components/common/Header'
import Hero from './components/sections/Hero'
import TrustedSection from './components/sections/TrustedSection'
import HowCanWeHelp from './components/sections/HowCanWeHelp'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrustedSection />
      <HowCanWeHelp />
    </div>
  )
}

export default App