import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Courses from './components/Courses';
import RefundCancellation from './components/RefundCancellation';
import PageNotFound from './components/PageNotFound';
import Staff from './components/Staff';
import TC from './components/TC';


function App() {

  return (
    <Router>
  <Header />
  <div className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-registration" element={<StudentRegistration />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/refund-cancellation" element={<RefundCancellation />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/terms-conditions" element={<TC />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
  <Footer />
</Router>
  )
}

export default App
