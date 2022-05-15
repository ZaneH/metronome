import { useMediaQuery } from '@react-hook/media-query'
import { FC, useCallback, useContext } from 'react'
import PlayFillIcon from 'remixicon-react/PlayFillIcon'
import StopFillIcon from 'remixicon-react/StopFillIcon'
import styled from 'styled-components'
import { TIME_SIGNATURES } from '../../../utils'
import { MetroContext } from '../../MetroContextProvider/MetroContextProvider'
import { useTheme } from '../../ThemeProvider'

const MainControlsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;

  padding: 4vh 0;

  display: flex;
  justify-content: center;
  gap: 24px;

  * {
    cursor: pointer;
  }

  @media (max-height: 450px), (max-width: 300px) {
    padding: 8vh 0;
    gap: 8px;
  }
`

const MainButton = styled.div`
  flex: 0 0 auto;
  font-family: 'Fira Mono', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 50%;
  color: ${(p) => p.theme.text.control};
  width: 25vh;
  height: 25vh;
  max-width: 96px;
  max-height: 96px;
  display: inline-flex;
  background: ${(p) => p.theme.button.controlBg};
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: background-color 20ms ease-out;
  filter: ${(p) => p.theme.button.dropShadow};

  &:active {
    background-color: ${(p) => p.theme.button.activeBg};
  }

  @media (max-height: 450px), (max-width: 300px) {
    width: 40vh;
    height: 40vh;
    font-size: 1rem;
  }
`

const SmallButton = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  font-family: 'Fira Mono', monospace;
  font-size: 1rem;
  width: 12vh;
  height: 12vh;
  border-radius: 50%;
  max-width: 64px;
  max-height: 64px;
  text-align: center;
  align-self: center;
  background-color: ${(p) => p.theme.button.controlBg};
  color: ${(p) => p.theme.text.control};
  filter: ${(p) => p.theme.button.dropShadow};

  &:active {
    background-color: ${(p) => p.theme.button.activeBg};
  }

  @media (max-height: 450px), (max-width: 300px) {
    width: 30vh;
    height: 30vh;
    font-size: 0.75frem;
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
  const { timeSignature = 0, setTimeSignature } = useContext(MetroContext)
  const iconSize = matches ? 24 : 36
  const theme = useTheme()

  const handleTapTimeSignature = useCallback(() => {
    setTimeSignature?.(timeSignature + 1)
  }, [timeSignature, setTimeSignature])

  return (
    <MainControlsContainer>
      <MainButton onClick={handleTapTempo}>Tap</MainButton>
      <SmallButton onClick={handleTapTimeSignature}>
        {`${TIME_SIGNATURES[timeSignature][0]}/${TIME_SIGNATURES[timeSignature][1]}`}
      </SmallButton>
      <MainButton onClick={onPlay}>
        {isPlaying ? (
          <StopFillIcon size={iconSize} color={theme.text.control} />
        ) : (
          <PlayFillIcon size={iconSize} color={theme.text.control} />
        )}
      </MainButton>
    </MainControlsContainer>
  )
}

export default MainControls
