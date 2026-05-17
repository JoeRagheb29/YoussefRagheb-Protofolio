import React from 'react'
import { useTheme } from '../context/useTheme'
import NTIcer from '../assets/NTI.jpeg'
import NASAcer from '../assets/NASA.jpeg'
import Innovacer from '../assets/innovaEgypt.jpeg'
import Sprintcer from '../assets/sprints.jpeg'
import AIcer from '../assets/GenerativeAI.jpeg'

function Certificates() {
  const { isDark } = useTheme()
  const certificates = [
    {
      title: "NASA Space Apps Cairo Hackathon 2024",
      organization: "NASA, IEEE Egypt Section",
      description: "Certificate of Appreciation for participation in the 10th Edition of NASA Space Apps Cairo Hackathon 2024, tackling real-world challenges through innovation and teamwork.",
      tags: ["Hackathon", "Innovation", "Teamwork"],
      image: NASAcer
    },
    {
      title: "NTI Cybersecurity Academy",
      organization: "NTI, INTRA, EG-CERT",
      description: "Successfully completed the Cybersecurity Academy (Undergraduate Level) – 2025. 60 technical hours covering network security, threat analysis, and incident response.",
      tags: ["Cybersecurity", "60 hrs", "Undergraduate"],
      image: NTIcer

    },
    {
      title: "InnovEgypt Program",
      organization: "ITIDA, TIEC",
      description: "Completed a 45-hour training course on innovation and entrepreneurship, culminating in a final project for a potential startup.",
      tags: ["Innovation", "Entrepreneurship", "45 hrs"],
      image: Innovacer
    },
    {
      title: "Sprints × Microsoft Summer Camp",
      organization: "Sprints, Microsoft",
      description: "Certificate for the successful completion of the Sprints × Microsoft Summer Camp – Web Development track with a 40-hour learning workload.",
      tags: ["Web Development", "Microsoft", "40 hrs"],
      image: Sprintcer
    },
    {
      title: "Career Essentials in Generative AI",
      organization: "LinkedIn Learning, Microsoft",
      description: "Completed the Career Essentials in Generative AI learning path covering Microsoft Copilot, Generative AI, and Responsible AI principles.",
      tags: ["Generative AI", "Microsoft Copilot", "Responsible AI"],
      image: AIcer
    }
  ]

  return (
    <div id='certificates' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <span>🏆</span> Certificates
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Courses, hackathons, and programs I've completed.</p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fadeInDown' style={{animationDelay: '0.2s'}}>
          {certificates.map((cert, index) => (
            <div key={index} className={`border rounded-lg overflow-hidden transition group flex flex-col animate-fadeInDown ${isDark ? 'border-slate-700 hover:border-blue-500' : 'border-slate-200 hover:border-blue-600'}`}>
              <img className='image object-cover text-xs font-semibold text-gray-500' src={cert.image} alt={cert.title} />              
              <div className={`discription p-4 sm:p-5 lg:p-6 flex flex-col grow ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.title}</h3>
                <p className={`text-sm mb-2 sm:mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{cert.organization}</p>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 grow ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{cert.description}</p>
                
                <div className='tags flex flex-wrap gap-2'>
                  {cert.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded ${isDark ? 'bg-slate-800 text-gray-300' : 'bg-slate-200 text-slate-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates
