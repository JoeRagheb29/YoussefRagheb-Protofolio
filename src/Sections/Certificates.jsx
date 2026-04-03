import React from 'react'

function Certificates() {
  const certificates = [
    {
      title: "NASA Space Apps Cairo Hackathon 2024",
      organization: "NASA, IEEE Egypt Section",
      description: "Certificate of Appreciation for participation in the 10th Edition of NASA Space Apps Cairo Hackathon 2024, tackling real-world challenges through innovation and teamwork.",
      tags: ["Hackathon", "Innovation", "Teamwork"],
      image: "nasa-cert"
    },
    {
      title: "NTI Cybersecurity Academy",
      organization: "NTI, INTRA, EG-CERT",
      description: "Successfully completed the Cybersecurity Academy (Undergraduate Level) – 2025. 60 technical hours covering network security, threat analysis, and incident response.",
      tags: ["Cybersecurity", "60 hrs", "Undergraduate"],
      image: "nti-cert"
    },
    {
      title: "InnovEgypt Program",
      organization: "ITIDA, TIEC",
      description: "Completed a 45-hour training course on innovation and entrepreneurship, culminating in a final project for a potential startup.",
      tags: ["Innovation", "Entrepreneurship", "45 hrs"],
      image: "innov-cert"
    },
    {
      title: "Sprints × Microsoft Summer Camp",
      organization: "Sprints, Microsoft",
      description: "Certificate for the successful completion of the Sprints × Microsoft Summer Camp – Web Development track with a 40-hour learning workload.",
      tags: ["Web Development", "Microsoft", "40 hrs"],
      image: "sprints-cert"
    },
    {
      title: "Career Essentials in Generative AI",
      organization: "LinkedIn Learning, Microsoft",
      description: "Completed the Career Essentials in Generative AI learning path covering Microsoft Copilot, Generative AI, and Responsible AI principles.",
      tags: ["Generative AI", "Microsoft Copilot", "Responsible AI"],
      image: "linkedin-cert"
    }
  ]

  return (
    <div className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4'>
            <span>🏆</span> Certificates
          </h2>
          <p className='text-gray-400 text-sm sm:text-base'>Courses, hackathons, and programs I've completed.</p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {certificates.map((cert, index) => (
            <div key={index} className='border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition group flex flex-col'>
              {/* Certificate Image Placeholder */}
              <div className='bg-linear-to-br from-slate-800 to-slate-900 h-24 sm:h-32 lg:h-40 flex items-center justify-center text-center p-3 sm:p-4 group-hover:from-slate-700 group-hover:to-slate-800 transition'>
                <p className='text-xs font-semibold text-gray-500'>{cert.image}</p>
              </div>
              
              <div className='p-4 sm:p-5 lg:p-6 flex flex-col grow'>
                <h3 className='text-base sm:text-lg font-bold mb-1 sm:mb-2'>{cert.title}</h3>
                <p className='text-sm text-blue-400 mb-2 sm:mb-3'>{cert.organization}</p>
                <p className='text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 grow'>{cert.description}</p>
                
                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {cert.tags.map((tag, i) => (
                    <span key={i} className='bg-slate-800 text-gray-300 text-xs px-2 py-1 rounded'>
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
