import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='wrapper bg-zinc-800 overflow-hidden w-full h-screen'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App