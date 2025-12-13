import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { config } from './config'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchGitHubProjects()
  }, [])

  const fetchGitHubProjects = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${config.githubUsername}/repos?sort=updated&per_page=12&type=all`
      )
      if (response.ok) {
        const data = await response.json()
        // Filter out forks and process projects
        const filteredProjects = data
          .filter(repo => !repo.fork && repo.name !== config.githubUsername)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated: repo.updated_at,
            topics: repo.topics || [],
            image: `https://opengraph.githubassets.com/1/${config.githubUsername}/${repo.name}`,
          }))
        setProjects(filteredProjects)
      }
    } catch (error) {
      console.error('Error fetching GitHub projects:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} loading={loading} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

