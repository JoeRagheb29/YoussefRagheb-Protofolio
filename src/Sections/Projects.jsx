import React from 'react'

function Projects() {
  const projects = [
    {
      title: "Event Attendance System",
      description: "A smart attendance tracking platform featuring secure role-based authentication, member attendance tracking (Present/Absent per session), individual attendance reports with engagement rates, full CRUD operations for members and sessions, real-time dashboard analytics, and light/dark mode support. Architected with a migration from SQLite to PostgreSQL via Supabase for scalability. Fully built independently.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "Supabase", "Vercel", "Tailwind CSS"],
      image: "project-1"
    },
    {
      title: "Products Builder – Full-Stack (MERN)",
      description: "A solo full-stack product management system with 100% CRUD coverage, responsive UI tested on 10+ screen sizes, and a Node.js/Express back end integrated with MongoDB supporting 1000+ product records via 5+ RESTful APIs.",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: "project-2"
    },
    {
      title: "Mohamed Wael Clinic – Medical Website",
      description: "A front-end medical clinic website enabling patients to access services and book appointments. Features 6 main pages with 18+ content sections, including a homepage with 9+ key sections. Integrated a custom WordPress + PHP form system generating 100+ monthly requests. Fully responsive across mobile, tablet, and laptop.",
      tags: ["WordPress", "PHP", "CSS", "Responsive Design"],
      image: "project-3"
    }
  ]

  return (
    <div className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4'>Projects</h2>
        <p className='text-center text-gray-400 text-sm sm:text-base mb-12 sm:mb-16'>A selection of things I've built.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition group flex flex-col'>
              {/* Image Placeholder */}
              <div className='bg-linear-to-br from-blue-600 to-blue-900 h-32 sm:h-40 lg:h-48 flex items-center justify-center text-center p-3 sm:p-4 group-hover:from-blue-700 group-hover:to-blue-950 transition'>
                <p className='text-xs sm:text-sm font-semibold'>{project.image}</p>
              </div>
              
              <div className='p-4 sm:p-5 lg:p-6 flex flex-col grow'>
                <h3 className='text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3'>{project.title}</h3>
                <p className='text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 grow'>{project.description}</p>
                
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mb-3 sm:mb-4'>
                  {project.tags.map((tag, i) => (
                    <span key={i} className='bg-slate-800 text-blue-400 text-xs px-2 sm:px-3 py-1 rounded-full'>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href='#' className='text-blue-500 hover:text-blue-400 font-semibold flex items-center gap-2 text-sm sm:text-base'>
                  View Project <span>→</span>
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
