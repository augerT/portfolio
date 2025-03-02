import { useState, useEffect } from 'react'
import Project from './components/Project'
import { projects } from './data/projects'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-container min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-6">
          <div className="mx-auto w-48 h-48 mb-8">
            <img src="/images/headshot.png" alt="Tyler Auger" className="w-full h-full object-cover rounded-full shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.5] py-4">
            Tyler Auger
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg hover-scale">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover-scale">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m a passionate developer focused on creating elegant solutions to complex problems. 
            With expertise in modern web technologies, I build responsive and performant applications 
            that provide exceptional user experiences. I have a proven track record of understanding, 
            debugging, and optimizing legacy code bases. I am not shy to add new features onto these
            codebases where requested, and am comfortable modernizing technologies where appropriate.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              contributions={project.contributions}
              link={project.link}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-white dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center hover-scale">
            <div className="text-4xl mb-2">💻</div>
            <h3 className="font-semibold">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">React, Vue, TypeScript, Tailwind, JavaScript, HTML / CSS, JQuery</p>
          </div>
          <div className="text-center hover-scale">
            <div className="text-4xl mb-2">⚙️</div>
            <h3 className="font-semibold">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Node.js, Express, Python, PHP, SQL</p>
          </div>
          <div className="text-center hover-scale">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="font-semibold">Frameworks</h3>
            <p className="text-gray-600 dark:text-gray-300">Electron, NW.js, Laravel</p>
          </div>
          <div className="text-center hover-scale">

            <div className="text-4xl mb-2">🤖</div>
            <h3 className="font-semibold">Artificial Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-300">LLMs, Speech-To-Text (Zipformer / LSTM)</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/augerT" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale">
              <span className="text-2xl">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/tyler-auger-a0b7a0144/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale">
              <span className="text-2xl">LinkedIn</span>
            </a>
            <a href="mailto:tyj.auger@gmail.com"
               className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-scale">
              <span className="text-2xl">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
