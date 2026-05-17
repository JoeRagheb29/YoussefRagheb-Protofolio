import React from 'react'
import { useTheme } from '../context/useTheme'

function Education() {
  const { isDark } = useTheme()
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Ain Shams University",
      date: "Expected Graduation: 2027",
      icon: "🎓"
    }
  ]

  return (
    <div id='education' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Education</h2>
        <p className={`text-center text-sm sm:text-base mb-12 sm:mb-16 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Academic foundation powering my engineering skills.</p>
        
        <div className='space-y-4 sm:space-y-6'>
          {education.map((edu, index) => (
            <div key={index} className={`border rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <div className='text-3xl sm:text-4xl shrink-0'>{edu.icon}</div>
              <div className='w-full'>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h3>
                <p className={`mb-1 sm:mb-2 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>{edu.school}</p>
                <p className={`flex items-center gap-2 text-sm sm:text-base ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>📅 {edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
