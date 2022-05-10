import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import './App.css'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'

function App() {
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <div className='App'>
      <MetroContextProvider>
        <Metronome />
      </MetroContextProvider>
    </div>
  )
}

export default App
