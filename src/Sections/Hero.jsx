import React from 'react'
import joe from '../assets/WhatsApp Image 2026-04-03 at 12.50.47 AM.jpeg'

function Hero() {
  return (
    <div className='bg-slate-950 text-white min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20'>
      <div className='max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12'>
        {/* Right Column - Image */}
        <div className='flex-1 flex justify-center'>
          <div className='w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 sm:border-4 border-blue-500 shadow-2xl'>
            <img src={joe} alt="Youssef Ragheb" className='w-full h-full object-cover' />
          </div>
        </div>
        
        {/* Left Column - Text */}
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4'>
            Youssef <span className='text-blue-500'>Ragheb</span>
          </h1>
          <p className='text-blue-400 text-lg sm:text-xl font-semibold mb-4 sm:mb-6 tracking-widest'>FULL-STACK ENGINEER</p>
    
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight'>
            Build your personal website from Scratch, <span className='text-blue-500'>Scaling with Purpose.</span>
          </h2>
          
          <p className='text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0'>
            Specializing in <span className='text-blue-500'>React & Node.js</span> — turning complex ideas into seamless user experiences.
          </p>
          
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg flex items-center justify-center lg:justify-start gap-2 transition mx-auto lg:mx-0'>
            View My Work <span>↓</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
