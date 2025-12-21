import React from 'react'

const Experience = () => {
  const experiences = [
    {
      type: "research",
      title: "Published Research Paper",
      organization: "International Seminar on Research of Information Technology and Information Systems (ISRITI)",
      period: "December 2025",
      description: "Co-authored a paper on machine learning application in Counter-Strike 2 ",
      technologies: ["Python"]
    },
    {
      type: "internship", 
      title: "Data Analyst Intern",
      organization: "Asosiasi Pembangkit Listrik Batu Bara Indonesia (APLBI)",
      period: "March 2023 - May 2023",
      description: "Hands on work experience as a data analyst. Analyzed, formatted, and transformed data on Microsoft Excel. Assisted the team in analyzing annual and monthly power-plant data. Created an interactive HR dashboard on Excel.",
      technologies: ["Excel", "Powerpoint"]
    },
    {
      type: "organization",
      title: "GDGOC core member",
      organization: "Google Developer Group on Campus (GDGOC)",
      period: "2024-2025",
      description: "Tech core team member on GDGOC. Held and host seminars on google technologies, in collaboration with other GDGOC branches. Presented on a seminar about utilizing Google's Gemini API to make a chatbot on a web application",
      technologies: ["Google", "Gemini"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.organization}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  exp.type === 'research' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {exp.type}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience