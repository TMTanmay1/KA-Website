import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentRegistration />} />
      </Routes>
    </Router>
  )
}

export default App
