import { FC, useCallback, useContext, useMemo } from 'react'
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon'
import CheckboxLineIcon from 'remixicon-react/CheckboxLineIcon'
import CloseIcon from 'remixicon-react/CloseLineIcon'
import styled, { keyframes } from 'styled-components'
import { MetroSettingType, SETTINGS } from '../../utils'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'
import { useTheme } from '../ThemeProvider'

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
  color: ${(p) => p.theme.text.primary};
  padding: 28px 24px;
  width: 256px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${(p) => p.theme.background.sidebar};
  overflow-y: scroll;
  box-sizing: border-box;

  animation: ${FadeIn} 0.1s ease;
`

const SidebarTitle = styled.div`
  font-weight: 600;
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
    display: flex;
  }
`

const SidebarSubtext = styled.div`
  color: ${(p) => p.theme.text.secondary};
  display: flex-inline;
`

const SidebarCheck = styled.div`
  display: flex-inline;
`

// const Button = styled.div`
//   width: 100%;
//   height: 44px;
//   background-color: ${(p) => p.theme.button.primaryBg};
//   color: ${(p) => p.theme.button.color};
//   font-family: 'Inter', sans-serif;
//   font-weight: 600;
//   letter-spacing: 0.01rem;
//   border-radius: 12px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 16px 0;
//   cursor: pointer;
// `

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
    // customBackgroundColor,
    saveSetting,
  } = useContext(KVContext)
  const theme = useTheme()

  const isChecked = useCallback(
    (key: MetroSettingType) => {
      switch (key) {
        case 'show-metronome':
          return showMetronome
        case 'mute-sound':
          return muteSound
        case 'blink-on-tick':
          return blinkOnTick
        case 'dark-mode':
          return darkMode
        // case 'custom-background-color':
        //   return customBackgroundColor
        default:
          return false
      }
    },
    [showMetronome, muteSound, blinkOnTick, darkMode]
  )

  const settingItems = useMemo(
    () =>
      Object.keys(SETTINGS).map(
        (k: string) =>
          ({
            key: k,
            label: SETTINGS[k as MetroSettingType],
            checked: isChecked(k as MetroSettingType),
          } as SettingItem)
      ),
    [isChecked]
  )

  const handleRowClick = (key: MetroSettingType, checked?: boolean) => {
    switch (key) {
      case 'show-metronome':
        setShowMetronome?.(checked!)
        break
      case 'mute-sound':
        setMuteSound?.(checked!)
        break
      case 'blink-on-tick':
        setBlinkOnTick?.(checked!)
        saveSetting?.('blink-on-tick', checked!)
        break
      case 'dark-mode':
        setDarkMode?.(checked!)
        break
      // case 'custom-background-color':
      //   setCustomBackgroundColor?.(checked!)
      //   saveSetting?.('custom-background-color', checked!)
      //   break
    }
  }

  if (!isShowingSidebar) {
    return null
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
      {settingItems.map((s) => (
        // (s.key as MetroSettingType) === 'change-theme' ? (
        //   <Button key={s.key}>{s.label}</Button>
        // ) : (
        <SidebarRow
          key={s.key}
          onClick={() => handleRowClick(s.key as MetroSettingType, !s.checked)}
        >
          <SidebarSubtext>{s.label}</SidebarSubtext>
          <SidebarCheck>
            {s.checked ? (
              <CheckboxLineIcon color={theme.text.primary} size={24} />
            ) : (
              <CheckboxBlankLineIcon color={theme.text.primary} size={24} />
            )}
          </SidebarCheck>
        </SidebarRow>
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
