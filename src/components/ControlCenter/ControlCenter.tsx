import styled from 'styled-components'
import { MainControls } from '.'
import { Tapper } from '../Tapper'

const CCWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: red;
`

export const ControlCenter = () => {
  return (
    <CCWrapper>
      <Tapper />
      <MainControls />
    </CCWrapper>
  )
}
