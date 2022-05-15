import { useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import * as Tone from 'tone'
import { TIME_SIGNATURES, validBpm } from '../../utils'
import { ControlCenter } from '../ControlCenter'
import { KVContext } from '../KVContextProvider/KVContextProvider'
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

const markBounce = keyframes`
0% {
  opacity: 1;
}

3% {
  opacity: 0;
}

97% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`

const MiddleMark = styled.div<{
  playing: boolean
  bps: number
  visible?: boolean
}>`
  ${({ playing, bps }) =>
    playing &&
    css`
      animation: ${markBounce} ${bps}s linear infinite;
    `}

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  position: absolute;
  border-radius: 50%;
  background-color: ${(p) => p.theme.extra.swingArmBg};
  width: 1.5vh;
  height: 1.5vh;
  top: 12vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`

const Metronome = () => {
  const {
    bpm,
    timeSignature = 0,
    setBpm,
    isPlaying = false,
    setIsPlaying,
    tapper,
  } = useContext(MetroContext)
  const { blinkOnTick, muteSound, showMetronome } = useContext(KVContext)
  const tickerRef = useRef(0)
  const [beatsPerMeasure, beatUnit] = TIME_SIGNATURES[timeSignature]

  const o1 = useMemo(
    () =>
      Tone.Offline(() => {
        const ampEnv = new Tone.AmplitudeEnvelope(0.01, 0.02, 1, 0.2)
        new Tone.Oscillator('C5', 'sine')
          .connect(ampEnv)
          .toDestination()
          .start()
          .stop('+0.1')
      }, 0.1),
    []
  )

  const o2 = useMemo(
    () =>
      Tone.Offline(() => {
        const ampEnv = new Tone.AmplitudeEnvelope(0.01, 0.02, 1, 0.2)
        new Tone.Oscillator('C4', 'sine')
          .connect(ampEnv)
          .toDestination()
          .start()
          .stop('+0.1')
      }, 0.1),
    []
  )

  const tone1 = useMemo(
    () => o1.then((o) => new Tone.Player(o).toDestination()),
    [o1]
  )

  const tone2 = useMemo(
    () => o2.then((o) => new Tone.Player(o).toDestination()),
    [o2]
  )

  const handleTick = useCallback(() => {
    const id = Tone.Transport.scheduleRepeat((time) => {
      const tick = Tone.Transport.getTicksAtTime(time) / Tone.Transport.PPQ
      if (tick % beatsPerMeasure === 0) {
        tone1.then((p) => {
          p.fadeIn = 0.005
          p.fadeOut = 0.012
          p.start(time).stop(time + 0.1)
        })
      } else {
        tone2.then((p) => {
          p.fadeIn = 0.005
          p.fadeOut = 0.012
          p.start(time).stop(time + 0.1)
        })
      }
    }, `${beatUnit}n`)

    tickerRef.current = id
  }, [beatsPerMeasure, beatUnit, tone1, tone2, tickerRef])

  useEffect(() => {
    Tone.Transport.set({
      bpm: bpm,
      timeSignature: beatsPerMeasure / beatUnit,
    })
  }, [bpm, beatsPerMeasure, beatUnit])

  useEffect(() => {
    Tone.Transport.stop()
    Tone.Transport.clear(tickerRef.current)

    if (isPlaying && !muteSound) {
      handleTick()
      Tone.Transport.start()
    } else {
      Tone.Transport.stop()
      Tone.Transport.clear(tickerRef.current)
    }
  }, [isPlaying, muteSound, handleTick, tickerRef, bpm])

  return (
    <div key={`${bpm}-${isPlaying}-${blinkOnTick}-${timeSignature}`}>
      {showMetronome && (
        <MiddleMark
          playing={isPlaying}
          bps={60 / (bpm || 0)}
          visible={blinkOnTick}
        />
      )}
      {showMetronome && (
        <TickerWrapper>
          <Ticker isPlaying={isPlaying} />
        </TickerWrapper>
      )}
      <ControlCenter
        onTempoChange={(tempo: number) => {
          if (!validBpm(tempo)) {
            return
          }

          setBpm?.(tempo)
        }}
        onPlay={() => {
          setIsPlaying?.(!isPlaying)
        }}
        isPlaying={isPlaying}
        handleTapTempo={() => {
          tapper?.tap()
          setBpm?.(tapper?.bpm)
        }}
      />
    </div>
  )
}

export default Metronome
