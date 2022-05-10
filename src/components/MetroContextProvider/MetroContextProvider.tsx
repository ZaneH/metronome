import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

type MetroContextType = {
  children?: React.ReactNode

  /**
   * BPM of the metronome
   */
  bpm?: number

  /**
   * Is the metronome playing?
   */
  isPlaying?: boolean

  /**
   * Set the BPM (used for state updates)
   */
  setBpm?: Dispatch<SetStateAction<number>>

  /**
   * Set if playing (used for state updates)
   */
  setIsPlaying?: Dispatch<SetStateAction<boolean>>
}

export const MetroContext = createContext({} as MetroContextType)

const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState(120)
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
