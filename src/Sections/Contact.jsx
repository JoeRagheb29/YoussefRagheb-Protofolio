import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTheme } from '../context/useTheme'

function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const sendMessage = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_ragheb", "template_portfolio", e.target, "B5BOuZ3rx0qslZCOB")
      .then((result) => {
        console.log('Email sent successfully:', result)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
        
    console.log('Form submitted Successfully:', formData)
    setFormData({ user_name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div id='contact' className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} py-12 sm:py-20 px-4 sm:px-8 transition-colors duration-300`}>
      <div className='max-w-2xl mx-auto w-full'>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get in Touch</h2>
        <p className={`text-center text-sm sm:text-base mb-10 sm:mb-12 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Have a project in mind? Let's talk.</p>

        <form onSubmit={(e) => sendMessage(e)} className='space-y-4 sm:space-y-6 mb-10 sm:mb-12 animate-slideInLeft' style={{animationDelay: '0.4s'}}>
          <input
            type='text'
            name='user_name'
            placeholder='Your Name'
            value={formData.user_name}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 sm:px-6 py-2 sm:py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
            required
          />
          
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 sm:px-6 py-2 sm:py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition text-sm sm:text-base ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
            required
          />
          
          <textarea
            name='message'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            rows='6'
            className={`w-full border rounded-lg px-4 sm:px-6 py-2 sm:py-3 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none text-sm sm:text-base ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
            required
          ></textarea>
          
          <button
            type='submit'
            className={`w-full font-semibold py-2 sm:py-3 rounded-lg transition text-sm sm:text-base transform hover:scale-105 duration-200 ${
              submitted 
                ? 'bg-green-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50'
            }`}
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>

        <div className='flex justify-center gap-6 sm:gap-8 animate-fadeInDown' style={{animationDelay: '0.6s'}}>
          <a 
            href='https://github.com/JoeRagheb29' 
            className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl transform hover:scale-150 hover:-rotate-12 duration-300' 
            title='GitHub'
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href='https://www.linkedin.com/in/youssef-ragheb/' 
            className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl transform hover:scale-150 hover:rotate-12 duration-300' 
            title='LinkedIn'
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href='mailto:youssifragheb838@gmail.com' 
            className='text-gray-400 hover:text-blue-500 transition text-xl sm:text-2xl transform hover:scale-150 duration-300' 
            title='Email'
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
