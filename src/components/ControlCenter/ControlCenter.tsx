import { FC } from 'react'
import styled from 'styled-components'
import { MainControls } from '.'
import { Tapper } from '../Tapper'

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
      <Tapper />
      <MainControls
        onTempoChange={onTempoChange}
        onPlay={onPlay}
        isPlaying={isPlaying}
      />
    </CCWrapper>
  )
}
