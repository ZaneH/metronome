import { invoke } from '@tauri-apps/api'
import { useEffect, useMemo, useState } from 'react'
import Select, { createFilter } from 'react-select'
import { MidiDevice } from '../../utils'

const MidiSelector = () => {
  const fromStartFilter = useMemo(
    () =>
      createFilter({
        matchFrom: 'start',
      }),
    []
  )

  const [availableMidiDevices, setAvailableMidiDevices] = useState<
    MidiDevice[]
  >([])

  useEffect(() => {
    invoke('list_midi_connections').then((devices) => {
      const devicesObject = devices as { [key: string]: string }
      const midiConnectionKeys = Object.keys(devicesObject as {})
      setAvailableMidiDevices(() => {
        const midiDevices: MidiDevice[] = []
        for (const ck in midiConnectionKeys) {
          const id = Number(ck)
          const name = devicesObject[ck]
          midiDevices.push({ id, name } as MidiDevice)
        }

        console.log(midiDevices)
        return midiDevices
      })
    })
  }, [])

  const options = useMemo(
    () =>
      availableMidiDevices.map((d) => ({
        value: d.id,
        label: d.name,
      })),
    [availableMidiDevices]
  )

  return (
    <Select
      filterOption={fromStartFilter}
      options={options}
      placeholder='Choose MIDI...'
    />
  )
}

export default MidiSelector
