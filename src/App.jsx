
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll, { useLenis } from './components/common/SmoothScroll'
import Home from './pages/Home'
import AIAutomationPage from './pages/AIAutomationPage'
import FractionalChiefPage from './pages/FractionalChiefPage'
import SoftwareSetupPage from './pages/SoftwareSetupPage'
import WorkflowAutomationPage from './pages/WorkflowAutomationPage'
import Layout from './layout/Layout'
import CaseStudiesPage from './pages/CaseStudiesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AirtableConsultantPage from './pages/AirtableConsultantPage';
import JotformConsultantPage from './pages/JotformConsultantPage';

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const lenisRef = useLenis()
  useEffect(() => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenisRef])
  return null
}

const App = () => (
  <BrowserRouter>
    <SmoothScroll>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-automation-services" element={<AIAutomationPage />} />
          <Route path="/fractional-chief-automation" element={<FractionalChiefPage />} />
          <Route path="/software-setup-services" element={<SoftwareSetupPage />} />
          <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/airtable-consultant" element={<AirtableConsultantPage />} />
          <Route path="/jotform-consultant" element={<JotformConsultantPage />} />
        </Routes>
      </Layout>
    </SmoothScroll>
  </BrowserRouter>
);

export default App;