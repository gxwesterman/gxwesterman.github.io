import { NavLink, Link } from 'react-router-dom'
import React from 'react'

function Layout({ children } : { children: React.ReactNode }) {

  return (
    <>
      <div className="absolute inset-0 bg-secondary !fixed z-0">
        <div className="absolute inset-0 opacity-40"></div>
        <div className="absolute inset-0 bg-noise"></div>
        <div className="absolute inset-0 dark:bg-black/40"></div>
      </div>
      <div className="min-h-screen overflow-y-scroll relative">
        <div className="antialiased max-w-3xl mx-2 mt-0 lg:pt-8 md:mx-auto lg:mx-auto min-h-full">
          <div className="flex flex-col min-h-[95vh]">
            <div className="flex-auto min-w-0 mt-0 md:mt-6 flex flex-col px-2 md:px-0">
              <div className="flex items-center justify-between w-full">
                <Link to="/" className="text-2xl font-bold mt-5 text-foreground/90">Griffin Westerman</Link>
                <div className="space-x-4">
                  <NavLink to="/resume" style={({ isActive }) => ({
                    color:
                      isActive ? "white" : ""
                  })} className="text-foreground/80 hover:text-foreground transition-colors">resume</NavLink>
                  <NavLink to="/projects" style={({ isActive }) => ({
                    color:
                      isActive ? "white" : ""
                  })} className="text-foreground/80 hover:text-foreground transition-colors">projects</NavLink>
                </div>
              </div>
              <div className="text-lg text-foreground/80">Software Developer</div>
            {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
