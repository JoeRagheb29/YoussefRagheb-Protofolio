import React, { useState } from 'react'
import '../index.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-slate-950 text-white py-4 sm:py-6 px-4 sm:px-8 border-b border-slate-800 sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className="logo text-xl sm:text-2xl font-bold text-blue-400">YR</div>
        
        {/* Mobile menu button */}
        <button 
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className='hidden md:flex justify-center gap-6 lg:gap-8 items-center flex-1 ml-6 lg:ml-12 text-sm lg:text-base'>
          <li className='hover:text-blue-400 transition cursor-pointer'>Home</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>About</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Education</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Skills</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Services</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Projects</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Certificates</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Contact</li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className='md:hidden mt-4 space-y-3 border-t border-slate-800 pt-4'>
          <li className='hover:text-blue-400 transition cursor-pointer'>Home</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>About</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Education</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Skills</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Services</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Projects</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Certificates</li>
          <li className='hover:text-blue-400 transition cursor-pointer'>Contact</li>
        </ul>
      )}
    </div>
  )
}

export default Navbar
