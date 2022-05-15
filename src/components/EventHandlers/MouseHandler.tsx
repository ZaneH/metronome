import useEventListener from '@use-it/event-listener'
import { useState } from 'react'
import * as Tone from 'tone'

const MouseHandler = () => {
  const [isToneStarted, setIsToneStarted] = useState(false)

  const handleOnClick = async () => {
    if (!isToneStarted) {
      await Tone.start()
      setIsToneStarted(true)
    }
  }

  useEventListener('click', handleOnClick)

  return null
}

export default MouseHandler
