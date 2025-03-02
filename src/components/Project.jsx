import PropTypes from 'prop-types'

const Project = ({ title, contributions, image, link, technologies }) => {
  return (
    <div className="project-card group">
      <div className="overflow-hidden">
        <div className="h-48 bg-gray-200 dark:bg-gray-700">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-contain bg-white dark:bg-gray-800" 
            />
          )}
        </div>
        <div className="mt-4 text-center">
          <a href={link} className="inline-block px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200">
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
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
}

export default Project
