import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import './App.css'
import { KeyboardHandler } from './components/EventHandlers'
import Header from './components/Header'
import KVContextProvider from './components/KVContextProvider'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'
import Sidebar from './components/Sidebar'

function App() {
  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <div className='App'>
      <MetroContextProvider>
        <KVContextProvider>
          <Header />
          <KeyboardHandler />
          <Metronome />
          <Sidebar title='Settings' />
        </KVContextProvider>
      </MetroContextProvider>
    </div>
  )
}

export default App
