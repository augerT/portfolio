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
      <nav className="fixed top-0 left-0 right-0 bg-orange-50/90 dark:bg-gray-950/90 backdrop-blur-sm z-50 py-4 border-b border-orange-200 dark:border-orange-900/30">
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
            <img src={`${import.meta.env.BASE_URL}images/headshot.png`} alt="Tyler Auger" className="w-full h-full object-cover rounded-full shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent leading-[1.5] py-4">
            Tyler Auger
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Software Engineer
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg hover-scale">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-orange-600 text-orange-600 dark:text-orange-400 px-6 py-3 rounded-lg hover-scale">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-orange-50/30 dark:bg-orange-900/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I’m a passionate software developer dedicated to crafting elegant, efficient solutions to complex challenges. With deep expertise in modern web technologies, I design and build responsive, high-performance applications that deliver exceptional user experiences. I bring a proven track record of debugging, optimizing, and extending legacy codebases, seamlessly balancing stability with innovation. Whether it’s adding impactful new features or modernizing outdated systems, I thrive on transforming code into maintainable, forward-looking solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-gradient-to-b from-transparent via-orange-50/20 dark:via-orange-900/5 to-transparent">
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
      <section id="skills" className="section-container bg-orange-50/30 dark:bg-orange-900/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center hover-scale bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/30">
            <div className="text-4xl mb-2">💻</div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-400">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">React, Vue, TypeScript, Tailwind, JavaScript, HTML / CSS, JQuery</p>
          </div>
          <div className="text-center hover-scale bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/30">
            <div className="text-4xl mb-2">⚙️</div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-400">Backend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Node.js, Express, Python, PHP, SQL</p>
          </div>
          <div className="text-center hover-scale bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/30">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-400">Frameworks</h3>
            <p className="text-gray-600 dark:text-gray-300">Electron, NW.js, Laravel</p>
          </div>
          <div className="text-center hover-scale bg-orange-50/50 dark:bg-orange-900/10 p-6 rounded-xl border border-orange-200 dark:border-orange-800/30">
            <div className="text-4xl mb-2">🤖</div>
            <h3 className="font-semibold text-orange-800 dark:text-orange-400">Artificial Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-300">LLMs, Speech-To-Text</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-orange-50/30 dark:bg-orange-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I currently work full time for CueScript, but I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/augerT" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-orange-50/50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover-scale">
              <span className="text-xl font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/tyler-auger-a0b7a0144/" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-orange-50/50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover-scale">
              <span className="text-xl font-medium">LinkedIn</span>
            </a>
            <a href="mailto:tyj.auger@gmail.com"
               className="px-6 py-3 bg-orange-50/50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover-scale">
              <span className="text-xl font-medium">Email</span>
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
