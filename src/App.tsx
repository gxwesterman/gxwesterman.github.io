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
