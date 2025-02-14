import { Carousel } from '@/components/carousel'
import { Link } from 'react-router-dom'
import React from 'react'

function Layout({ children } : { children: React.ReactNode }) {

  return (
    <div className="min-h-screen overflow-y-scroll">
      <div className="antialiased max-w-3xl mx-2 mt-0 lg:pt-8 md:mx-auto lg:mx-auto min-h-full">
        <div className="flex flex-col min-h-[95vh]">
          <div className="flex-auto min-w-0 mt-0 md:mt-6 flex flex-col px-2 md:px-0">
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="text-2xl font-bold mt-5 text-foreground/90">Griffin Westerman</Link>
              <Link to="/resume" className="text-foreground/80">resume</Link>
            </div>
            <div className="text-lg text-foreground/80">Software Developer</div>
          {children}
          </div>
          <div className="flex items-center mx-auto mt-auto mb-5">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
