import React from 'react'
import { useTheme } from '../context/useTheme'

function Footer() {
  const { isDark } = useTheme()

  return (
    <div className={`border-t py-6 sm:py-8 px-4 sm:px-8 transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
      <div className='max-w-7xl mx-auto text-center'>
        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>© 2026 Youssef Ragheb. Built with React.</p>
      </div>
    </div>
  )
}

export default Footer
