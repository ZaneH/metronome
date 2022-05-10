import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import { useState } from 'react'
import './App.css'
import KeyboardHandler from './components/KeyboardHandler'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <div className='App'>
      <MetroContextProvider isPlaying={isPlaying} setIsPlaying={setIsPlaying}>
        <KeyboardHandler />
        <Metronome />
      </MetroContextProvider>
    </div>
  )
}

export default App
