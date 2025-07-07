import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
}

export default App