import { FC, useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import { default as LibMetronome } from '../../utils/Metronome/metronome'
import TempoTapper from '../../utils/TempoTapper'
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

interface MetronomeProps {
  isPlaying: boolean
}

const Metronome: FC<MetronomeProps> = ({ isPlaying }) => {
  const [hasStarted, setHasStarted] = useState(true)
  const { bpm, setBpm } = useContext(MetroContext)
  const tapper = useMemo(() => new TempoTapper(), [])

  return (
    <LibMetronome
      key={`${bpm}-${isPlaying}`}
      tempo={bpm}
      autoplay={hasStarted && isPlaying ? true : false}
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
        const dontAutoplayIfNotPlaying = () => {
          if (!playing) {
            // disable autoplay if tempo changes
            // and metro isn't playing
            setHasStarted(false)
          }
        }

        return (
          <>
            <TickerWrapper>
              <Ticker isPlaying={playing} />
            </TickerWrapper>
            <ControlCenter
              onTempoChange={(tempo: number) => {
                dontAutoplayIfNotPlaying()

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
              handleTapTempo={() => {
                dontAutoplayIfNotPlaying()

                tapper.tap()
                onTempoChange(tapper.bpm)
                setBpm?.(tapper.bpm)
              }}
            />
          </>
        )
      }}
    />
  )
}

export default Metronome
