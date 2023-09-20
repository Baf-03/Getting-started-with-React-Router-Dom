import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ResponsiveAppBar from './Components/Navbar'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/Signup'
import Album from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResponsiveAppBar/>
     <Routes>
        <Route index element={<Album/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="*" element={<NotFound/>}/>



        {/* SignIn */}

      </Routes>
    </>
  )}
export default App
