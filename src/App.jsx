import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
      </div>
    </Router>
  )
}

export default App