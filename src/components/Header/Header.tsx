import { useContext } from 'react'
import SettingsFillIcon from 'remixicon-react/Settings3FillIcon'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const HeaderContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 0;
  right: 32px;

  display: flex;
  justify-content: flex-end;
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
