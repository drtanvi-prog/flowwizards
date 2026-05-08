import React from 'react'
import SmoothScroll from './components/common/SmoothScroll'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <SmoothScroll>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
