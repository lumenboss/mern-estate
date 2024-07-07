import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'
import SignIn from './pages/sign_in'
import SignUp from './pages/sign_up'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/"  element={<Home/>} />
        <Route path = "/about"  element={<About/>} />
        <Route path = "/profile"  element={<Profile/>} />
        <Route path = "/sign-in"  element={<SignIn/>} />
        <Route path = "/sign-up"  element={<SignUp/>} />

      </Routes>
    </BrowserRouter>
  
    
  )
}

export default App
