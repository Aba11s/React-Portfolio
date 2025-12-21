import React from 'react'

const Skills = () => {
  const technicalSkills = [
    "Python",
    "Java", 
    "C#",
    "C/C++",
    "Rust",
    "SQL",
    "HTML/CSS/JavaScript",
    "React",
    "Node.js",
    "Express"
  ]

  const tools = [
    "Postman", 
    "Docker", 
    "Git", 
    "Linux", 
    "AWS", 
    "Google Cloud", 
    "Photoshop"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Programming & Development</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 px-4 py-3 rounded-lg hover:shadow-md transition hover:scale-105"
                >
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 px-4 py-3 rounded-lg hover:shadow-md transition hover:scale-105"
                >
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {tool}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills