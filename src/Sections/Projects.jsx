import { useState, useEffect } from 'react'
import { useTheme } from '../context/useTheme'
import productBuilder from '../assets/product-builder.png'
import EventSystem from '../assets/event-attendance-system.png'
import mohamedWael from '../assets/mohamed-wael.png'
import portfolio from '../assets/myPortfolio.png'
import apartmentsHub from '../assets/apartmentsHub.png'

function Projects() {
  const { isDark } = useTheme()
  const [animatedIndices, setAnimatedIndices] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setAnimatedIndices((prev) => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "ApartmentsHub - Apartment rental platform",
      description: "A comprehensive rental platform connecting apartment owners and tenants with a modern, user-friendly interface. It enables apartment owners to list properties and tenants to search, view, and rent apartments. Features role-based access control, real-time image management with Cloudinary integration.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Vercel", "Responsive Design"],
      image: apartmentsHub,
      href:"https://apartmentsHub.vercel.app"
    },
    {
      title: "Youssef Ragheb Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Features a modern design with smooth scrolling, responsive layout, and interactive elements. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS" , "EmailJS" , "Vercel" , "Responsive Design"],
      image: portfolio,
      href: "https://youssef-ragheb-protofolio.vercel.app/"
    },
    {
      title: "Event Attendance System",
      description: "A smart attendance tracking platform featuring secure role-based authentication, member attendance tracking (Present/Absent per session), individual attendance reports with engagement rates, full CRUD operations for members and sessions, real-time dashboard analytics, and light/dark mode support.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Vercel", "Tailwind CSS"],
      image: EventSystem,
      href: "https://event-attendance-system-three.vercel.app/"
    },
    {
      title: "Mohamed Wael Clinic – Medical Website",
      description: "A front-end medical clinic website enabling patients to access services and book appointments. Features 6 main pages with 18+ content sections, including a homepage with 9+ key sections. Integrated a custom WordPress + PHP form system generating 100+ monthly requests. Fully responsive across mobile, tablet, and laptop.",
      tags: ["WordPress", "PHP", "CSS", "Responsive Design"],
      image: mohamedWael,
      href: "https://joeragheb29.github.io/Clinic-Project/"
    },
    {
      title: "Products Builder – Full-Stack (MERN)",
      description: "A solo full-stack product management system with 100% CRUD coverage, responsive UI tested on 10+ screen sizes, and a Node.js/Express back end integrated with MongoDB supporting 1000+ product records via 5+ RESTful APIs.",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: productBuilder,
      href: "https://products-builder-seven.vercel.app/"
    }
  ]

  return (
    <div id='projects' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 animate-fadeInDown ${isDark ? 'text-white' : 'text-slate-900'}`}>Projects</h2>
        <p className={`text-center text-sm sm:text-base mb-12 sm:mb-16 animate-fadeInDown ${isDark ? 'text-gray-400' : 'text-slate-600'}`} style={{animationDelay: '0.2s'}}>A selection of things I've built.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`project-card border rounded-lg overflow-hidden transition-all duration-700 group flex flex-col hover-lift ${
                isDark ? 'border-slate-700 hover:border-blue-500' : 'border-slate-200 hover:border-blue-600'
              } ${
                animatedIndices.includes(index)
                  ? 'animate-bounceIn'
                  : 'opacity-0'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className='bg-linear-to-br from-blue-600 to-blue-900 h-32 sm:h-40 lg:h-48 group-hover:from-blue-700 group-hover:to-blue-950 transition overflow-hidden relative'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='object-cover h-full w-full group-hover:scale-110 transition-transform duration-500' 
                />
              </div>
              
              <div className={`p-4 sm:p-5 lg:p-6 flex flex-col grow ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 transition-colors ${isDark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{project.title}</h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 grow transition-colors ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-700'}`}>{project.description}</p>
                
                <div className='flex flex-wrap gap-2 mb-3 sm:mb-4'>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className='bg-slate-800 text-blue-400 text-xs px-2 sm:px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-all group-hover:scale-105'
                      style={{animationDelay: `${i * 0.05}s`}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.href} 
                  className='text-blue-500 hover:text-blue-400 font-semibold flex items-center gap-2 text-sm sm:text-base group/link'
                >
                  View Project <span className='group-hover/link:translate-x-1 transition-transform'>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
