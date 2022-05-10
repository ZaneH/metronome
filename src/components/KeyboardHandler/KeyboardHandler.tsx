import useEventListener from '@use-it/event-listener'
import { useContext } from 'react'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const KeyboardHandler = () => {
  const {
    isPlaying = false,
    setIsPlaying,
    bpm = '',
    setBpm,
  } = useContext(MetroContext)

  const handleKeyDown = ({ key = '' }: { key: string }) => {
    const bpmS = bpm.toString()
    if (key === ' ') {
      setIsPlaying?.(!isPlaying)
    } else if (key === 'Backspace') {
      if (bpmS.length > 0) {
        setBpm?.(Number(bpmS.substring(0, bpmS.length - 1)))
      }
    } else if (key.match(/[0-9]/)) {
      setBpm?.(Number(bpmS.concat(key)))
    }
  }

  useEventListener('keydown', handleKeyDown)

  return null
}

export default KeyboardHandler
