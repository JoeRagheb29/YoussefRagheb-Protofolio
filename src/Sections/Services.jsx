import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'

function Services() {
  const { isDark } = useTheme()
  const [animatedIndices, setAnimatedIndices] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setAnimatedIndices((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Front-End Development",
      description: "Pixel-perfect, responsive interfaces built with React and modern CSS.",
      icon: "🖥️"
    },
    {
      title: "Back-End Development",
      description: "Robust APIs and server logic powered by Node.js and Express.",
      icon: "⚙️"
    },
    {
      title: "Full-Stack Applications",
      description: "End-to-end solutions from database design to deployment.",
      icon: "🏗️"
    }
  ]

  return (
    <div id='services' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 animate-fadeInDown ${isDark ? 'text-white' : 'text-slate-900'}`}>Services</h2>
        <p className={`text-center text-sm sm:text-base mb-12 sm:mb-16 animate-fadeInDown ${isDark ? 'text-gray-400' : 'text-slate-600'}`} style={{animationDelay: '0.2s'}}>What I bring to the table.</p>
        
        {/* Main Service Guarantee */}
        <div className={`border rounded-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 hover-lift group transition-all duration-500 animate-slideInLeft ${isDark ? 'border-blue-600' : 'border-blue-500'}`}>
          <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
            <span className='text-3xl sm:text-4xl shrink-0 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12'>🛡️</span>
            <div className='w-full'>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors'>
                The Ragheb Guarantee: <span className='text-blue-500'>Created by Hand, Maintained for Success.</span>
              </h3>
              <p className={`text-sm sm:text-base group-hover:transition-colors ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-700'}`}>
                Every line of code is written by me from scratch — no bloated templates, no shortcuts. To ensure your peace of mind, I offer <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>3 free maintenance sessions</span> for every initial project to ensure everything runs perfectly as you grow.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`service-card border rounded-lg p-4 sm:p-6 lg:p-8 transition-all duration-700 hover-lift group ${
                isDark ? 'border-slate-700 hover:border-blue-500' : 'border-slate-200 hover:border-blue-600'
              } ${
                animatedIndices.includes(index)
                  ? 'animate-scaleUp'
                  : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className='text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-300 inline-block'>{service.icon}</div>
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{service.title}</h3>
              <p className={`text-sm sm:text-base transition-colors ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-700'}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
