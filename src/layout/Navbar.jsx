import { useState } from 'react'
import { useTheme } from '../context/useTheme'
import '../index.css'
import '@fortawesome/fontawesome-free/css/all.css'

function Navbar() {
  const [isOpenMenu , setIsOpenMenu ] = useState(false);
  const [isHere, setIsHere] = useState(false);
  const { isDark, toggleTheme } = useTheme()
  const items = ['Home', 'About', 'Education', 'Skills', 'Services', 'Projects', 'Certificates', 'Contact']


  const handleItemClick = (item) => {
    setIsHere(item);
  }

  return (
    <>
      <div className={`${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'} py-4 px-6 border-b sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300`}>
        <nav className="max-w-7xl mx-auto flex items-center">
          <div className={`logo text-2xl font-bold ${isDark ? 'text-blue-400 hover:text-cyan-400' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300 cursor-pointer transform hover:scale-110`}>YR</div>

          {/* Desktop nav */}
          <ul className="hidden md:flex flex-1 justify-center gap-8 items-center ml-12">
            {items.map((item, idx) => (
              <li
                key={item}
                className={`nav-item cursor-pointer transition-all duration-300 relative group ${
                  isHere === item 
                    ? isDark ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'
                    : isDark ? 'text-white hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => handleItemClick(item)}
                style={{animationDelay: `${idx * 0.05}s`}}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDark ? 'bg-linear-to-r from-blue-400 to-cyan-400' : 'bg-linear-to-r from-blue-600 to-blue-400'} group-hover:w-full transition-all duration-300`}></span>
              </li>
            ))}
          </ul>

          {/* Theme toggle and Hamburger */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={toggleTheme}
              className={`transition-all duration-300 text-xl hover:scale-125 ${
                isDark 
                  ? 'text-yellow-400 hover:text-yellow-300' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>

            <button
              className={`md:hidden transition-colors hover:scale-125 ${isDark ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'}`}
              onClick={() => setIsOpenMenu((p) => !p)}
              aria-label="Toggle menu"
            >
              {isOpenMenu ? <i className="fas fa-times text-2xl animate-rotate"></i> : <i className="fas fa-bars text-2xl"></i>}
            </button>
          </div>
        </nav>

        {/* Mobile sliding menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 z-50 ${
            isDark
              ? `bg-slate-900 shadow-lg shadow-blue-500/20 ${isOpenMenu ? 'translate-x-0' : 'translate-x-full'}`
              : `bg-slate-100 shadow-lg shadow-blue-300/20 ${isOpenMenu ? 'translate-x-0' : 'translate-x-full'}`
          }`}
        >
          <div className="py-6 px-6">
            <div className="flex items-center justify-between mb-6">
              <div className={`logo text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>YR</div>
              <button 
                className={`cursor-pointer transition-colors hover:scale-125 ${isDark ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'}`} 
                onClick={() => setIsOpenMenu(false)} 
                aria-label="Close menu"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {items.map((item, idx) => (
                <li 
                  key={item}
                  className={`nav-item cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg ${
                    isHere === item 
                      ? isDark ? 'bg-blue-500/20 text-blue-400 font-semibold' : 'bg-blue-100 text-blue-600 font-semibold'
                      : isDark ? 'text-white hover:bg-slate-800 hover:text-blue-400' : 'text-slate-700 hover:bg-slate-200 hover:text-blue-600'
                  }`}
                  onClick={() => {
                    handleItemClick(item)
                    setIsOpenMenu(false)
                  }}
                  style={{animationDelay: `${idx * 0.05}s`}}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;

