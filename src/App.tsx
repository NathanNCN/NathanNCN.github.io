import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { GymPage } from './pages/GymPage'
import { HomePage } from './pages/HomePage'
import { InterviewPrepPage } from './pages/InterviewPrepPage'
import { LearningPage } from './pages/LearningPage'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-svh bg-canvas text-ink antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/interview-prep" element={<InterviewPrepPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
