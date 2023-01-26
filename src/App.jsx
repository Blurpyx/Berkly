import React from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  
  return (
    <div className='max-w-[80%] mx-auto'>
      <Navbar currentTab="home" />
      <div className='flex mt-40 justify-between'>
        <div className='max-w-[50%]'>
          <img className='w-[16.5rem] xl:w-[29.3rem] h-36 xl:h-64 absolute z-1' src="/images/svg-background.jpeg" />
          <img className='h-36 xl:h-64' src='/images/berkly-to-animate.svg' alt='Berkly' />
        </div>
        <div className='max-w-[50%]'>
          <h1 className='text-3xl font-bold font-title'>AN IMMUTABLE VOICE IN POLLS</h1>
          <p className='text-gray-500'>Berkly is a system of checks and balances to create and distribute verifiable, 
            tamper-proof polls on the blockchain.</p>
        </div>
      </div>
    </div>
  )
}

export default App
