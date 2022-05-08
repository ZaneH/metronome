import { useContext } from 'react'
import styled from 'styled-components'
import { MetroContext } from '../../MetroContextProvider/MetroContextProvider'

const MainControlsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`

const MainButton = styled.div`
  font-family: 'Montserrat';
  font-size: 1.5rem;
  color: white;
  width: 50%;
  height: 25vh;
  display: inline-flex;
  background: blue;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const MainControls = () => {
  const { bpm, setBpm } = useContext(MetroContext)
  return (
    <MainControlsContainer>
      <MainButton
        onClick={() => {
          console.log('bing:', bpm)
          setBpm?.((parseInt(bpm!) + 1).toString())
        }}
      >
        Tap
      </MainButton>
      <MainButton>Stop</MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
