import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Location'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'
import GlobalStyle from './style/GlobalStyle'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:locationId" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
