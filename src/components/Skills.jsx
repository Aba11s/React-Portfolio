import React from 'react'

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C#", level: 75 },
    { name: "C/C++", level: 55 },
    { name: "Rust", level: 50},
    { name: "SQL", level: 60},
    { name: "HTML/CSS/JS", level: 65 },

  ]

  const tools = ["VS Code", "Postman", "Docker", "Git", "Linux", "AWS", "Google Cloud"]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:shadow-md transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills