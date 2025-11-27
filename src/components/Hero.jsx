import React from 'react'
import profileImage from '../assets/profile-2024.png' 

const Hero = () => {

    const socialLinks = {
    github: "https://github.com/Aba11s",
    linkedin: "https://linkedin.com/in/bellion-leander-571510333", 
    email: "mailto:bellion2609@gmail.com"
    }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Profile Image Placeholder */}
        <div className="w-56 h-56 mx-auto mb-8 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
          <img 
            src={profileImage} 
            alt="Thats me!"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bel</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          <span className="font-semibold">Computer Science Student</span> at BINUS International
        </p>
        
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Passionate about creating innovative solutions through code. Currently focusing on machine learning and cybersecurity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl font-medium"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:-translate-y-1 font-medium"
          >
            View My Work
          </a>
        </div>
        
        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href={socialLinks.email}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero