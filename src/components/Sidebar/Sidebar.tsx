import { FC, useCallback, useContext, useMemo } from 'react'
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon'
import CheckboxLineIcon from 'remixicon-react/CheckboxLineIcon'
import CloseIcon from 'remixicon-react/CloseLineIcon'
import styled, { keyframes } from 'styled-components'
import { SETTINGS, SETTING_KEY } from '../../utils/constants'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'
import BigButton from './BigButton'

const FadeIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`

const SidebarContainer = styled.div`
  font-family: 'Inter', sans-serif;
  color: white;
  padding: 24px;
  width: 256px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #181819;
  overflow-y: scroll;
  box-sizing: border-box;

  animation: ${FadeIn} 0.1s ease;
`

const SidebarTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;

  * {
    cursor: pointer;
  }
`

const SidebarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 300;
  padding: 4px 0;

  * {
    cursor: pointer;
  }
`

const SidebarSubtext = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: flex-inline;
`

const SidebarCheck = styled.div`
  display: flex-inline;
`

type SettingItem = {
  key: string
  label: string
  checked?: boolean
}

interface SidebarProps {
  title: string
}

const Sidebar: FC<SidebarProps> = ({ title }) => {
  const { isShowingSidebar, setIsShowingSidebar } = useContext(MetroContext)
  const {
    showMetronome,
    setShowMetronome,
    muteSound,
    setMuteSound,
    blinkOnTick,
    setBlinkOnTick,
    darkMode,
    setDarkMode,
    customBackgroundColor,
    setCustomBackgroundColor,
    saveSetting,
  } = useContext(KVContext)

  const isChecked = useCallback(
    (key: SETTING_KEY) => {
      switch (key) {
        case 'show-metronome':
          return showMetronome
        case 'mute-sound':
          return muteSound
        case 'blink-on-tick':
          return blinkOnTick
        case 'dark-mode':
          return darkMode
        case 'custom-background-color':
          return customBackgroundColor
        default:
          return false
      }
    },
    [showMetronome, muteSound, blinkOnTick, darkMode, customBackgroundColor]
  )

  const settingItems = useMemo(
    () =>
      Object.keys(SETTINGS).map(
        (k: string) =>
          ({
            key: k,
            label: SETTINGS[k as SETTING_KEY],
            checked: isChecked(k as SETTING_KEY),
          } as SettingItem)
      ),
    [isChecked]
  )

  if (!isShowingSidebar) {
    return null
  }

  const handleRowClick = (key: SETTING_KEY, checked?: boolean) => {
    switch (key) {
      case 'show-metronome':
        setShowMetronome?.(checked!)
        saveSetting?.('show-metronome', checked!)
        break
      case 'mute-sound':
        setMuteSound?.(checked!)
        saveSetting?.('mute-sound', checked!)
        break
      case 'blink-on-tick':
        setBlinkOnTick?.(checked!)
        saveSetting?.('blink-on-tick', checked!)
        break
      case 'dark-mode':
        setDarkMode?.(checked!)
        saveSetting?.('dark-mode', checked!)
        break
      case 'custom-background-color':
        setCustomBackgroundColor?.(checked!)
        saveSetting?.('custom-background-color', checked!)
        break
    }
  }

  return (
    <SidebarContainer>
      <SidebarTitle>
        {title}
        <CloseIcon
          style={{
            transform: 'translate(4px, 0)',
          }}
          size={32}
          onClick={() => setIsShowingSidebar?.(false)}
        />
      </SidebarTitle>
      {settingItems.map((s, i) =>
        i === 2 ? (
          <BigButton key={s.key}>{s.label}</BigButton>
        ) : (
          <SidebarRow
            key={s.key}
            onClick={() => handleRowClick(s.key as SETTING_KEY, !s.checked)}
          >
            <SidebarSubtext>{s.label}</SidebarSubtext>
            <SidebarCheck>
              {s.checked ? <CheckboxLineIcon /> : <CheckboxBlankLineIcon />}
            </SidebarCheck>
          </SidebarRow>
        )
      )}
    </SidebarContainer>
  )
}

export default Sidebar
