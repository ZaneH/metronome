import { FC } from 'react'
import PlayFillIcon from 'remixicon-react/PlayFillIcon'
import StopFillIcon from 'remixicon-react/StopFillIcon'
import styled from 'styled-components'

const MainControlsContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 4vh 0;

  display: flex;
  justify-content: center;
  gap: 56px;
  *:hover {
    cursor: pointer;
  }
`

const MainButton = styled.div`
  font-family: 'Fira Code';
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 50%;
  color: white;
  width: 25vh;
  height: 25vh;
  max-width: 96px;
  max-height: 96px;
  display: inline-flex;
  background: #1f1f20;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: background-color 20ms ease-out;
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.13));
  &:active {
    background-color: green;
  }
`

interface MainControlsProps {
  onTempoChange: (tempo: number) => void
  onPlay: () => void
  isPlaying: boolean
  handleTapTempo: () => void
}

const MainControls: FC<MainControlsProps> = ({
  onPlay,
  isPlaying,
  handleTapTempo,
}) => {
  return (
    <MainControlsContainer>
      <MainButton onClick={handleTapTempo}>Tap</MainButton>
      <MainButton onClick={onPlay}>
        {isPlaying ? <StopFillIcon size={36} /> : <PlayFillIcon size={36} />}
      </MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
