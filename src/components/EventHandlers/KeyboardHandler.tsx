import useEventListener from '@use-it/event-listener'
import { useContext } from 'react'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const KeyboardHandler = () => {
  const {
    isPlaying = false,
    setIsPlaying,
    bpm = '',
    setBpm,
    setIsShowingSidebar,
    tapper,
  } = useContext(MetroContext)
  const { muteSound, setMuteSound, showMetronome, setShowMetronome } =
    useContext(KVContext)

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key = '' } = e

    const bpmS = bpm.toString()
    let preventDefault = false

    if (key === ' ') {
      preventDefault = true
      setIsPlaying?.(!isPlaying)
    } else if (key === 'Backspace') {
      if (bpmS.length > 0) {
        preventDefault = true
        setBpm?.(Number(bpmS.substring(0, bpmS.length - 1)))
      }
    } else if (key.match(/[0-9]/)) {
      preventDefault = true
      setBpm?.(Number(bpmS.concat(key)))
    } else if (key.match(/Arrow(Down|Up)/)) {
      if (key === 'ArrowUp') {
        preventDefault = true
        setBpm?.(Number(bpmS) + 1)
      }

      if (key === 'ArrowDown') {
        preventDefault = true
        setBpm?.(Number(bpmS) - 1)
      }
    } else if (key === 'Escape') {
      preventDefault = true
      setIsShowingSidebar?.(false)
    } else if (key === 't') {
      preventDefault = true
      tapper?.tap()
      setBpm?.(tapper?.bpm)
    } else if (key === 'm') {
      preventDefault = true
      setMuteSound?.(!muteSound)
    } else if (key === 'f') {
      setShowMetronome?.(!showMetronome)
    } else if (process.env.NODE_ENV === 'development') {
      console.log('[KeyboardHandler] Unrecognized key: ', key)
    }

    if (preventDefault) {
      e.preventDefault()
    }
  }

  useEventListener('keydown', handleKeyDown)

  return null
}

export default KeyboardHandler
