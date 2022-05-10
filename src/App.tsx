import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import useEventListener from '@use-it/event-listener'
import { useState } from 'react'
import './App.css'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleKeyDown = ({ key }: { key: string }) => {
    if (key === ' ') {
      setIsPlaying(!isPlaying)
    }
  }

  useEventListener('keydown', handleKeyDown)

  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <div className='App'>
      <MetroContextProvider>
        <Metronome isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </MetroContextProvider>
    </div>
  )
}

export default App
