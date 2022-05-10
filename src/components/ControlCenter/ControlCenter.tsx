import { FC } from 'react'
import styled from 'styled-components'
import { MainControls } from '.'
import { BPMBar } from '../BPMBar'

const CCWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: red;
`

interface ControlCenterProps {
  onTempoChange: (tempo: number) => void
  onPlay: () => void
  isPlaying: boolean
}

export const ControlCenter: FC<ControlCenterProps> = ({
  onTempoChange,
  onPlay,
  isPlaying,
}) => {
  return (
    <CCWrapper>
      <BPMBar onTempoChange={onTempoChange} />
      <MainControls
        onTempoChange={onTempoChange}
        onPlay={onPlay}
        isPlaying={isPlaying}
      />
    </CCWrapper>
  )
}
