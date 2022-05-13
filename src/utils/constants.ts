export type SETTING_KEY = keyof typeof SETTINGS

export const SETTINGS = {
  'show-metronome': 'Show metronome',
  'dark-mode': 'Dark mode',
  'change-theme': 'Change Theme',
  'mute-sound': 'Mute sound',
  'blink-on-tick': 'Blink on tick',
  'custom-background-color': 'Custom background',
} as const
