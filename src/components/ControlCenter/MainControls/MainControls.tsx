import { FC, useContext } from 'react'
import styled from 'styled-components'
import { MetroContext } from '../../MetroContextProvider/MetroContextProvider'
import PlayFillIcon from 'remixicon-react/PlayFillIcon'
import StopFillIcon from 'remixicon-react/StopFillIcon'

const MainControlsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  *:hover {
    cursor: pointer;
  }
`

const MainButton = styled.div`
  font-family: 'Montserrat';
  font-size: 1.5rem;
  color: white;
  width: 50%;
  height: 25vh;
  display: inline-flex;
  background: grey;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: background-color 20ms ease-out;
  &:active {
    background-color: green;
  }
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
  const { bpm } = useContext(MetroContext)
  return (
    <MainControlsContainer>
      <MainButton
        onClick={() => {
          onTempoChange((bpm || 0) + 1)
        }}
      >
        Tap
        <br />
        BPM
      </MainButton>
      <MainButton onClick={onPlay}>
        {isPlaying ? <StopFillIcon size={36} /> : <PlayFillIcon size={36} />}
      </MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
