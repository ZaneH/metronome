import { useContext } from 'react'
import FullscreenLineIcon from 'remixicon-react/FullscreenLineIcon'
import SettingsFillIcon from 'remixicon-react/Settings3FillIcon'
import VolumeMuteLineIcon from 'remixicon-react/VolumeMuteLineIcon'
import VolumeLineIcon from 'remixicon-react/VolumeUpLineIcon'
import styled from 'styled-components'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'
import { useTheme } from '../ThemeProvider'

const HeaderContainer = styled.div`
  position: absolute;
  opacity: 0.7;
  top: 32px;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;

  @media (max-height: 450px), (max-width: 300px) {
    top: 5vh;
    justify-content: space-evenly;
    gap: 18px;
  }

  * {
    cursor: pointer;
  }
`

const Header = () => {
  const { setIsShowingSidebar } = useContext(MetroContext)
  const { muteSound, setMuteSound, showMetronome, setShowMetronome } =
    useContext(KVContext)
  const theme = useTheme()

  return (
    <HeaderContainer>
      {muteSound ? (
        <VolumeMuteLineIcon
          color={theme.extra?.headerColor}
          size={24}
          onClick={() => setMuteSound?.(false)}
        />
      ) : (
        <VolumeLineIcon
          color={theme.extra?.headerColor}
          size={24}
          onClick={() => setMuteSound?.(true)}
        />
      )}
      <SettingsFillIcon
        color={theme.extra?.headerColor}
        size={24}
        onClick={() => setIsShowingSidebar?.(true)}
      />
      {!showMetronome && (
        <FullscreenLineIcon
          color={theme.extra?.headerColor}
          size={24}
          onClick={() => setShowMetronome?.(true)}
        />
      )}
    </HeaderContainer>
  )
}

export default Header
