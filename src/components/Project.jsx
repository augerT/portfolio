import PropTypes from 'prop-types'

const Project = ({ title, contributions, image, link, technologies }) => {
  return (
    <div className="project-card group bg-orange-50/30 dark:bg-orange-900/10 shadow-[0_4px_20px_-5px_rgba(234,88,12,0.2)] dark:shadow-[0_4px_20px_-5px_rgba(234,88,12,0.15)]">
      <div className="overflow-hidden">
        <div className="h-48 flex items-center justify-center">
          {image && (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={image} 
                alt={title} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <a href={link} className="inline-block px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg transition-colors duration-200">
            View Project
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <ul className="list-none text-gray-600 dark:text-gray-300 mb-4 space-y-2">
          {contributions.map((contribution, index) => (
            <li key={index} className="flex">
              <span className="mr-2">•</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-orange-200 dark:bg-orange-800/80 rounded-full text-sm text-gray-800 dark:text-orange-50 font-medium shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Project
