import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  const [doneTyping, setDoneTyping] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 pt-24"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Akash Kanagarajah
      </h1>

      {/* Slow one-time typing effect */}
      <p className="text-lg md:text-xl text-emerald-400 mb-6 h-8">
        {!doneTyping ? (
          <Typewriter
            words={[
              'Problem Solver',
              'Embedded Systems Developer',
              'React Builder',
              'Software Engineer',
            ]}
            loop={1} // Show each once
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => setDoneTyping(true)}
          />
        ) : (
          'Software Engineer'
        )}
      </p>

      {/* Static paragraph */}
      <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
        I’m a Computer Engineering grad passionate about building fast and reliable tools. Whether I’m modernizing embedded Linux systems at a nuclear plant or developing React-based web applications, I thrive in hands-on environments and enjoy turning complex problems into clean, maintainable code.
      </p>

      <a
        href="#projects"
        className="mt-10 inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
      >
        View My Projects
      </a>
    </section>
  )
}

export default Home