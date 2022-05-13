import { appWindow, LogicalSize } from '@tauri-apps/api/window'
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Store } from 'tauri-plugin-store-api'
import { SETTINGS, SETTING_KEY } from '../../utils/constants'

type KVContextType = {
  children?: React.ReactNode

  showMetronome?: boolean
  muteSound?: boolean
  blinkOnTick?: boolean
  darkMode?: boolean
  customBackgroundColor?: boolean

  setShowMetronome?: Dispatch<SetStateAction<boolean>>
  setMuteSound?: Dispatch<SetStateAction<boolean>>
  setBlinkOnTick?: Dispatch<SetStateAction<boolean>>
  setDarkMode?: Dispatch<SetStateAction<boolean>>
  setCustomBackgroundColor?: Dispatch<SetStateAction<boolean>>

  saveSetting?: (key: SETTING_KEY, value: any) => void
}

export const KVContext = createContext({} as KVContextType)

/**
 * Responsible for providing persistant storage and reacting to
 * modified states (Settings)
 */
const KVContextProvider: FC<KVContextType> = ({ children }) => {
  const store = useMemo(() => new Store('.settings.dat'), [])
  const [showMetronome, setShowMetronome] = useState(true)
  const [muteSound, setMuteSound] = useState(false)
  const [blinkOnTick, setBlinkOnTick] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [customBackgroundColor, setCustomBackgroundColor] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  /**
   * Store value on-disk
   */
  const saveSetting = useCallback(
    (key: SETTING_KEY, value: any) => {
      if (!isLoaded) return
      store.set(key, value)
      store.save()
    },
    [store, isLoaded]
  )

  useEffect(() => {
    const biggerSize = new LogicalSize(350, 500)
    const smallerSize = new LogicalSize(300, 200)
    appWindow.setSize(showMetronome ? biggerSize : smallerSize)
    appWindow.setMinSize(showMetronome ? biggerSize : smallerSize)

    saveSetting('show-metronome', showMetronome)
  }, [showMetronome, saveSetting])

  useEffect(() => {
    saveSetting('dark-mode', darkMode)
  }, [darkMode, saveSetting])

  useEffect(() => {
    saveSetting('mute-sound', muteSound)
  }, [muteSound, saveSetting])

  /**
   * Map settings stored on disk into the KVContextProvider's state
   */
  const loadSettingIntoState = useCallback(
    async (key: SETTING_KEY) => {
      const value = Boolean(await store.get(key))

      switch (key) {
        case 'show-metronome':
          setShowMetronome(value)
          break
        case 'mute-sound':
          setMuteSound(value)
          break
        case 'blink-on-tick':
          setBlinkOnTick(value)
          break
        case 'dark-mode':
          setDarkMode(value)
          break
        case 'custom-background-color':
          setCustomBackgroundColor(value)
          break
      }
    },
    [
      setShowMetronome,
      setMuteSound,
      setBlinkOnTick,
      setDarkMode,
      setCustomBackgroundColor,
      store,
    ]
  )

  /**
   * We want to fetch all of the settings stored on-disk and
   * load them into the state when KVContextProvider is mounted
   */
  useEffect(() => {
    store
      .load()
      .then(() => {
        for (const key in SETTINGS) {
          loadSettingIntoState(key as SETTING_KEY)
        }
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoaded(true))
  }, [store, loadSettingIntoState])

  const context: KVContextType = {
    showMetronome,
    muteSound,
    blinkOnTick,
    darkMode,
    customBackgroundColor,
    setShowMetronome,
    setMuteSound,
    setBlinkOnTick,
    setDarkMode,
    setCustomBackgroundColor,
    saveSetting,
  }

  return <KVContext.Provider value={context}>{children}</KVContext.Provider>
}

export default KVContextProvider
