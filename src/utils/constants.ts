export type MetroSettingType = keyof typeof SETTINGS

export const SETTINGS = {
  // Key: Label
  'show-metronome': 'Show metronome',
  'dark-mode': 'Dark mode',
  'change-theme': 'Change Theme',
  'mute-sound': 'Mute sound',
  'blink-on-tick': 'Blink on tick',
  'custom-background-color': 'Custom background',
} as const

export type TimeSignatureType = [number, number]

export const TIME_SIGNATURES: Array<TimeSignatureType> = [
  [4, 4],
  [3, 4],
  [2, 4],
  [2, 2],
  [3, 8],
  [6, 8],
  [9, 8],
  [12, 8],
  [5, 4],
  [6, 4],
]
