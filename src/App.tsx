import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import './App.css'
import KeyboardHandler from './components/KeyboardHandler'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'

function App() {
  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <div className='App'>
      <MetroContextProvider>
        <KeyboardHandler />
        <Metronome />
      </MetroContextProvider>
    </div>
  )
}

export default App
