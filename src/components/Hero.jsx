import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'
import { config } from '../config'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium mb-4">
            Welcome to my portfolio!
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-gradient">I'm {config.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          {config.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-4xl mx-auto mb-8"
        >
          {config.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          {config.social.twitter && (
            <motion.a
              href={config.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={24} />
            </motion.a>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="#projects"
            className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore My Work</span>
            <FaArrowDown className="animate-bounce" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

