import React from 'react'

function Services() {
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
    <div id='services' className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4'>Services</h2>
        <p className='text-center text-gray-400 text-sm sm:text-base mb-12 sm:mb-16'>What I bring to the table.</p>
        
        {/* Main Service Guarantee */}
        <div className='border border-blue-600 rounded-lg p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16'>
          <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
            <span className='text-3xl sm:text-4xl shrink-0'>🛡️</span>
            <div className='w-full'>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                The Ragheb Guarantee: <span className='text-blue-500'>Created by Hand, Maintained for Success.</span>
              </h3>
              <p className='text-gray-400 text-sm sm:text-base'>
                Every line of code is written by me from scratch — no bloated templates, no shortcuts. To ensure your peace of mind, I offer <span className='font-bold text-white'>3 free maintenance sessions</span> for every initial project to ensure everything runs perfectly as you grow.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div key={index} className='border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-500 transition'>
              <div className='text-3xl sm:text-4xl mb-3 sm:mb-4'>{service.icon}</div>
              <h3 className='text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4'>{service.title}</h3>
              <p className='text-gray-400 text-sm sm:text-base'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
