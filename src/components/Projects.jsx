import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import { config } from '../config'

const Projects = ({ projects, loading }) => {
  if (loading) {
    return (
      <section id="projects" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass p-6 rounded-xl animate-pulse">
                <div className="h-48 bg-gray-700 rounded-lg mb-4" />
                <div className="h-4 bg-gray-700 rounded mb-2" />
                <div className="h-4 bg-gray-700 rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects from GitHub. Each project represents my passion for creating innovative solutions.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found. Make sure your GitHub username is correct in the config file.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/15 transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Create SVG placeholder with project name
                      const escapedName = project.name
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                      const svg = `<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="200" fill="#1f2937"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">${escapedName}</text></svg>`
                      const blob = new Blob([svg], { type: 'image/svg+xml' })
                      e.target.src = URL.createObjectURL(blob)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      {project.language && (
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                          {project.language}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FaStar size={14} />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCodeBranch size={14} />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 glass rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              <FaGithub />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

