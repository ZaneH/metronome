import { FC, useContext } from 'react'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import SubtractLineIcon from 'remixicon-react/SubtractLineIcon'
import styled from 'styled-components'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const BPMBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14vh;

  width: 100%;
  text-align: center;
  background-color: ${(p) => p.theme.background.bpmBg};
  font-family: 'Fira Mono', monospace;
  font-size: 2rem;
  color: ${(p) => p.theme.text.control};
  border-top: ${(p) => p.theme.extra.bpmBorder};
  border-bottom: ${(p) => p.theme.extra.bpmBorder};

  @media (max-height: 450px), (max-width: 300px) {
    font-size: 1.25rem;
    height: 20vh;
  }
`

const BPMAdjustmentButton = styled.div`
  font-family: 'Fira Mono', monospace;
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14vh;
  height: 100%;
  background-color: ${(p) => p.theme.button.secondaryBg};
  &:hover {
    cursor: pointer;
  }

  @media (max-height: 450px), (max-width: 300px) {
    font-size: 1.5rem;
    width: 20vh;
  }
`

const BPMDisplay = styled.div`
  color: ${(p) => p.theme.text.bpmDisplay};

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
        <SubtractLineIcon />
      </BPMAdjustmentButton>
      <BPMDisplay>{bpm?.toString() || 0}</BPMDisplay>
      <BPMAdjustmentButton
        onClick={() => {
          onTempoChange((bpm || 0) + 1)
        }}
      >
        <AddLineIcon />
      </BPMAdjustmentButton>
    </BPMBarContainer>
  )
}

export default BPMBar
