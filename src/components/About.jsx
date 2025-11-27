import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Computer Science student with a strong interest in artificial intelligence 
              and research. Currently exploring web technologies, machine learning, and cybersecurity.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me gaming, drawing, or having a cup of coffee.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h4 className="font-semibold mb-4 dark:text-white">Quick Facts</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">University:</span>
                <span className="font-medium dark:text-white">BINUS International</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Major:</span>
                <span className="font-medium dark:text-white">Computer Science</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">Seeking Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About