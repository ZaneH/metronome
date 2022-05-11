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
import { SETTING_KEY } from '../../utils/constants'

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

const KVContextProvider: FC<KVContextType> = ({ children }) => {
  const [showMetronome, setShowMetronome] = useState(true)
  const [muteSound, setMuteSound] = useState(false)
  const [blinkOnTick, setBlinkOnTick] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [customBackgroundColor, setCustomBackgroundColor] = useState(false)

  const store = useMemo(() => new Store('.settings.dat'), [])

  const loadSettingsFromStorage = useCallback(
    async (key: SETTING_KEY) => {
      const value = Boolean(await store.get(key))

      console.log('Setting', key, 'to', value)
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

  const saveSetting = useCallback(
    (key: SETTING_KEY, value: boolean) => {
      store.set(key, value)
      store.save()
    },
    [store]
  )

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

  useEffect(() => {
    console.log('LOADING CONFIG')
    store
      .load()
      .then(async () => {
        loadSettingsFromStorage('show-metronome')
        loadSettingsFromStorage('mute-sound')
        loadSettingsFromStorage('blink-on-tick')
        loadSettingsFromStorage('dark-mode')
        loadSettingsFromStorage('custom-background-color')
      })
      .catch((e) => console.log(e))
  }, [store, loadSettingsFromStorage])

  return <KVContext.Provider value={context}>{children}</KVContext.Provider>
}

export default KVContextProvider