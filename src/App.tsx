import styled from 'styled-components'
import './App.css'
import { ControlCenter } from './components/ControlCenter'
import { MetroContextProvider } from './components/MetroContextProvider'
import { Ticker } from './components/Ticker'

const TickerWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transform: translate(0, 20vh);
`

function App() {
  return (
    <div className='App'>
      <MetroContextProvider>
        <TickerWrapper>
          <Ticker />
        </TickerWrapper>
        <ControlCenter />
      </MetroContextProvider>
    </div>
  )
}

export default App
