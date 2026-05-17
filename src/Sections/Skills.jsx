import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'

function Skills() {
  const { isDark } = useTheme()
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillId = entry.target.dataset.skillId;
          setAnimatedSkills((prev) => ({ ...prev, [skillId]: true }));
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.skill-bar');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 90 },
        { name: "jQuery", percentage: 80 },
        { name: "React.js", percentage: 92 },
        { name: "TypeScript", percentage: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: "🖥️",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "MongoDB", percentage: 80 },
        { name: "PostgreSQL", percentage: 75 },
      ]
    },
    {
      title: "CS Fundamentals",
      icon: "⚙️",
      skills: [
        { name: "Structured Programming", percentage: 90 },
        { name: "OOP", percentage: 88 },
        { name: "Data Structures & Algorithms", percentage: 85 },
        { name: "Computer Architecture", percentage: 80 },
        { name: "Operating Systems", percentage: 78 }
      ]
    }
  ]

  return (
    <div id='skills' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 animate-fadeInDown ${isDark ? 'text-white' : 'text-slate-900'}`}>Skills</h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-slate-600'} text-sm sm:text-base mb-12 sm:mb-16 animate-fadeInDown`} style={{animationDelay: '0.2s'}}>Technologies & concepts I work with daily.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`border ${isDark ? 'border-slate-700 hover:border-blue-500' : 'border-slate-200 hover:border-blue-600'} rounded-lg p-4 sm:p-6 lg:p-8 hover-lift group transition-all duration-500 animate-scaleUp`}
              style={{animationDelay: `${idx * 0.15}s`}}
            >
              <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
                <span className='text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300'>{category.icon}</span>
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{category.title}</h3>
              </div>
              
              <div className='space-y-3 sm:space-y-4'>
                {category.skills.map((skill, i) => {
                  const skillId = `${idx}-${i}`;
                  const isAnimated = animatedSkills[skillId];
                  
                  return (
                    <div key={i} className='skill-bar' data-skill-id={skillId}>
                      <div className='flex justify-between items-center mb-1 sm:mb-2'>
                        <span className={`text-xs sm:text-sm flex items-center gap-1 sm:gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {skill.name === "HTML" && "🏷️"}
                          {skill.name === "CSS" && "🎨"}
                          {skill.name === "JavaScript" && "⚡"}
                          {skill.name === "jQuery" && "📦"}
                          {skill.name === "React.js" && "⚛️"}
                          {skill.name === "TypeScript" && "🔷"}
                          {skill.name === "Node.js" && "🟢"}
                          {skill.name === "MongoDB" && "🍃"}
                          {skill.name === "PostgreSQL" && "🐘"}
                          {skill.name === "Structured Programming" && "📋"}
                          {skill.name === "OOP" && "🔐"}
                          {skill.name === "Data Structures & Algorithms" && "📊"}
                          {skill.name === "Computer Architecture" && "🏗️"}
                          {skill.name === "Operating Systems" && "⚙️"}
                          {skill.name}
                        </span>
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{skill.percentage}%</span>
                      </div>
                      <div className={`w-full rounded-full h-2 overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div 
                          className='bg-linear-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out'
                          style={{ 
                            width: isAnimated ? `${skill.percentage}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
