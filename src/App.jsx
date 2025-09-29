import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Country from './pages/Country'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { CountryDetail } from './UI/CountryDetail'
import ScrollToTop from './UI/ScrollToTop'

function App() {
  return (
    <Router>
      {/* 👇 Scroll to top */}


      {/* Header everywhere */}
      <Header />
      <ScrollToTop />

      <Routes>
        {/* Home route */}
        <Route path='/' element={
          <div>
            <Home />
            <About />
            <Contact />
            <Country />
          </div>
        } />

        {/* Single paths */}
        <Route path='/Header' element={<Header />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Country' element={<Country />} />
        <Route path='/CountryDetail/:id' element={<CountryDetail />} />
      </Routes>

      {/* Footer everywhere */}
      <Footer />
    </Router>
  )
}

export default App
