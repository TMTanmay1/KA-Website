import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Courses from './components/Courses';
import RefundCancellation from './components/RefundCancellation';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
