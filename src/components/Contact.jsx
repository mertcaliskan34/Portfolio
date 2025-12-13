import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { config } from '../config'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
            <motion.a
              href={`mailto:${config.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 glass rounded-xl hover:bg-white/15 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="p-3 sm:p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <FaEnvelope className="text-blue-400 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg mb-1">Email</h3>
                <p className="text-gray-400 text-xs sm:text-sm break-all">{config.email}</p>
              </div>
            </motion.a>

            <motion.a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 glass rounded-xl hover:bg-white/15 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="p-3 sm:p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <FaLinkedin className="text-blue-400 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Let's connect</p>
              </div>
            </motion.a>

            <motion.a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 glass rounded-xl hover:bg-white/15 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="p-3 sm:p-4 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                <FaGithub className="text-purple-400 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg mb-1">GitHub</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Check out my code</p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 md:p-6 glass rounded-xl"
            >
              <div className="p-3 sm:p-4 bg-pink-500/20 rounded-full flex-shrink-0">
                <FaMapMarkerAlt className="text-pink-400 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg mb-1">Location</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{config.location}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Feel free to reach out if you want to collaborate on something exciting.
            </p>
            <motion.a
              href={`mailto:${config.email}?subject=Let's Work Together`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

