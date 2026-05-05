import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// ── Pages whose content manages their own width / must be edge-to-edge ──
const FULL_WIDTH_PAGES = ['/', '/login', '/about', '/contact']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  const isFullWidth =
    FULL_WIDTH_PAGES.includes(location.pathname) ||
    location.pathname.startsWith('/appointment') ||
    location.pathname.startsWith('/doctors')

  return (
    // smooth-scroll on <html> is set in index.css (see below)
    <div className="min-h-screen transition-colors duration-300">
      <ScrollToTop />
      <Navbar />

      {isFullWidth ? (
        /* Full-width — no wrapper at all, each page controls its own layout */
        <Routes>
          <Route path='/'                      element={<Home />} />
          <Route path='/doctors'               element={<Doctors />} />
          <Route path='/doctors/:speciality'   element={<Doctors />} />
          <Route path='/login'                 element={<Login />} />
          <Route path='/about'                 element={<About />} />
          <Route path='/contact'               element={<Contact />} />
          <Route path='/my-profile'            element={<MyProfile />} />
          <Route path='/my-appointments'       element={<MyAppointment />} />
          <Route path='/appointment/:docId'    element={<Appointment />} />
        </Routes>
      ) : (
        /* Constrained width — profile / appointments pages */
        <div className="mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12">
          <Routes>
            <Route path='/'                      element={<Home />} />
            <Route path='/doctors'               element={<Doctors />} />
            <Route path='/doctors/:speciality'   element={<Doctors />} />
            <Route path='/login'                 element={<Login />} />
            <Route path='/about'                 element={<About />} />
            <Route path='/contact'               element={<Contact />} />
            <Route path='/my-profile'            element={<MyProfile />} />
            <Route path='/my-appointments'       element={<MyAppointment />} />
            <Route path='/appointment/:docId'    element={<Appointment />} />
          </Routes>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App