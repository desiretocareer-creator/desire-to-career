import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import IndustryPage from './IndustryPage.jsx'
import DetailPage from './ServiceDetailPage.jsx'
import ContactPage from './ContactPage.jsx'
import CareerPage from './CareerPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/it" element={<IndustryPage kind="it" />} />
        <Route path="/non-it" element={<IndustryPage kind="non-it" />} />
        <Route path="/services/:slug" element={<DetailPage kind="service" />} />
        <Route path="/industries/:slug" element={<DetailPage kind="industry" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
