import { useContext } from 'react'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const TapperContainer = styled.div`
  width: 100%;
  text-align: center;
  background-color: #40514e;
  font-family: 'Montserrat';
  font-size: 2rem;
  color: white;
  padding: 18px 0;
`

const Tapper = () => {
  const { bpm } = useContext(MetroContext)

  return <TapperContainer>{bpm}</TapperContainer>
}

export default Tapper
