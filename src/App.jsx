import React from 'react'
import SmoothScroll from './components/common/SmoothScroll'
import Header from './components/common/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <SmoothScroll>
      <div>
        <Header />
        <Home />
      </div>
    </SmoothScroll>
  )
}

export default App
