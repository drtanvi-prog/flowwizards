import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/common/SmoothScroll'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const App = () => (
  <BrowserRouter>
    <SmoothScroll>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  </BrowserRouter>
)

export default App
