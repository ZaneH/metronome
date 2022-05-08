import { createContext, FC, useState } from 'react'

type MetroContextType = {
  children?: React.ReactNode

  bpm?: string
  isPlaying?: boolean

  setBpm?: (bpm: string) => void
  setIsPlaying?: (isPlaying: boolean) => void
}

export const MetroContext = createContext({} as MetroContextType)

const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState('2')
  const [isPlaying, setIsPlaying] = useState(false)
  const context: MetroContextType = {
    bpm,
    isPlaying,

    setBpm,
    setIsPlaying,
  }

  return (
    <MetroContext.Provider value={context}>{children}</MetroContext.Provider>
  )
}

export default MetroContextProvider
