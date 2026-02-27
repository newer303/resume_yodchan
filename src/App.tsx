import { useState } from 'react'
import Resume from './Resume'
import Projects from './Project'
import './App.css'

function App() {
  const [currentPage] = useState('resume')
  // setCurrentPage

  return (
    <>
      {/* <nav className="app-nav">
        <div className="container">
          <button
            className={`nav-btn ${currentPage === 'resume' ? 'active' : ''}`}
            onClick={() => setCurrentPage('resume')}
          >
            Resume
          </button>
          <button
            className={`nav-btn ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => setCurrentPage('projects')}
          >
            Portfolio
          </button>
        </div>
      </nav> */}
      {currentPage === 'resume' && <Resume />}
      {currentPage === 'projects' && <Projects />}
    </>
  )
}

export default App
