import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

type MetroContextType = {
  children?: React.ReactNode

  bpm?: number
  isPlaying?: boolean

  setBpm?: Dispatch<SetStateAction<number>>
  setIsPlaying?: Dispatch<SetStateAction<boolean>>
}

export const MetroContext = createContext({} as MetroContextType)

const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState(144)
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
