import { useState } from 'react'
import '../index.css'
import '@fortawesome/fontawesome-free/css/all.css'

function Navbar() {
  const [isOpenMenu , setIsOpenMenu ] = useState(false);
  const [isHere, setIsHere] = useState(false);
  const items = ['Home', 'About', 'Education', 'Skills', 'Services', 'Projects', 'Certificates', 'Contact']


  const handleItemClick = (item) => {
    setIsHere(item);
  }

  return (
    <>
      <div className="bg-slate-950 text-white py-4 px-6 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto flex items-center">
          <div className="logo text-2xl font-bold text-blue-400">YR</div>

          {/* Desktop nav */}
          <ul className="hidden md:flex flex-1 justify-center gap-8 items-center ml-12">
            {items.map((item) => (
              <li
                key={item}
                className={`nav-item cursor-pointer transition-colors duration-200 ${
                  isHere === item ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => handleItemClick(item)}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white ml-auto cursor-pointer"
            onClick={() => setIsOpenMenu((p) => !p)}
            aria-label="Toggle menu"
          >
            {isOpenMenu ? <i className="fas fa-times text-2xl"></i> : <i className="fas fa-bars text-2xl"></i>}
          </button>
        </nav>

        {/* Mobile sliding menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-lg transform transition-transform duration-300 z-50 ${
            isOpenMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="py-6 px-6">
            <div className="flex items-center justify-between mb-6">
              <div className="logo text-2xl font-bold text-blue-400">YR</div>
              <button className="text-white cursor-pointer" onClick={() => setIsOpenMenu(false)} aria-label="Close menu">
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item}
                  className={`nav-item cursor-pointer transition-colors duration-200 ${
                    isHere === item ? 'text-blue-400 font-semibold' : 'text-white hover:text-blue-400'
                  }`}
                  onClick={() => {
                    handleItemClick(item)
                    setIsOpenMenu(false)
                  }}>
                  {item}
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

