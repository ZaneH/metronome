import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import styled from 'styled-components'
import './App.css'
import { KeyboardHandler, MouseHandler } from './components/EventHandlers'
import Header from './components/Header'
import KVContextProvider from './components/KVContextProvider'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'
import Sidebar from './components/Sidebar'
import ThemeProvider from './components/ThemeProvider'

const StyledApp = styled.div`
  background-color: ${(p) => p.theme.background.primary};
`

function App() {
  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <KVContextProvider>
      <ThemeProvider>
        <StyledApp className='App'>
          <MetroContextProvider>
            <Header />
            <KeyboardHandler />
            <MouseHandler />
            <Metronome />
            <Sidebar title='Settings' />
          </MetroContextProvider>
        </StyledApp>
      </ThemeProvider>
    </KVContextProvider>
  )
}

export default App
