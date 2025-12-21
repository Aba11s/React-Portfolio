import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: "Space Invaders Reimagined",
      description: "A modern take on the popular retro arcade game, space invaders.",
      technologies: ["Java", "LibGDX"],
    },
    {
      name: "AI assistant chatbot",
      description: "Implemented a simple AI chatbot on an E-commerce app",
      technologies: ["Python", "Flask", "React"],
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-code text-blue-600 dark:text-blue-400"></i>
              </div>
              
              <h3 className="text-xl font-bold mb-3 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-white dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/*
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                  <i className="fab fa-github mr-1"></i> Code
                </a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                  <i className="fas fa-external-link-alt mr-1"></i> Demo
                </a>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects