import React from 'react'

function About() {
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
    <div className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4'>My Story</h2>
        <p className='text-center text-gray-400 text-sm sm:text-base mb-12 sm:mb-16'>A journey driven by curiosity and craft.</p>
        
        <div className='space-y-4 sm:space-y-6'>
          {storyPoints.map((point, index) => (
            <div key={index} className='border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-500 transition'>
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='text-2xl sm:text-3xl lg:text-4xl shrink-0'>{point.icon}</div>
                <div className='min-w-0'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2'>{point.title}</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>{point.description}</p>
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
