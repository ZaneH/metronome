import './App.css'
import { MetroContextProvider } from './components/MetroContextProvider'
import Metronome from './components/Metronome'

function App() {
  return (
    <div className='App'>
      <MetroContextProvider>
        <Metronome />
      </MetroContextProvider>
    </div>
  )
}

export default App
