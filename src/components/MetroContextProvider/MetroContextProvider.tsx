import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import TempoTapper from '../../utils/TempoTapper'

type MetroContextType = {
  children?: React.ReactNode

  bpm?: number
  isPlaying?: boolean
  isShowingSidebar?: boolean
  tapper?: TempoTapper
  setBpm?: Dispatch<SetStateAction<number>>
  setIsPlaying?: Dispatch<SetStateAction<boolean>>
  setIsShowingSidebar?: Dispatch<SetStateAction<boolean>>
  setTapper?: Dispatch<SetStateAction<TempoTapper>>
}

export const MetroContext = createContext({} as MetroContextType)

const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState(120)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const [tapper, setTapper] = useState(new TempoTapper())

  const context: MetroContextType = {
    bpm,
    isPlaying,
    isShowingSidebar,
    tapper,

    setBpm,
    setIsPlaying,
    setIsShowingSidebar,
    setTapper,
  }

  return (
    <MetroContext.Provider value={context}>{children}</MetroContext.Provider>
  )
}

export default MetroContextProvider
