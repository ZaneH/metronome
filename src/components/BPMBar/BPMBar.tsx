import { FC, useContext } from 'react'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const BPMBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14vh;

  width: 100%;
  text-align: center;
  background-color: black;
  font-family: 'Fira Code';
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-height: 450px), (max-width: 300px) {
    font-size: 1.25rem;
    height: 20vh;
  }
`

const BPMAdjustmentButton = styled.div`
  font-family: 'Fira Code';
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14vh;
  height: 100%;
  background-color: #2a2a2c;
  &:hover {
    cursor: pointer;
  }

  @media (max-height: 450px), (max-width: 300px) {
    font-size: 1.5rem;
    width: 20vh;
  }
`

const BPMDisplay = styled.div`
  @media (max-height: 450px), (max-width: 300px) {
    width: 80vw;
  }
`

interface BPMBarProps {
  onTempoChange: (tempo: number) => void
}

const BPMBar: FC<BPMBarProps> = ({ onTempoChange }) => {
  const { bpm } = useContext(MetroContext)

  return (
    <BPMBarContainer>
      <BPMAdjustmentButton
        onClick={() => {
          onTempoChange((bpm || 0) - 1)
        }}
      >
        -
      </BPMAdjustmentButton>
      <BPMDisplay>{bpm?.toString() || 0}</BPMDisplay>
      <BPMAdjustmentButton
        onClick={() => {
          onTempoChange((bpm || 0) + 1)
        }}
      >
        +
      </BPMAdjustmentButton>
    </BPMBarContainer>
  )
}

export default BPMBar
