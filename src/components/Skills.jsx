import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id="skills" className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 scroll-mt-14">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass p-6 rounded-2xl hover:bg-white/15 transition-all"
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Mobile & Frontend</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>React Native, Flutter & Cross-platform Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>TypeScript & JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Material-UI & Responsive Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>UI/UX Design Principles</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 rounded-2xl hover:bg-white/15 transition-all"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Backend & Database</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Django & Laravel Frameworks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Supabase & PostgreSQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>PHP & MySQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>RESTful API Development</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-6 rounded-2xl hover:bg-white/15 transition-all"
          >
            <h4 className="text-xl font-semibold mb-4 text-green-400">Testing & QA</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Manual & Automated Testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Test Automation Frameworks</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>DeFi Platform Testing Experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Performance & Reliability Testing</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 rounded-2xl hover:bg-white/15 transition-all"
          >
            <h4 className="text-xl font-semibold mb-4 text-pink-400">Tools & Methodologies</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Git & Version Control</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Agile & Scrum Methodologies</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Jira & Project Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Cross-functional Collaboration</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

