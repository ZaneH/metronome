import { FC, useContext } from 'react'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const BPMBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  text-align: center;
  background-color: #40514e;
  font-family: 'Montserrat';
  font-size: 2rem;
  color: white;
  padding: 18px 0;
`

const BPMAdjustmentButton = styled.div`
  width: 20%;
  height: 100%;
  margin: 0 12px;
  &:hover {
    cursor: pointer;
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
      {bpm?.toString() || 0}
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
