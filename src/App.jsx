
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/common/SmoothScroll'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import AIAutomationPage from './pages/AIAutomationPage'
import FractionalChiefPage from './pages/FractionalChiefPage'
import SoftwareSetupPage from './pages/SoftwareSetupPage'
import WorkflowAutomationPage from './pages/WorkflowAutomationPage'

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
        <Route path="/ai-automation-services" element={<AIAutomationPage />} />
        <Route path="/fractional-chief-automation" element={<FractionalChiefPage />} />
        <Route path="/software-setup-services" element={<SoftwareSetupPage />} />
        <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  </BrowserRouter>
)

export default App
