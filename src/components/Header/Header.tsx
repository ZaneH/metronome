import { useContext } from 'react'
import SettingsFillIcon from 'remixicon-react/Settings3FillIcon'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const HeaderContainer = styled.div`
  position: absolute;
  opacity: 0.7;
  top: 32px;
  left: 0;
  right: 24px;
  display: flex;
  justify-content: flex-end;

  * {
    cursor: pointer;
  }
`

const Header = () => {
  const { isShowingSidebar, setIsShowingSidebar } = useContext(MetroContext)

  return (
    <HeaderContainer>
      <SettingsFillIcon
        color='white'
        size={24}
        onClick={() => setIsShowingSidebar?.(!isShowingSidebar)}
      />
    </HeaderContainer>
  )
}

export default Header
