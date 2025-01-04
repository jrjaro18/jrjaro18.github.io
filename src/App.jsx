import React, { useEffect, useState } from 'react'
import NewHome from './pages/NewHome'
import OldHome from './pages/OldHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Post from './pages/Post'
import SB_Auth from './pages/SB_Auth'
import Writer from './pages/Writer'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.toggle('dark', true)
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.toggle('dark', false)
    }
  }

  // how to add keyboard shortcut for toggling theme
  useEffect(() => {
    console.log('adding keyboard shortcut')
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === 'X') {
        toggleTheme()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [theme])


  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path='*' element={<NewHome />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/old' element={<OldHome />} />
        <Route path='/auth' element={<SB_Auth />} />
        <Route path='/protected' element={<Writer />} />
      </Routes>
      <>
        <div className='fixed cursor-pointer bottom-3 right-3 active:scale-75 text-3xl md:text-base md:hover:-translate-y-3 md:hover:scale-[2] duration-700' onClick={() => toggleTheme()}>
          <div className='relative'>
            <div className='absolute bg-yellow-400 h-full w-full blur-md bg-opacity-35'/>
            {
              theme === 'dark' ? '☀️' : '🌙'
            }
          </div>
        </div>
      </>
    </BrowserRouter>
  )
}

export default App