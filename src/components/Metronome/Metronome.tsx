import { useContext } from 'react'
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
  const { bpm } = useContext(MetroContext)

  return (
    <LibMetronome
      key={bpm}
      tempo={bpm}
      autoplay={true}
      render={({
        tempo,
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
      }) => (
        <>
          <TickerWrapper>
            <Ticker key={tempo} isPlaying={playing} />
          </TickerWrapper>
          <ControlCenter
            onTempoChange={onTempoChange}
            onPlay={onPlay}
            isPlaying={playing}
          />
        </>
      )}
    />
  )
}

export default Metronome
