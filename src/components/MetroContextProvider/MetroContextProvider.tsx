import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

type MetroContextType = {
  children?: React.ReactNode

  bpm?: number

  setBpm?: Dispatch<SetStateAction<number>>
}

export const MetroContext = createContext({} as MetroContextType)

const MetroContextProvider: FC<MetroContextType> = ({ children }) => {
  const [bpm, setBpm] = useState(20)
  const context: MetroContextType = {
    bpm,

    setBpm,
  }

  return (
    <MetroContext.Provider value={context}>{children}</MetroContext.Provider>
  )
}

export default MetroContextProvider
