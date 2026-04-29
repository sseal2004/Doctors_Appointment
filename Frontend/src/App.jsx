import React from 'react'
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

function App() {
  const location = useLocation()

  // Pages that should be truly full-width (no side padding)
  const fullWidthPages = ['/login']
  const isFullWidth = fullWidthPages.includes(location.pathname)

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <div className={isFullWidth ? 'w-full' : 'mx-auto max-w-screen-2xl px-2 sm:px-8 lg:px-0'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/my-appointment' element={<MyAppointment />} />
          <Route path='/appointment/:docId' element={<Appointment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App