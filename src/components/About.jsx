import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaRocket, 
  FaHeart, 
  FaMobileAlt, 
  FaBug, 
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine,
  FaLaptopCode
} from 'react-icons/fa'
import { config } from '../config'

const About = () => {
  const features = [
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: 'Mobile Development',
      description: 'Expert in React Native and Flutter for cross-platform mobile app development, creating seamless user experiences.',
      color: 'text-blue-400',
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: 'Web Development',
      description: 'Experienced in building responsive and modern web applications using React, JavaScript, and various frontend frameworks.',
      color: 'text-purple-400',
    },
    {
      icon: <FaBug className="text-4xl" />,
      title: 'QA Engineering',
      description: 'Comprehensive testing expertise with both manual and automated testing to ensure software reliability.',
      color: 'text-red-400',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Team Collaboration',
      description: 'Experienced in Agile methodologies, cross-functional collaboration, and effective communication in English.',
      color: 'text-pink-400',
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and well-documented code following best practices and industry standards.',
      color: 'text-green-400',
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Passionate',
      description: 'I love what I do and continuously learn new technologies to stay ahead of the curve and deliver value.',
      color: 'text-yellow-400',
    },
  ]

  const values = [
    {
      icon: <FaCheckCircle className="text-2xl" />,
      text: 'Quality First Approach',
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      text: 'User-Centric Design',
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      text: 'Continuous Improvement',
    },
  ]

  return (
    <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] mx-auto">
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-8">
            My <span className="text-gradient">Core Values</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 px-6 py-3 glass rounded-full hover:bg-white/15 transition-all"
              >
                <div className="text-blue-400">{value.icon}</div>
                <span className="text-gray-300 font-medium">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/15 transition-all group"
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Whether it's developing a mobile app, building a web application, or ensuring quality through comprehensive 
                testing, I'm ready to bring your ideas to life.
              </p>
              <div className="space-y-3">
                <p className="text-gray-300 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-base">
                  <span className="font-semibold text-white">📍 Location:</span>
                  <span>{config.location}</span>
                </p>
                <p className="text-gray-300 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-base">
                  <span className="font-semibold text-white">✉️ Email:</span>
                  <a href={`mailto:${config.email}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
                    {config.email}
                  </a>
                </p>
                <p className="text-gray-300 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-base">
                  <span className="font-semibold text-white">💼 Available for:</span>
                  <span>Full-time, Part-time, Freelance Projects</span>
                </p>
              </div>
              <motion.a
                href="#contact"
                className="inline-block mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
            <div className="flex justify-center relative order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

