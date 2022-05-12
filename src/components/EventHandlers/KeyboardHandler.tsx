import useEventListener from '@use-it/event-listener'
import { useCallback, useContext } from 'react'
import { KVContext } from '../KVContextProvider/KVContextProvider'
import { MetroContext } from '../MetroContextProvider/MetroContextProvider'

const KeyboardHandler = () => {
  const {
    isPlaying = false,
    setIsPlaying,
    bpm = '',
    setBpm,
    isShowingSidebar,
    setIsShowingSidebar,
    tapper,
  } = useContext(MetroContext)
  const { muteSound, setMuteSound, showMetronome, setShowMetronome } =
    useContext(KVContext)

  const decrementBpm = useCallback(() => {
    setBpm?.(Number(bpm) - 1)
  }, [bpm, setBpm])

  const incrementBpm = useCallback(() => {
    setBpm?.(Number(bpm) + 1)
  }, [bpm, setBpm])

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key = '' } = e

    const bpmS = bpm.toString()
    let preventDefault = true

    if (key === ' ') {
      setIsPlaying?.(!isPlaying)
    } else if (key === 'Backspace') {
      if (bpmS.length > 0) {
        setBpm?.(Number(bpmS.substring(0, bpmS.length - 1)))
      }
    } else if (key.match(/[0-9]/)) {
      setBpm?.(Number(bpmS.concat(key)))
    } else if (key.match(/Arrow(Down|Up|Left|Right)/)) {
      switch (key) {
        case 'ArrowUp':
          incrementBpm()
          break
        case 'ArrowDown':
          decrementBpm()
          break
        case 'ArrowLeft':
          decrementBpm()
          break
        case 'ArrowRight':
          incrementBpm()
          break
      }
    } else if (key === 'Escape') {
      setIsShowingSidebar?.(false)
    } else if (key === 't') {
      tapper?.tap()
      setBpm?.(tapper?.bpm)
    } else if (key === 'm') {
      setMuteSound?.(!muteSound)
    } else if (key === 'f') {
      setShowMetronome?.(!showMetronome)
    } else if (key === 's') {
      setIsShowingSidebar?.(!isShowingSidebar)
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('[KeyboardHandler] Unrecognized key: ', key)
      }

      preventDefault = false
    }

    if (preventDefault) {
      e.preventDefault()
    }
  }

  useEventListener('keydown', handleKeyDown)

  return null
}

export default KeyboardHandler
