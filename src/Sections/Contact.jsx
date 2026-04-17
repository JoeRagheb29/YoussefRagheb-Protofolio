import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div id='contact' className='bg-slate-950 text-white py-12 sm:py-20 px-4 sm:px-8'>
      <div className='max-w-2xl mx-auto w-full'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4'>Get in Touch</h2>
        <p className='text-center text-gray-400 text-sm sm:text-base mb-10 sm:mb-12'>Have a project in mind? Let's talk.</p>
        
        <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6 mb-10 sm:mb-12'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            className='w-full bg-slate-900 border border-slate-700 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base'
            required
          />
          
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full bg-slate-900 border border-slate-700 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base'
            required
          />
          
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            rows='6'
            className='w-full bg-slate-900 border border-slate-700 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none text-sm sm:text-base'
            required
          ></textarea>
          
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition text-sm sm:text-base'
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className='flex justify-center gap-6 sm:gap-8'>
          <a href='#' className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl' title='GitHub'>
            🐙
          </a>
          <a href='#' className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl' title='LinkedIn'>
            💼
          </a>
          <a href='#' className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl' title='Email'>
            ✉️
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
