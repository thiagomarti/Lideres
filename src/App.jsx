import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Activities />
          </>
        } />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
