import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'

function App() {
  const _currentTab = "home";
  
  return (
    <div className='h-[100%]'>
      <Navbar currentTab={_currentTab} />
      {_currentTab === "home" && <Home />}
    </div>
  )
}

export default App
