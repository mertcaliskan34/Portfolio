import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { config } from '../config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <p className="text-gray-400 text-sm text-left">
            © {currentYear} {config.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by {config.name}</span>
          </div>
          <div className="flex justify-end space-x-4">
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

