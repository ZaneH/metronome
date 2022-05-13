import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from 'react'
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
}

export const MetroContext = createContext({} as MetroContextType)

/**
 * Contains the high-level state. Keep this context limited to
 * variables that need to be accessed globally (but not persisted).
 */
const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState(120)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShowingSidebar, setIsShowingSidebar] = useState(false)
  const tapper = useMemo(() => new TempoTapper(), [])

  const context: MetroContextType = {
    bpm,
    isPlaying,
    isShowingSidebar,
    tapper,

    setBpm,
    setIsPlaying,
    setIsShowingSidebar,
  }

  return (
    <MetroContext.Provider value={context}>{children}</MetroContext.Provider>
  )
}

export default MetroContextProvider
