import { useContext, useEffect, useMemo } from 'react'
import styled, { keyframes } from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const tick = keyframes`
from {
    transform: rotate(-.4rad);
}

to {
    transform: rotate(.4rad);
}`

const SwingArm = styled.div<{ bps: string }>`
  width: 8px;
  height: 45vh;
  background: white;

  animation: ${tick} ${(p) => p.bps}s linear infinite alternate;
  transform-origin: 4px 47vh;
`

const Ticker = () => {
  const { bpm } = useContext(MetroContext)
  const tickAudio = useMemo(
    () => new Audio('http://soundjax.com/reddo/55046%5Ehisticks.mp3'),
    []
  )

  useEffect(() => {
    let tickCallback: NodeJS.Timer
    let halfTickCallback: NodeJS.Timer

    halfTickCallback = setTimeout(() => {
      tickCallback = setInterval(() => {
        tickAudio.load()
        tickAudio.play()
      }, (60 / parseInt(bpm!)) * 1000) // continously tick at x BPM
    }, ((60 / parseInt(bpm!)) * 1000) / 2) // delay by a half tick

    return () => {
      clearInterval(tickCallback)
      clearTimeout(halfTickCallback)
    }
  }, [tickAudio, bpm])

  return <SwingArm bps={(60 / parseInt(bpm!)).toString()} />
}

export default Ticker
