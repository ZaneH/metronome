import { useMediaQuery } from '@react-hook/media-query'
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

  @media (max-height: 450px), (max-width: 300px) {
    gap: 24px;
    padding: 8vh 0;
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

  @media (max-height: 450px), (max-width: 300px) {
    width: 40vh;
    height: 40vh;
    font-size: 1rem;
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
  const matches = useMediaQuery('(max-height: 450px), (max-width: 300px)')
  const iconSize = matches ? 24 : 36
  return (
    <MainControlsContainer>
      <MainButton onClick={handleTapTempo}>Tap</MainButton>
      <MainButton onClick={onPlay}>
        {isPlaying ? (
          <StopFillIcon size={iconSize} />
        ) : (
          <PlayFillIcon size={iconSize} />
        )}
      </MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
