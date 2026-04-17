import React from 'react'

function Skills() {
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
    <div id='skills' className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4'>Skills</h2>
        <p className='text-center text-gray-400 text-sm sm:text-base mb-12 sm:mb-16'>Technologies & concepts I work with daily.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {skillCategories.map((category, idx) => (
            <div key={idx} className='border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-500 transition'>
              <div className='flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6'>
                <span className='text-2xl sm:text-3xl'>{category.icon}</span>
                <h3 className='text-base sm:text-lg lg:text-xl font-bold'>{category.title}</h3>
              </div>
              
              <div className='space-y-3 sm:space-y-4'>
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className='flex justify-between items-center mb-1 sm:mb-2'>
                      <span className='text-xs sm:text-sm flex items-center gap-1 sm:gap-2'>
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
                      <span className='text-xs text-gray-400'>{skill.percentage}%</span>
                    </div>
                    <div className='w-full bg-slate-800 rounded-full h-2'>
                      <div 
                        className='bg-blue-600 h-2 rounded-full'
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
