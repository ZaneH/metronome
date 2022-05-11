import { FC, useContext } from 'react'
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'
import BigButton from './BigButton'

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
`

const SidebarTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 12px;
`

const SidebarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 300;
  padding: 4px 0;
`

const SidebarSubtext = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: flex-inline;
`

const SidebarCheck = styled.div`
  display: flex-inline;
`

interface SidebarProps {
  title: string
}

const Sidebar: FC<SidebarProps> = ({ title }) => {
  const { isShowingSidebar } = useContext(MetroContext)

  if (!isShowingSidebar) {
    return null
  }

  return (
    <SidebarContainer>
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarRow>
        <SidebarSubtext>Show metronome</SidebarSubtext>
        <SidebarCheck>
          <CheckboxBlankLineIcon />
        </SidebarCheck>
      </SidebarRow>
      <SidebarRow>
        <SidebarSubtext>Custom background color</SidebarSubtext>
        <SidebarCheck>
          <CheckboxBlankLineIcon />
        </SidebarCheck>
      </SidebarRow>
      <SidebarRow>
        <BigButton>Change Theme</BigButton>
      </SidebarRow>
      <SidebarRow>
        <SidebarSubtext>Mute sound</SidebarSubtext>
        <SidebarCheck>
          <CheckboxBlankLineIcon />
        </SidebarCheck>
      </SidebarRow>
      <SidebarRow>
        <SidebarSubtext>Blink on tick</SidebarSubtext>
        <SidebarCheck>
          <CheckboxBlankLineIcon />
        </SidebarCheck>
      </SidebarRow>
      <SidebarRow>
        <SidebarSubtext>Dark mode</SidebarSubtext>
        <SidebarCheck>
          <CheckboxBlankLineIcon />
        </SidebarCheck>
      </SidebarRow>
    </SidebarContainer>
  )
}

export default Sidebar
