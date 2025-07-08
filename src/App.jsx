import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App