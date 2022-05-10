import { useContext, useEffect, useMemo, useState } from 'react'
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

const Metronome = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const {
    bpm,
    setBpm,
    isPlaying = false,
    setIsPlaying,
  } = useContext(MetroContext)
  const tapper = useMemo(() => new TempoTapper(), [])

  useEffect(() => {
    setHasStarted?.(isPlaying)
  }, [isPlaying])

  return (
    <LibMetronome
      key={`${bpm}-${isPlaying}`}
      tempo={bpm}
      autoplay={isPlaying}
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
                onTempoChange(tempo)
                setBpm?.(tempo)
              }}
              onPlay={() => {
                if (!hasStarted) {
                  setHasStarted(true)
                }
                setIsPlaying?.(!isPlaying)
                onPlay()
              }}
              isPlaying={playing}
              handleTapTempo={() => {
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
