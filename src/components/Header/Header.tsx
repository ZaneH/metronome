import { useContext } from 'react'
import SettingsFillIcon from 'remixicon-react/Settings3FillIcon'
import VolumeMuteLineIcon from 'remixicon-react/VolumeMuteLineIcon'
import styled, { css } from 'styled-components'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const HeaderContainer = styled.div<{ pushRight?: boolean }>`
  position: absolute;
  opacity: 0.7;
  top: 32px;
  left: 24px;
  right: 24px;
  display: flex;
  justify-content: space-between;

  ${({ pushRight }) =>
    pushRight &&
    css`
      justify-content: flex-end;
    `}

  @media (max-height: 450px), (max-width: 300px) {
    top: 5vh;
    justify-content: center;
    gap: 18px;
  }

  * {
    cursor: pointer;
  }
`

const Header = () => {
  const { setIsShowingSidebar } = useContext(MetroContext)
  const { muteSound, setMuteSound } = useContext(KVContext)

  return (
    <HeaderContainer pushRight={!muteSound}>
      {muteSound && (
        <VolumeMuteLineIcon
          color='white'
          size={24}
          onClick={() => setMuteSound?.(false)}
        />
      )}
      <SettingsFillIcon
        color='white'
        size={24}
        onClick={() => setIsShowingSidebar?.(true)}
      />
    </HeaderContainer>
  )
}

export default Header
