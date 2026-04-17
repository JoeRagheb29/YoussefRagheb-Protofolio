import React, { useState, useEffect } from 'react'
import joe from '../assets/master-photo3.jpeg'
import '../styles/hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  return (
    <div className='bg-linear-to-t from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-20'>
      <div className='max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12'>

        <div className={`left-side flex-1 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className='relative group'>
            <div className='highlighter absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse'></div>
            <div className='image relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-4 border-blue-500 shadow-2xl transition-transform duration-500 group-hover:scale-105'>
              <img src={joe} alt="Youssef Ragheb" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
        
        <div className={`right-side flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className='inline-block lg:inline-block mb-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold animate-fadeInDown'>
            <i className='fas fa-code'></i> Welcome to my portfolio
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate-fadeInDown' style={{animationDelay: '0.2s'}}>
            Youssef <span className='bg-linear-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>Ragheb</span>
          </h1>

          <p className='text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 tracking-widest animate-fadeInDown' style={{animationDelay: '0.4s'}}>
            FULL-STACK ENGINEER
          </p>
    
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight animate-fadeInDown' style={{animationDelay: '0.6s'}}>
            Build your personal website from Scratch, <span className='bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent'>Scaling with Purpose.</span>
          </h2>
          
          <p className='text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 animate-fadeInDown' style={{animationDelay: '0.8s'}}>
            Specializing in <span className='text-blue-400 font-semibold'>React & Node.js</span> — turning complex ideas into seamless user experiences.
          </p>
          
          <div className='animate-fadeInDown' style={{animationDelay: '1s'}}>
            <button className='group relative bg-linear-to-r from-blue-600
              to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white 
              font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg flex items-center
              justify-center lg:justify-start gap-2 transition-all duration-300 
              mx-auto lg:mx-0 shadow-lg hover:shadow-blue-500/50 hover:scale-105 overflow-hidden'>

              <span className='relative z-10'>View My Work</span>
              <span className='relative z-10 animate-bounce'>↓</span>
              <div className='absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
