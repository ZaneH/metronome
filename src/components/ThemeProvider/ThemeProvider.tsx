import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import {
  ThemeProvider as SCThemeProvider,
  useTheme as useSCTheme,
} from 'styled-components'

type MetronomeThemeType = {
  background: {
    primary: string
    secondary: string
    sidebar: string
    bpmBg: string
  }
  button: {
    primaryBg: string
    secondaryBg: string
    activeBg: string
    color: string
  }
  text: {
    primary: string
  }
}

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
  light: {
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

interface ThemeProviderProps {
  children?: React.ReactNode
}

type ThemeContextType = {
  isDarkMode: boolean

  setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ThemeContextType)
export const useTheme = () => useSCTheme() as MetronomeThemeType

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <ThemeContext.Provider
      value={{
        ...ThemeContext,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <SCThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
