import React from 'react'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className='max-w-[80%] mx-auto'>
      <Navbar />
      <div className='flex mt-40'>
        <img className='w-1/2' src="" alt="Berkly svg" />
        <div>
          <h1 className='text-3xl font-bold w-1/2 font-title'>AN IMMUTABLE VOICE IN POLLS</h1>
          <p className='text-gray-500'>Berkly is a system of checks and balances to create and distribute verifiable, 
            tamper-proof polls on the blockchain.</p>
        </div>
      </div>
    </div>
  )
}

export default App
