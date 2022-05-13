import { createContext, Dispatch, FC, SetStateAction, useContext } from 'react'
import {
  ThemeProvider as SCThemeProvider,
  useTheme as useSCTheme,
} from 'styled-components'
import { KVContext } from '../KVContextProvider/KVContextProvider'

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
    dropShadow: string
    controlBg: string
  }
  text: {
    primary: string
    secondary: string
    bpmDisplay: string
    control: string
  }
  extra?: {
    bpmBorder: string
    swingArm: string
    headerColor: string
  }
}

const theme: { [key in 'dark' | 'light']: MetronomeThemeType } = {
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
      dropShadow: 'drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.13))',
      controlBg: '#1f1f20',
    },
    text: {
      primary: 'white',
      secondary: 'rgba(255, 255, 255, 0.8)',
      bpmDisplay: 'white',
      control: 'white',
    },
    extra: {
      bpmBorder: 'none',
      swingArm: 'white',
      headerColor: 'white',
    },
  },
  light: {
    background: {
      primary: '#FBF8F1',
      secondary: '#E0CA94',
      sidebar: '#4C4D4F',
      bpmBg: 'black',
    },
    button: {
      primaryBg: '#76859C',
      secondaryBg: '#4F4E4C',
      activeBg: '#7A6E51',
      color: '#fffffe',
      dropShadow: 'drop-shadow(1px 2px 0px rgba(0, 0, 0, 0.12))',
      controlBg: '#4F4E4C',
    },
    text: {
      primary: '#FBF8F1',
      secondary: '#FBF8F1',
      bpmDisplay: '#FBF8F1',
      control: '#FBF8F1',
    },
    extra: {
      bpmBorder: 'none',
      swingArm: 'black',
      headerColor: '#4F4E4C',
    },
  },
}

interface ThemeProviderProps {
  children?: React.ReactNode
}

type ThemeContextType = {
  darkMode?: boolean

  setDarkMode?: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ThemeContextType)
export const useTheme = () => useSCTheme() as MetronomeThemeType

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(KVContext)

  return (
    <ThemeContext.Provider
      value={{
        ...ThemeContext,
        darkMode,
        setDarkMode,
      }}
    >
      <SCThemeProvider theme={darkMode ? theme.dark : theme.light}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
