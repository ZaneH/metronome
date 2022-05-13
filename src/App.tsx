import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import { KeyboardHandler } from './components/EventHandlers'
import Header from './components/Header'
import KVContextProvider from './components/KVContextProvider'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'
import Sidebar from './components/Sidebar'

const theme = {
  dark: {
    background: {
      primary: '#1f1f20',
      secondary: '#343436',
      sidebar: '#181819',
      bpmBg: 'black',
    },
    button: {
      primaryBg: 'white',
      secondaryBg: '#2a2a2c',
      activeBg: 'green',
      color: 'black',
    },
    text: {
      primary: 'white',
    },
  },
}

export type CustomThemeType = typeof theme

const StyledApp = styled.div`
  background-color: ${(p) => p.theme.dark.background.primary};
`

function App() {
  appWindow.setSize(new LogicalSize(350, 500))
  appWindow.setMinSize(new LogicalSize(350, 500))

  return (
    <ThemeProvider theme={theme as CustomThemeType}>
      <StyledApp className='App'>
        <MetroContextProvider>
          <KVContextProvider>
            <Header />
            <KeyboardHandler />
            <Metronome />
            <Sidebar title='Settings' />
          </KVContextProvider>
        </MetroContextProvider>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
