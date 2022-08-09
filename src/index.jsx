import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Location from './pages/Location'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'
// import { createGlobalStyle } from 'styled-components'
// import { ThemeProvider, SurveyProvider } from './utils/context'
// import GlobalStyle from './utils/style/globalStyle'

// const GlobalStyle = createGlobalStyle`
//   * {
//     font-family: 'Trebuchet MS', Helvetica, sans-serif;
//   }
//   body {
//     maegin: 0;
//   }
// `

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:locationId" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
