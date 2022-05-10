import { useContext, useState } from 'react'
import styled from 'styled-components'
import { default as LibMetronome } from '../../utils/Metronome/metronome'
import { ControlCenter } from '../ControlCenter'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'
import { Ticker } from '../Ticker'

const TickerWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transform: translate(0, 20vh);
`

const Metronome = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const { bpm, setBpm } = useContext(MetroContext)

  return (
    <LibMetronome
      key={bpm}
      tempo={bpm}
      autoplay={hasStarted ? true : false}
      render={({
        playing,
        onPlay,
        onTempoChange,
      }: {
        tempo: number
        beatsPerMeasure: number
        playing: boolean
        beat: number
        onPlay: () => void
        onTempoChange: (tempo: number) => void
      }) => {
        return (
          <>
            <TickerWrapper>
              <Ticker isPlaying={playing} />
            </TickerWrapper>
            <ControlCenter
              onTempoChange={(tempo: number) => {
                if (!playing) {
                  // disable autoplay if tempo changes
                  // and metro isn't playing
                  setHasStarted(false)
                }

                onTempoChange(tempo)
                setBpm?.(tempo)
              }}
              onPlay={() => {
                if (!hasStarted) {
                  setHasStarted(true)
                }
                onPlay()
              }}
              isPlaying={playing}
            />
          </>
        )
      }}
    />
  )
}

export default Metronome
