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
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I combine technical skills with creative thinking, applying what I learn through projects 
              like machine learning applications, game development with PyGame and LibGDX, and full-stack 
              web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me gaming, drawing, or having a cup of coffee.
            </p>
            <p className="text">
              <a 
                href="https://docs.google.com/document/d/1C70VAD3bdeTF8PKxhK5Ke-cViAXzJTa0tFjyGCVrAh8/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium"
              >
                View My Portfolio
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h4 className="font-semibold mb-6 dark:text-white text-lg">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">University:</span>
                <span className="font-medium dark:text-white text-right">BINUS International</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Major:</span>
                <span className="font-medium dark:text-white text-right">Computer Science</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">GPA:</span>
                <span className="font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-md">
                  3.76/4.00
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <span className="font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-md">
                  Seeking Internships
                </span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Consistently high academic performance with hands-on project experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About