import { FC, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const tick = keyframes`
from {
    transform: rotate(-.4rad);
}

to {
    transform: rotate(.4rad);
}`

const SwingArm = styled.div<{ bps?: number; playing: boolean }>`
  position: absolute;
  bottom: 0;
  top: 0;
  width: 4px;
  background: ${(p) => p.theme.extra.swingArmBg};
  border-radius: 1vh;

  ${({ playing, bps }) => {
    return (
      playing &&
      css`
        animation: ${tick} ${bps}s ease-in-out infinite alternate;
      `
    )
  }}

  animation-delay: -${({ bps }) => (bps || 0) / 2}s;
  transform-origin: 2px 47vh;
`

interface TickerProps {
  isPlaying: boolean
}

const Ticker: FC<TickerProps> = ({ isPlaying }) => {
  const { bpm } = useContext(MetroContext)

  if (!isPlaying) {
    return <SwingArm playing={false} />
  }

  return <SwingArm bps={60 / (bpm || 0)} playing={true} />
}

export default Ticker
