import { FC, useContext } from 'react'
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

interface MainControlsProps {
  onTempoChange: (tempo: number) => void
  onPlay: () => void
  isPlaying: boolean
}

const MainControls: FC<MainControlsProps> = ({
  onTempoChange,
  onPlay,
  isPlaying,
}) => {
  const { bpm, setBpm } = useContext(MetroContext)
  return (
    <MainControlsContainer>
      <MainButton
        onClick={() => {
          setBpm?.((bpm || 0) + 1)
          onTempoChange((bpm || 0) + 1)
        }}
      >
        Tap
      </MainButton>
      <MainButton onClick={onPlay}>{isPlaying ? 'Stop' : 'Start'}</MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
