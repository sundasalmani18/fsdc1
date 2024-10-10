import React from 'react'
import Login from '../component/login'
import Signup from '../component/signup'
import { Routes,Route } from 'react-router-dom'
import Home from '../component/home'
import Tododashboard from '../component/tododashboard'

const LayoutRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={< Tododashboard/>} />
            

      </Routes>
    </div>
  )
}

export default LayoutRoutes
