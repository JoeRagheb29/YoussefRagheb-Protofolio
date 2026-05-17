import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'

function About() {
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

    const elements = document.querySelectorAll('.story-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const storyPoints = [
    {
      title: "The Spark",
      icon: "💡",
      description: "Fascinated by how computers work behind the scenes since childhood — always asking 'how?' and 'why?'"
    },
    {
      title: "The Beginning",
      icon: "📖",
      description: "Started at Web Zero School, discovering the joy of hand-coding web pages from scratch."
    },
    {
      title: "The Growth",
      icon: "📈",
      description: "Leveled up through government-sponsored programs like NTI and DEPI, mastering Front-End development with React."
    },
    {
      title: "The Present",
      icon: "🚀",
      description: "Now crafting full-stack solutions, combining creative design with robust backend architecture."
    }
  ]

  return (
    <div id='about' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 animate-fadeInDown ${isDark ? 'text-white' : 'text-slate-900'}`}>My Story</h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-slate-600'} text-sm sm:text-base mb-12 sm:mb-16 animate-fadeInDown`} style={{animationDelay: '0.2s'}}>A journey driven by curiosity and craft.</p>
        
        <div className='space-y-4 sm:space-y-6 relative'>
          {storyPoints.map((point, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`story-card border ${isDark ? 'border-slate-700' : 'border-slate-200'} rounded-lg p-4 sm:p-6 lg:p-8 hover-lift group transition-all duration-700 ${
                animatedIndices.includes(index) 
                  ? 'animate-slideInLeft opacity-100' 
                  : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className='flex items-start gap-3 sm:gap-4 relative'>
                {/* Timeline dot */}
                <div className={`hidden lg:block absolute -left-16 top-4 w-8 h-8 ${isDark ? 'bg-slate-950 border-blue-500' : 'bg-white border-blue-600'} border-2 rounded-full group-hover:border-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all`}></div>
                
                <div className='text-2xl sm:text-3xl lg:text-4xl shrink-0 group-hover:scale-125 transition-transform duration-300'>{point.icon}</div>
                <div className='min-w-0'>
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{point.title}</h3>
                  <p className={`text-sm sm:text-base transition-colors ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-800'}`}>{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
