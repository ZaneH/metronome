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
