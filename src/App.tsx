// import './App.css'
// import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle} from '@/components/mode-toggle'
// import { GithubButton} from '@/components/github-button'
// import { LinkedinButton} from '@/components/linkedin-button'
// import { EmailButton } from '@/components/email-button'
// import { Carousel } from '@/components/carousel'
// import { ScrollArea } from "@/components/ui/scroll-area"

// function App() {

//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <div className="h-auto">
//         <ScrollArea className="h-screen">
//           <div className="lg:flex lg:justify-between w-screen gap-20 px-10 lg:px-0 mx-auto max-w-screen-xl">
//             <div className="lg:sticky lg:top-0 lg:flex space-y-5 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:pt-25 py-10">
//               <div className="text-4xl font-bold">Griffin Westerman</div>
//               <div className="text-lg text-foreground/80">Software Developer</div>
//               <div className="space-y-5 w-full">
//                 <div className="flex items-center justify-start gap-5 relative">
//                   <GithubButton />
//                   <LinkedinButton />
//                   <EmailButton />
//                   <ModeToggle />
//                 </div>
//                 <Carousel />
//               </div>
//             </div>
//             <div className="space-y-10 lg:w-1/2 lg:pt-25 pb-20">
//               <div className="w-fit h-fit rounded-md text-foreground/80">
//                 <p>I currently work as a Software Developer at <a className="underline text-foreground/90 hover:text-foreground" href="https://www.nagios.com/" target="_blank" rel="noreferrer">Nagios</a> as a full-stack software developer.</p>
//                 <br/>
//                 <p>I graduated from the U of M in 2023 with a BS in Computer Science.</p>
//                 <br/>
//                 <p>I'm dedicated to learning as much as I can wherever I go.</p>
//                 <br/>
//                 <p>I'm a classically trained cellist.</p>
//               </div>
              // <div className="w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
              //   <div className="text-foreground/70 font-bold lg:min-w-20 lg:max-w-20 pb-2">August 2023 - Present</div>
              //   <div className="space-y-2">
              //     <div className="font-bold">Full Stack Software Developer - Nagios</div>
              //     <div className="ml-3 text-foreground/80">
              //       <li>Led and was the primary contributor to the frontend overhaul of <b>Nagios'</b> second largest product, rewriting a PHP codebase to a <b>Vite + React app</b> leveraging <b>TailwindCSS, shadcn, React Router</b>, etc.</li>
              //       <li>Co-led the complete overhaul the same product, converting an <b>Elasticsearch</b> backend to <b>Opensearch</b>, and redesigning the UI and UX.</li>
              //       <li>Developed numerous features and resolved even more bugs, consistently working with frontend and backend.</li>
              //       <li>Implemented page exporting by bundling a script with <b>Puppeteer</b> and Node using <b>esbuild</b> and <b>Node SEA</b>.</li>
              //       <li>Despite being the junior-most developer, quickly became a reliable source of knowledge for my peers.</li>
              //     </div>
              //   </div>
              // </div>
              // <div className="w-full h-fit rounded-md p-5 mb-5 bg-secondary/50 lg:flex gap-5 hover:scale-[1.02] transition-transform text-sm lg:text-base">
              //   <div className="text-foreground/70 font-bold lg:min-w-20 lg:max-w-20 pb-2">Graduated May 2023</div>
              //   <div className="space-y-2">
              //     <div className="font-bold">Bachelor of Science in Computer Science - U of M</div>
              //     <div className="ml-3 text-foreground/80">
              //       <li>Implemented K-means clustering using Cuda, OpenMP, and MPI in C</li>
              //       <li>Created many browser-based games using typescript and gfx libraries</li>
              //       <li>Worked within a team to develop an automated drone simulation in C++ and JS</li>
              //     </div>
              //   </div>
              // </div>
            // </div>
//           </div>
//         </ScrollArea>
//       </div>
//     </ThemeProvider>
//   )
// }

// export default App

import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Home from '@/pages/home'
import Resume from '@/pages/resume'
import Projects from '@/pages/projects'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Layout>
        </Router>
    </ThemeProvider>
  )
}

export default App
