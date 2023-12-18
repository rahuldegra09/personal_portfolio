import React from 'react'
import Home from '@/components/Home'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Work from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Star from '@/components/canvas/Star'
import Navbar from '@/components/Navbar'

const page = () => {
  
  return (
    <section>
      <div className='relative z-0 bg-gradient-to-r from-black via-black to-black'>
        <div className='bg-back bg-cover bg-no-repeat'>
          <Navbar />
          <Home />
      </div>
      <About />
      <Experience/>
      <Tech/>
      <Work/>
      <Testimonials/>
      <div className="relative z-0">
        <Contact/>
        <Star/>
      </div>
      </div>
    </section>
  )
}

export default page